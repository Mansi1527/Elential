import Image from "next/image";
import Typewriter from "typewriter-effect";
import { WorldMap } from "./ui/world-map";
import Link from "next/link";

export const Hero = () => {
  const hero = "/heroimg1.png";

  return (
    <>
      <Image src="/elevate.png" width={150} height={200} alt="" className="hidden md:flex justify-start" />
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
              {/* <br /> */}

            </span>
            <div className="flex justify-center items-center md:justify-start md:items-start">
            <Link href="#contactus">

              <button className="flex md:mt-5 mb-5 md:mb-0  items-center font-medium text-white px-5 py-3 text-[17px] rounded-[16px] bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] border-none tracking-wide transition-all duration-500 hover:shadow-lg group">
                <svg
                  className="mr-1 rotate-[30deg] transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-[90deg] group-hover:translate-x-[5px]"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    fill="currentColor"
                  />
                </svg>
                <span className="transition-transform duration-[500ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[7px]">
                  Get Started
                </span>
              </button>

            </Link>
            </div>
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
