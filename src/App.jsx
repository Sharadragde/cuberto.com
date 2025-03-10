import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import "remixicon/fonts/remixicon.css";
import myVidio2 from "../public/assets/vidio/short.mp4";
import myVidio3 from "../public/assets/vidio/hero.mp4";
import myVidio4 from "../public/assets/vidio/c-vidio.mp4";
import myVidio5 from "../public/assets/vidio/vidio-2.mp4";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoverText, setIsHoverText] = useState(false);
   const textRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

   useEffect(() => {
     const text = textRef.current;
     let degree = 0;
     const animateText = () => {
       degree += 1;
       text.style.transform = `rotate(${degree}deg)`;
       requestAnimationFrame(animateText);
     };
     animateText();
   }, []);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        position={position}
        setIsHoverText={setIsHoverText}
      />
      <div className="mt-20 mx-20 md:mx-40 w-2/3 tracking-tighter h-[200px] sm:h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden sm:text-7xl md:text-9xl text-4xl">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          We are a digital
        </motion.div>

        <motion.span
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="inline-block align-middle relative mx-3"
        >
          <video
            autoPlay
            loop
            muted
            src={myVidio3}
            className="rounded-full sm:h-14 md:h-28 h-12 lg:h-30 relative top-1/2 -translate-y-3/2"
          />
        </motion.span>

        <motion.span
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          className="inline-block font-light italic"
        >
          design
        </motion.span>

        <motion.span
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className=" ml-4 sm:text-7xl md:text-9xl text-4xl"
        >
          and motion agency
        </motion.span>
      </div>

      {/* section-2 vidio */}
      <div
        className="h-full"
        onMouseEnter={() => setIsHoveringVideo(true)}
        onMouseLeave={() => setIsHoveringVideo(false)}
      >
        <video autoPlay loop muted src={myVidio2} className="w-full"></video>
      </div>

      {/* section-3  */}
      <div className="flex items-center justify-center min-h-screen bg-white p-10 gap-32 ml-0 sm:ml-32 md:ml-48 max-w-full">
        <div className="w-0 md:w-1/2 lg:w-1/3 flex justify-center">
          <video autoPlay loop muted src={myVidio4}></video>
        </div>
        <div className="w-full md:w-2/3 space-y-8">
          <p className="sm:text-4xl text-2xl max-w-lg">
            Cuberto is a leading digital product agency focused on branding,
            UI/UX design, mobile, and web development.
          </p>
          <button
            className="relative px-16 py-10 md:px-28 md:py-16 text-2xl font-medium border border-black rounded-full overflow-hidden group"
            onMouseEnter={() => setIsHoveringButton(true)}
            onMouseLeave={() => setIsHoveringButton(false)}
          >
            <span className="absolute inset-0 bg-black rounded-full scale-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-100"></span>
            <span className="relative text-black transition-colors duration-500 group-hover:text-white">
              What we do
            </span>
          </button>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 hidden  lg:flex items-center justify-center w-52 h-52">
        <div
          ref={textRef}
          className="absolute w-full h-full flex items-center justify-center animate-spin-slow"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <path
              id="circlePath"
              d="M50,50 m-35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="none"
            />
            <text fontSize="6" className="fill-gray-600">
              <textPath href="#circlePath" startOffset="0%">
                contact - contact - contact - contact -
              </textPath>
            </text>
          </svg>
        </div>

        <div className="absolute w-24 h-24 rounded-full overflow-hidden bg-transparent shadow-lg">
          <video
            src={myVidio5}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        className={`fixed z-20 top-0 left-0 pointer-events-none transition-all duration-300 ease-out flex items-center justify-center 
    ${
      isHoveringVideo
        ? "w-20 h-20 bg-white rounded-full border"
        : isHoveringButton
        ? "w-6 h-6 bg-gray-200 rounded-full"
        : isHoverText
        ? "w-10 h-10 bg-gray-800 rounded-full"
        : "w-2 h-2 bg-gray-800 rounded-full"
    }`}
        style={{
          transform: `translate(${
            position.x -
            (isHoveringVideo ? 40 : isHoveringButton ? 8 : isHoverText ? 12 : 4)
          }px, ${
            position.y -
            (isHoveringVideo ? 40 : isHoveringButton ? 8 : isHoverText ? 12 : 4)
          }px)`,
        }}
      >
        {isHoveringVideo && <i className="ri-play-large-line text-2xl"></i>}
      </div>
    </>
  );
};

export default App;
