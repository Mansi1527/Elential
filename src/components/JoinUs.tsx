"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { HamIcon, Menu } from "lucide-react";
import Image from "next/image";
export const JoinUs = () => {
    const sectionRef = useRef(null);
    const [typingKey, setTypingKey] = useState(0); // Key to reset Typewriter

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top 80%", // Trigger when 80% of section is in view
            onEnter: () => setTypingKey((prev) => prev + 1), // Restart Typewriter when scrolling down
            onEnterBack: () => setTypingKey((prev) => prev + 1), // Restart Typewriter when scrolling up
            toggleActions: "play none none none",
        });

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 }, // Start hidden and lowered
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: trigger }
        );

        return () => trigger.kill();
    }, []);

    return (
        <div ref={sectionRef} className="pb-10 h-full bg-gray-100">
            <div className="flex flex-col gap-2 bg-gray-100">
                {/* Chrome-like Browser (Desktop) */}
                <div className="hidden md:block w-full bg-gray-100 border border-gray-300 rounded-lg">
                    {/* Tabs Section */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-t-lg">
                        <div className="flex items-center gap-2 px-4 py-1 bg-white rounded-md">
                            <span className="text-sm text-gray-700">Elevate</span>
                            <button className="text-gray-500 hover:text-black">&times;</button>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-1 bg-gray-300 rounded-md">
                            <span className="text-sm text-gray-500">+</span>
                            {/* <button className="text-gray-400 hover:text-gray-600">&times;</button> */}
                        </div>
                        <button className="ml-auto text-gray-600 hover:text-black text-lg">+</button>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center px-4 py-2 bg-white border-t border-gray-300">
                        <div className="flex items-center flex-grow gap-2 px-4 py-2 bg-gray-100 rounded-full shadow-inner">
                            <span className="text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a2 2 0 0 1 .4 2.2l-1 1.7a2 2 0 0 1-2.5.8l-1.2-.5a6.9 6.9 0 0 1-2.4 0l-1.2.5a2 2 0 0 1-2.5-.8l-1-1.7a2 2 0 0 1 .4-2.2l.9-.8a6.5 6.5 0 0 1 0-2.4l-.9-.8a2 2 0 0 1-.4-2.2l1-1.7a2 2 0 0 1 2.5-.8l1.2.5a6.9 6.9 0 0 1 2.4 0l1.2-.5a2 2 0 0 1 2.5.8l1 1.7a2 2 0 0 1-.4 2.2l-.9.8a6.5 6.5 0 0 1 0 2.4z"></path>
                            </svg></span>
                            <input
                                type="text"
                                placeholder="www.elevate.in"
                                className="flex-grow bg-transparent focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                {/* Safari-like Browser (Mobile) */}


                {/* Content Section */}
                <div className="flex mx-10 mt-5 justify-between">
                    <div className="flex relative gap-2">
                        {/* <Image src="/elevate.png" width={100} height={0} alt=""/> */}
                    </div>
                    <div className="flex gap-4 ">
                    {/* <p className="hover:underline hover:cursor-pointer">Home</p>
                    <p className="hover:underline hover:cursor-pointer">About</p>
                    <p className="hover:underline hover:cursor-pointer">Contact</p> */}
                        {/* <Image src="/elevate.png" width={150} height={200} alt="" className="hidden md:flex justify-start"/> */}
                    </div>
                    
                </div>
                <section className="px-4 py-5 md:py-10 mx-auto">
                    <div className="w-full mx-auto lg:w-2/3">
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                            <Typewriter
                                key={typingKey} // Reset Typewriter on key change
                                options={{
                                    strings: ["For Developers"],
                                    autoStart: true,
                                    loop: false,
                                    delay: 50,
                                    deleteSpeed: Infinity,
                                }}
                            />
                        </p>

                        <h1 className="mb-3 text-lg font-bold leading-tight text-gray-900 md:text-4xl">
                            <Typewriter
                                key={typingKey + 1} // Ensure unique key for independent resets
                                options={{
                                    strings: ["Focus on your web apps"],
                                    autoStart: true,
                                    loop: false,
                                    delay: 50,
                                    deleteSpeed: Infinity,
                                }}
                            />
                        </h1>

                        <p className="hidden md:block md:mb-5 mb-2 text-sm text-gray-500 md:text-lg">
                            In today's digital world, every company relies on apps to engage customers and drive business success. Elevate your ability to build, manage, and deploy high-quality apps at scale with us—empowering innovation and growth every step of the way. 🚀
                        </p>
                        <p className="md:hidden mb-2 text-sm text-gray-500">
                            Build, manage, and deploy high-quality apps at scale.Build, manage, and deploy high-quality apps at scale. Build, manage, and deploy high-quality apps at scale. 🚀
                        </p>

                        <button
                            className="w-full mb-2 hover:bg-black hover:text-blue-500 hover:drop-shadow-2xl hover:transition hover:duration-500 md:mb-2 btn text-sm md:text-xl btn-primary btn-sm md:btn-lg sm:mb-0"
                        >
                            <Link href="#contactus" className="md:flex hidden">Get Started with Us</Link>
                            <Link href="#contactus" className="md:hidden">Get Started </Link>
                        </button>
                    </div>
                </section>

                <div className="md:hidden w-full  fixed bottom-0 bg-white border-5 border-gray-300 rounded-lg shadow-lg z-50">
                    {/* Search Bar */}
                    <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-t-lg mx-2">
                        <div className="flex items-center flex-grow w-full  gap-2 px-4 py-2 bg-white rounded-full shadow-inner">
                            <span className="text-gray-400"><svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg></span>
                            <input
                                type="text"
                                placeholder="Search or enter website name"
                                className="flex-grow bg-transparent focus:outline-none  text-sm"
                            />
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1v11" />
                                <rect x="9" y="1" width="6" height="11" rx="3" />
                                <path d="M5 10v2a7 7 0 0 0 14 0v-2" />
                                <line x1="12" y1="19" x2="12" y2="23" />
                                <line x1="8" y1="23" x2="16" y2="23" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom Navigation (Safari-style) */}
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-b-lg">
                        <button className="text-gray-600 text-xl">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="#007AFF"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg></button>
                        <button className="text-gray-600 text-xl"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="#007AFF"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg></button>
                        <button className="text-gray-600 text-xl">  <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="#007AFF" // Apple's Blue Color
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 3v12" />
                            <path d="M16 7l-4-4-4 4" />
                            <path d="M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
                        </svg></button>
                        <button className="text-gray-600 text-xl"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="#007AFF"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 3v18l7-5 7 5V3z" />
                        </svg></button>

                        <button className="text-gray-600 text-xl"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="#007AFF"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="14" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
