// // import { useState } from "react";
// // import Link from "next/link";
// // import { motion, AnimatePresence } from "framer-motion";

// // export const Header = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <header className="p-4 flex justify-between items-center mx-10 relative ">
// //       <h1 className="text-lg font-bold">Elevate</h1>

// //       {/* Animated Menu Button */}
// //       <motion.button
// //         onClick={() => setIsOpen(true)}
// //         className="p-2 text-xl"
// //         whileHover={{ rotate: 90, scale: 1.2 }}
// //         whileTap={{ rotate: 90, scale: 0.9 }}
// //       >
// //         ☰
// //       </motion.button>

// //       {/* Full-Screen Overlay with Animation */}
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             className="fixed inset-0 bg-black rounded-bl-full bg-opacity-80 flex flex-col justify-center items-center text-white space-y-6 text-2xl z-50"
// //             initial={{ opacity: 0, y: "-100%",x:"100%" }}
// //             animate={{ opacity: 1, y: 0 ,x:0}}
// //             exit={{ opacity: 0, y: "-100%",x:"100%" }}
// //             transition={{ duration: 1, ease: "easeInOut" }}
// //           >
// //             {/* Animated Close Button */}
// //             <motion.button
// //               onClick={() => setIsOpen(false)}
// //               className="absolute top-5 right-12 text-3xl"
// //               whileHover={{ rotate: 90, scale: 1.2 }}
// //               whileTap={{ rotate: 90, scale: 0.9 }}
// //             >
// //               ✖
// //             </motion.button>

// //             {/* Animated Links with Hover Circle */}
// //             {["Home", "About", "Projects", "Contact Us"].map((text, index) => (
// //               <motion.div
// //                 key={text}
// //                 className="relative flex items-center justify-center"
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 animate={{ opacity: 1, scale: 1 }}
// //                 exit={{ opacity: 0, scale: 0.8 }}
// //                 transition={{ duration: 0.3, delay: index * 0.1 }}
// //               >
// //                 {/* Expanding Circle on Hover */}
// //                 <motion.span
// //                   className="absolute w-0 h-0 bg-white rounded-full opacity-20"
// //                   whileHover={{ width: 60, height: 60 }}
// //                   transition={{ duration: 0.3 }}
// //                 />

// //                 <Link
// //                   href={`#${text.toLowerCase().replace(/\s/g, "")}`}
// //                   className="relative z-10 px-4 py-2"
// //                   onClick={() => setIsOpen(false)}
// //                 >
// //                   {text}
// //                 </Link>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </header>
// //   );
// // };


// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
// import { cn } from "@/libs/utils";

// export const Header=()=> {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <Navbar className="top-2" />
     
//     </div>
//   );
// }

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//       className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
//     >
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="Services">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }


"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export const Header=()=> {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};
