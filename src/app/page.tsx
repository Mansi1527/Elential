"use client";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis"; // Corrected Import

import { Loader } from "@/components/Loader";
import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
// import { GrProjects } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";

import { TheNext } from "@/components/TheNext";
import { Contact } from "@/components/Contact/index";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { Support } from "@/components/Services";
import { JoinUs } from "@/components/JoinUs";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// import { Projects } from "@/components/Projects";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjusts the scrolling speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      gestureOrientation: "vertical", // Ensures smooth vertical scrolling
      infinite: false, // Prevents infinite scrolling
    });
    

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Reviews",
      link: "#reviews",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "https://ggopen.my.canva.site/designs-portfolio",
      icon: <GoProjectSymlink className="h-4 w-4 text-neutral-500 dark:text-white" />,
    }
  ];

  return (
    <main className="bg-white text-black">
      {isLoading ? (
        <Loader onAnimationComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <FloatingNav navItems={navItems} />
          <Hero />
          <ContainerScroll titleComponent={undefined} children={<JoinUs />} />
          <TheNext />
          <Support />
          <Clients />
          {/* <Projects/> */}
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
}
