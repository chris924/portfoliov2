import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import RevealOnScroll from "@/components/animations/revealonscroll";
import { useState } from "react";
import LevelViewer from "@/components/animations/leverviewer";
import "../styles/globals.css"
import MainText from "@/components/mainText";




export default function IndexPage() {

  const leverUrl = "/models/lever.glb";


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
          
          <MainText/>
           
        )}
   
</>
  );
}
