import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import '../../styles/globals.css';
import '../../styles/leverviewer.css';

interface ModelProps {
  url: string;
  onClick: () => void;
}


const Line = () => {

  const linePoints = [];

  linePoints.push(new THREE.Vector3(-1, 0, 0));
  linePoints.push(new THREE.Vector3(1, 0, 0));

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
  const lineMaterial = new THREE.LineBasicMaterial({color: 0xffffff});

}




const Sparks = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 3;
  const texture = new THREE.TextureLoader().load("/images/spark_test1.png");

  const particles = new Float32Array(particleCount * 3);
  const velocities = new Float32Array(particleCount * 3);
  const gravity = -0.05;
  const minHorizontalSpeed = 1;

  let timeInterval = 5;

  useEffect(() => {
    for (let i = 0; i < particleCount; i++) {



      // positions
      particles[i * 3] = 0; // X
      particles[i * 3 + 1] = 0; // Y
  

      

      //  velocities
     velocities[i * 3] = Math.random() * 2 - 1; // X 

       

      if (Math.abs(velocities[i * 3]) < minHorizontalSpeed) {
        velocities[i * 3] = velocities[i * 3] < 0 ? -minHorizontalSpeed : minHorizontalSpeed;
      }


      velocities[i * 3 + 1] = Math.random() * 2 - 1; // Y
   
      
    }
  }, []);

  useFrame(async (state, delta) => {
    const particlesArray = particlesRef.current?.geometry.attributes.position.array;
    const now = state.clock.getElapsedTime();

   

    if (particlesArray) {
      for (let i = 0; i < particlesArray.length; i += 3) {
       
        
            particlesArray[i] += velocities[i] * 0.1; //  speed
            particlesArray[i + 1] += velocities[i + 1] * 0.1;  // speed
         

            velocities[i + 1] += gravity; // Reduce Y velocity due to gravity


            velocities[i] *= 0.99; // Damping
            velocities[i + 1] *= 0.99; // Damping

         
           
            if (now >= timeInterval) {
              // Reset particles and velocities
              for (let j = 0; j < particlesArray.length; j += 3) {
                particlesArray[j] = 0; // Reset X position
                particlesArray[j + 1] = 0; // Reset Y position
                
                velocities[j] = Math.random() * 2 - 1; // Reset X velocity

                if (Math.abs(velocities[j]) < minHorizontalSpeed) {
                  velocities[j] = velocities[j] < 0 ? -minHorizontalSpeed : minHorizontalSpeed;
                }


                velocities[j + 1] = Math.random() * 2 - 1; // Reset Y velocity
                
              }
              timeInterval += 5;         
            }
      }

      if (particlesRef.current?.geometry?.attributes?.position) {
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
      }

    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={particles} itemSize={3} count={particles.length / 3} />
      </bufferGeometry>
      <pointsMaterial
       size={1}
       map={texture}
       transparent
       opacity={1}
       sizeAttenuation
       color={0xf3ff33}
       depthWrite={false} />
    </points>
  );
};


const Model: React.FC<ModelProps> = ({ url, onClick }) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  const handleClick = () => {
    if (actions && actions[Object.keys(actions)[0]]) {
      const action = actions[Object.keys(actions)[0]];

      if (action) {
        action.setLoop(THREE.LoopOnce, 0);
        action.clampWhenFinished = true;
        action.setDuration(0.39); // Duration for the animation
        action.reset().play();
      }
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
  const leverAudio = '/sounds/leverpull.mp3';
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [isLeverVisible, setLeverVisible] = useState(true);
  const [glowVisible, setGlowVisible] = useState(false); // New state for glow effect

  useEffect(() => {
    const audioInstance = new Audio(leverAudio);
    audioInstance.preload = 'auto';

    const handleCanPlayThrough = () => {
      setAudioLoaded(true);
      audioRef.current = audioInstance;
    };

    audioInstance.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      if (audioInstance) {
        audioInstance.removeEventListener('canplaythrough', handleCanPlayThrough);
        audioInstance.pause();
        audioInstance.src = '';
      }
    };
  }, [leverAudio]);

  // Handle model click
  const handleModelClick = () => {
    if (audioLoaded && audioRef.current) {
      const audio = audioRef.current;
      audio.currentTime = 2;
      audio.play();
    }

    onLeverTrigger();
    setTextVisible(true);
    setLeverVisible(false);
    setGlowVisible(true); // Trigger glow effect

    // Remove glow effect after 2 seconds
    setTimeout(() => {
      setGlowVisible(false);
    }, 2000);
  };

  return (
    <div className="fullscreen-container">
      <div className="canvas-container">
        <motion.div
          className="canvas-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLeverVisible ? 1 : 0 }}
          transition={{ duration: 3 }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <Model url={modelUrl} onClick={handleModelClick} />
              <Sparks />
            </Suspense>
            <OrbitControls enableRotate={false} enableZoom={false} />
            <CameraSetup />
          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default LevelViewer;