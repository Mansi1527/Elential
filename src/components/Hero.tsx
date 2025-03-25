import Image from "next/image";
import Typewriter from "typewriter-effect";
import { WorldMap } from "./ui/world-map";

export const Hero = () => {
  const hero = "/heroimg1.png";

  return (
    <>
     <Image src="/elevate.png" width={150} height={200} alt="" className="hidden md:flex justify-start"/>
    <div id="home" className="w-full px-6 md:px-20 flex flex-col items-center justify-center mt-10">
   
    <div id="home" className="flex  sm:flex-row items-center justify-center mt-10 md:mt-0 w-full  mx-10 md:mx-20">
      {/* Wrapper for content and image */}
      <div className="flex justify-center items-center w-full max-w-6xl flex-col md:flex-row ">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center text-center  mt-10 md:mt-0">
          <p className="text-xl xl:text-5xl lg:text-4xl md:text-2xl font-semibold">
            Building trust through top-tier solutions tailored for your success.
          </p>
          <span className="flex flex-row justify-center md:justify-start items-center text-lg md:text-xl lg:text-2xl font-bold mb-10 md:mb-0 mt-8 whitespace-nowrap">
            <p className="text-gray-500">We provide&nbsp;</p>
            <Typewriter
              options={{
                strings: ["Reliable", "Scalable", "Innovative", "Secure"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "text-blue-500"
              }}
            />
            <p className="text-gray-500">&nbsp;Solutions</p>
          </span>
        </div>

        {/* Right Image */}
        {/* <motion.div
          animate={{ y: [0, -20, 0] }} // Moves up and down
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} // Smooth continuous motion
        >
          <Image src={hero} alt="Hero Image" width={500} height={500} className="w-90 h-auto" />
        </motion.div> */}
      </div>
      
      
    
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
        
      />
      </div>
      </>
  );
};
