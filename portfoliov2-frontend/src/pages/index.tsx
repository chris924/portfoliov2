
import { useState } from "react";
import LevelViewer from "@/components/animations/leverviewer";
import "../styles/globals.css"
import MainText from "@/components/mainText";




export default function IndexPage() {

  const leverUrl = "/models/lever.glb";

// @ts-ignore
  const [leverTriggered, setLeverTriggered] = useState(false);
  const [removeCanvas, setRemoveCanvas] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  
  const handleLeverTrigger = () => {
    setLeverTriggered(true);
    setTimeout(() => {
      setRemoveCanvas(true);
      setOverlayVisible(false);
    }, 3000); 
  };


  return (
    <>
      <div className={`dark-overlay ${overlayVisible ? 'visible' : 'hidden'}`}> 
        {!removeCanvas && (
          <>
          <LevelViewer modelUrl={leverUrl} onLeverTrigger={handleLeverTrigger} /></>
          
        )}  
      </div>

      {!overlayVisible && (
          <>
          <MainText/>
          
           </>
        )}
   
</>
  );
}
