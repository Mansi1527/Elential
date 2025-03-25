"use client";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";

import { ReactLenis } from "lenis/react";

import {About} from "@/components/About"
import { Projects } from "@/components/Projects";
import { Support } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { Clients } from "@/components/Clients";
import { JoinUs } from "@/components/JoinUs";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
// import { Services } from "@/components/Services";
import { TheNext } from "@/components/TheNext";
import { Contact } from "@/components/Contact/index";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

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
        icon: (
          <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
        ),
      },
    ];
  return (
    <ReactLenis root>
      {isLoading ? (
        <Loader onAnimationComplete={() => setIsLoading(false)} />
      ) : (
        <main className="bg-white text-black">
           <FloatingNav navItems={navItems} />
          {/* <Header /> */}
          <Hero />
          <ContainerScroll titleComponent={undefined} children={<JoinUs />} />
          

          <TheNext />
          
          {/* About before Projects (Hidden on md screens) */}
          <div className="block md:hidden lg:block">
            {/* <About /> */}
          </div>

          <Support />
          {/* <Projects /> */}

          {/* About after Projects (Visible only on md screens) */}
          {/* <div className="hidden md:block">
            <About />
          </div> */}

          <Clients />
          {/* <Services /> */}
          <Contact />
          <Footer />
        </main>
      )}
    </ReactLenis>
  );
}
