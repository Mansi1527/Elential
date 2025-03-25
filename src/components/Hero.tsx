import Image from "next/image";
import Typewriter from "typewriter-effect";
import { WorldMap } from "./ui/world-map";

export const Hero = () => {
  const hero = "/heroimg1.png";

  return (
    <>
     <Image src="/elevate.png" width={150} height={200} alt="" className="hidden md:flex justify-start"/>
    <div id="home" className="w-full px-16  flex flex-col items-center justify-center md:mt-0 lg:mt-10">
   
    <div id="home" className="flex flex-col-reverse sm:flex-row md:mt-0  mt-20 w-full  mx-10 md:mx-20 ">
      {/* Wrapper for content and image */}

        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left mt-10 md:mt-0">
          <p className="text-xl xl:text-5xl lg:text-4xl md:text-2xl font-semibold">
            Building trust through top-tier solutions tailored for your success.
          </p>
          <span className="flex flex-row justify-center md:justify-start items-center text-lg md:text-xl lg:text-2xl font-bold mb-10 md:mb-0 mt-3 whitespace-nowrap">
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

        
      {/* </div> */}
      <div className="relative w-full h-full mix-blend-normal">
  <WorldMap 
    dots={[
      { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: 34.0522, lng: -118.2437 } },
      { start: { lat: 64.2008, lng: -149.4937 }, end: { lat: -15.7975, lng: -47.8919 } },
      { start: { lat: -15.7975, lng: -47.8919 }, end: { lat: 38.7223, lng: -9.1393 } },
      { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 28.6139, lng: 77.209 } },
      { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 43.1332, lng: 131.9113 } },
      { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -1.2921, lng: 36.8219 } },
    ]}
    lineColor="blue"
  />
</div>
      </div>
      </div>
      </>
  );
};
