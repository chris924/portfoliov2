import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import TypewriterEffect from './animations/typewriter';




export default function CV() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, [])


  return (
    <div className="flex justify-center items-center min-h-screen">
      <motion.div
        ref={divRef}
        className="bg-white w-full sm:w-3/4 lg:w-2/3 shadow-lg p-10 rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="flex flex-col items-center sm:flex-row">
          <img
            src="/images/self.jpg"
            alt="Profile"
            className="w-32 aspect-square object-cover rounded-lg mr-6"
          />
          <div className='flex flex-col'>
            <h1 className="text-2xl font-bold text-gray-800">
              <TypewriterEffect text="Burka Krisztofer" />
            </h1>
            <p className="text-lg text-gray-600">
              <TypewriterEffect text="Szoftverfejlesztő" />
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600">
            <strong><TypewriterEffect text="Cím:" /></strong>{" "}
            <TypewriterEffect text="1116 Budapest" />
          </p>
          <p className="text-sm text-gray-600">
            <strong><TypewriterEffect text="Születési dátum:" /></strong>{" "}
            <TypewriterEffect text="1999. március 04." />
          </p>
          <p className="text-sm text-gray-600">
            <strong><TypewriterEffect text="Telefon:" /></strong>{" "}
            <TypewriterEffect text="+36 30 506 8486" />
          </p>
          <p className="text-sm text-gray-600">
            <strong><TypewriterEffect text="Email:" /></strong>{" "}
            <TypewriterEffect text="kriszb924@gmail.com" />
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            <TypewriterEffect text="Tapasztalat" />
          </h2>
          <div className="mt-2">
            <p className="font-bold text-gray-800">
              <TypewriterEffect text="Info-M Zrt." />
            </p>
            <p className="text-sm text-gray-600">
              <strong><TypewriterEffect text="Időszak:" /></strong>{" "}
              <TypewriterEffect text="2024 -" />
            </p>
            <p className="text-sm text-gray-600">
              <TypewriterEffect text="Fullstack feladatkör" />
            </p>
          </div>

          <div className="mt-2">
            <p className="font-bold text-gray-800">
              <TypewriterEffect text="Baranya Megyei Kormányhivatal - Mohácsi Járási Hivatal Foglalkoztatási Osztály" />
            </p>
            <p className="text-sm text-gray-600">
              <strong><TypewriterEffect text="Időszak:" /></strong>{" "}
              <TypewriterEffect text="2021 - 2021" />
            </p>
            <p className="text-sm text-gray-600">
              <TypewriterEffect text="GINOP támogatás általi képzések menedzselése" />
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            <TypewriterEffect text="Tanulmányok" />
          </h2>
          <div className="mt-2">
            <p className="font-bold text-gray-800">
              <TypewriterEffect text="Codecool" />
            </p>
            <p className="text-sm text-gray-600">
              <TypewriterEffect text="Fullstack Developer képzés (2023-2023)" />
            </p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-gray-800">
              <TypewriterEffect text="GAZDÁLKODÁSI ÉS MENEDZSMENT - Pécsi Tudományegyetem" />
            </p>
            <p className="text-sm text-gray-600">
              <TypewriterEffect text="(2018 - 2022)" />
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              <TypewriterEffect text="Nyelvismeret" />
            </h2>
            <p className="text-sm text-gray-600">
              <strong><TypewriterEffect text="Angol:" /></strong>{" "}
              <TypewriterEffect text="Középfokú nyelvvizsga" />
            </p>
            <p className="text-sm text-gray-600">
              <strong><TypewriterEffect text="Német:" /></strong>{" "}
              <TypewriterEffect text="Társalgási szint" />
            </p>
          </div>
          <div className=''>
            <h2 className="text-xl font-semibold text-gray-800">
              <TypewriterEffect text="Egyéb Ismeretek"/>
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
