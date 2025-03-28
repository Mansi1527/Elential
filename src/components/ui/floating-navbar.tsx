"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { Button } from "./moving-border";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [isInFirstSection, setIsInFirstSection] = useState(true);
  const [initialStick, setInitialStick] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight * 0.1) {
        setIsInFirstSection(true);
      } else {
        setIsInFirstSection(false);
      }

      // Allow the navbar to move up after scrolling past 100px
      if (window.scrollY > 100) {
        setInitialStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (!isInFirstSection && !initialStick) {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          `fixed ${initialStick ? "top-10" : isInFirstSection ? "top-10" : "top-10"
          } flex max-w-fit inset-x-0 mx-auto border border-transparent  rounded-full  bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4`,
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className="relative  items-center flex space-x-1 text-neutral-600  hover:text-neutral-500"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <Link href="#contactus">
        <Button
        borderRadius="1.75rem"
        
        className="bg-white hover:scale-125 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Contact Us
      </Button>
          {/* <button className="relative px-6 py-3 font-semibold text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:backdrop-blur-md">
            <span className="relative z-10 text-black rounded-full">Contact Us</span>
            <span className="absolute inset-0 border-2 border-transparent rounded-full animate-border"></span>
          </button> */}
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
