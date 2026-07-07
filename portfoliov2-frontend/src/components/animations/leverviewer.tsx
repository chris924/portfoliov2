import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useThree, ThreeEvent } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import '../../styles/globals.css';
import '../../styles/leverviewer.css';

interface ModelProps {
  url: string;
  onClick: () => void;
}

const Model: React.FC<ModelProps> = ({ url, onClick }) => {
  const group = useRef<THREE.Group>(null);
  const triggered = useRef(false);
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);
  const { invalidate, clock } = useThree();

  // Render once the model has loaded (required under frameloop="demand").
  useEffect(() => {
    invalidate();
  }, [scene, invalidate]);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    // A tap raycasts through every mesh in the model, firing this once per
    // mesh. Stop propagation and guard so the lever triggers exactly once.
    e.stopPropagation();
    if (triggered.current) return;
    triggered.current = true;

    const action = actions[Object.keys(actions)[0]];

    if (action) {
      action.setLoop(THREE.LoopOnce, 0);
      action.clampWhenFinished = true;
      action.setDuration(0.39); // Duration for the animation
      action.reset().play();

      // Discard the wall-clock time accumulated while idle under demand mode,
      // so the first animation frame gets a normal delta instead of jumping
      // the whole clip to the end.
      clock.getDelta();

      // Under demand rendering, pump frames only for the pull's duration.
      const end = performance.now() + 500;
      const tick = () => {
        invalidate();
        if (performance.now() < end) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    onClick();
  };

  return (
    <group ref={group} onClick={handleClick}>
      <primitive object={scene} scale={[0.01, 0.01, 0.01]} position={[0, -1, 0]} />
    </group>
  );
};

const CameraSetup: React.FC = () => {
  const { camera } = useThree();
  camera.position.set(0, 0.3, 5);
  return null;
};

interface LevelViewerProps {
  modelUrl: string;
  onLeverTrigger: () => void;
}

const LevelViewer: React.FC<LevelViewerProps> = ({ modelUrl, onLeverTrigger }) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const [isLeverVisible, setLeverVisible] = useState(true);
  // Keep the WebGL context alive only until the lever has faded out.
  const [canvasMounted, setCanvasMounted] = useState(true);

  useEffect(() => {
    // Play through the iOS hardware mute switch (Safari 16.4+) by using the
    // "playback" audio session category instead of the default "ambient".
    const nav = navigator as Navigator & { audioSession?: { type: string } };
    if (nav.audioSession) {
      nav.audioSession.type = 'playback';
    }

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    const ctx = new AudioCtx();
    audioCtxRef.current = ctx;

    // Fetch + decode the clip once so it's ready to fire instantly.
    let cancelled = false;
    fetch('/sounds/leverpull.mp3')
      .then((res) => res.arrayBuffer())
      .then((data) => ctx.decodeAudioData(data))
      .then((decoded) => {
        if (!cancelled) bufferRef.current = decoded;
      })
      .catch(() => {});

    // Mobile browsers keep the AudioContext "suspended" until a user gesture.
    // Resume it on the first touch/click so the lever sound is unlocked.
    const unlock = () => {
      if (ctx.state === 'suspended') ctx.resume();
    };
    window.addEventListener('pointerdown', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
      ctx.close();
    };
  }, []);


  const handleModelClick = () => {
    const ctx = audioCtxRef.current;
    const buffer = bufferRef.current;

    if (ctx && buffer) {
      const startSound = () => {
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start(0, 2); // play from 2s in
      };

      // iOS resumes asynchronously; play only once the context is running,
      // otherwise start() on a suspended context is silently dropped.
      if (ctx.state === 'running') {
        startSound();
      } else {
        ctx.resume().then(startSound).catch(() => {});
      }
    }

    onLeverTrigger();
    setLeverVisible(false);
  };

  return (
    <div className="fullscreen-container">
      <div className="canvas-container">
        <motion.div
          className="canvas-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLeverVisible ? 1 : 0 }}
          transition={{ duration: 3 }}
          onAnimationComplete={() => {
            if (!isLeverVisible) setCanvasMounted(false);
          }}
        >
          {canvasMounted && (
            <Canvas frameloop="demand" dpr={[1, 1.5]}>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Suspense fallback={null}>
                <Model url={modelUrl} onClick={handleModelClick} />
              </Suspense>
              <CameraSetup />
            </Canvas>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default LevelViewer;
