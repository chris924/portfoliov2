import { useEffect, useRef } from 'react';
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
        className="bg-slate-300 w-full sm:w-3/4 lg:w-2/3 shadow-lg p-10 rounded-md"
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
            <p className="text-lg justify-center flex text-gray-600">
              <TypewriterEffect text="Software Developer" />
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
            <TypewriterEffect text="1999. March 04." />
          </p>
          <p className="text-sm text-gray-600">
            <strong><TypewriterEffect text="Phone:" /></strong>{" "}
            <TypewriterEffect text="+36 30 506 8486" />
          </p>
          <p className="text-sm text-gray-600">
            <strong><TypewriterEffect text="Email:" /></strong>{" "}
            <TypewriterEffect text="kriszb924@gmail.com" />
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            <TypewriterEffect text="Experience" />
          </h2>
          <div className="mt-2">
            <p className="font-bold text-gray-800">
              <TypewriterEffect text="Info-M Zrt." />
            </p>
            <p className="text-sm text-gray-600">
              <strong><TypewriterEffect text="Period:" /></strong>{" "}
              <TypewriterEffect text="2024 -" />
            </p>
            <p className="text-sm text-gray-600">
              <TypewriterEffect text="Front end and back end development to ensure integration between client-side and server-side." />
            </p>
          </div>

          <div className="mt-2">
            <p className="font-bold text-gray-800">
              <TypewriterEffect text="Baranya County Government Office - Mohács District Office Employment Department" />
            </p>
            <p className="text-sm text-gray-600">
              <strong><TypewriterEffect text="Period:" /></strong>{" "}
              <TypewriterEffect text="2021 - 2021" />
            </p>
            <p className="text-sm text-gray-600">
              <TypewriterEffect text="Management of trainings supported by GINOP" />
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            <TypewriterEffect text="Studies" />
          </h2>
          <div className="mt-2">
            <p className="font-bold text-gray-800">
              <TypewriterEffect text="Codecool" />
            </p>
            <p className="text-sm text-gray-600">
              <TypewriterEffect text="Fullstack Developer (2023-2023)" />
            </p>
          </div>
          <div className="mt-2">
            <p className="font-bold text-gray-800">
              <TypewriterEffect text="Business Administration and Management - University of Pécs" />
            </p>
            <p className="text-sm text-gray-600">
              <TypewriterEffect text="(2018 - 2022)" />
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              <TypewriterEffect text="Language" />
            </h2>
            <p className="text-sm text-gray-600">
              <strong><TypewriterEffect text="English:" /></strong>{" "}
              <TypewriterEffect text="Fluent" />
            </p>
            <p className="text-sm text-gray-600">
              <strong><TypewriterEffect text="German:" /></strong>{" "}
              <TypewriterEffect text="Talking level" />
            </p>
          </div>
          <div className=''>
            <h2 className="text-xl font-semibold text-gray-800">
              <TypewriterEffect text="Other knowledge:"/>
            </h2>
            <p className='text-sm text-gray-600'><TypewriterEffect text="Microsoft Office, ASP.Net, Spring Boot, Docker, React" /></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
