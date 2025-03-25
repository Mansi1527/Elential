'use client'

import {delay, motion, spring} from "framer-motion"
import { useEffect } from "react"
export const Loader=({ onAnimationComplete }: { onAnimationComplete: () => void })=> {

  const svgVariants={
    hidden:{rotate:-180},
    visible:{
      rotate:0,
      transition:{duration:1,delay:5},
      
    },
    zommed:{
      scale:20,
      transition:{
        duration:2,
        delay:8,
        ease:"easeInOut"
      }
        
    },
    movedright:{
      x:200,
      transition:{
        type:"spring",
        stiffness:100,
        damping:10,
      }
    }
  }

  const pathVariants={
    hidden:{opacity:0,pathLength:0},
    visible:{
      opacity:1,

      fill: ["gray", "black", "gray"], 
      pathLength:1,
      transition:{
        duration:5,
        delay:2,
        ease:"easeInOut",
        fill: { duration: 2, repeat: Infinity, repeatType: "reverse" },
        
      }

    },
    fullWhite: {
      fill: "white", // Final transition to full white
      transition: { duration: 10,delay:7 },
    },
  }

  const pVaiants={
    hidden:{opacity:0,x:-180},
    moveRight:{
      x:0,
      transition:{
        duration:2,
        ease:"easeOut"
      }
    },
    bounceBack:{
      x:50,
      transition:{
        type:"spring",
        stiffness:300,
        damping:10,
      }
    },
    moveLeft:{
      x:200,
      transition:{
        duration:1
      }
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        duration:4,
        
      }

    }
  }

  const lineVariant1 = {
    hidden: { width: 0, opacity: 1,x:-180 },
    expand: {
      x:0,
      width:50,
      transition: { duration: 2, ease: "easeOut" },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 1, delay: 3 }, // Delay to ensure fade happens after expansion
    },
  };
  const lineVariant2 = {
    hidden: { width: 0, opacity: 1,x:180 },
    expand: {
      x:0,
      width:50,
      transition: { duration: 2, ease: "easeOut" },
    },
    fadeOut: {
      opacity: 0,
      transition: { duration: 1, delay: 3 }, // Delay to ensure fade happens after expansion
    },
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationComplete(); // Hide animation after it finishes
    }, 12000); // Adjust timing based on your longest animation

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);
  
  return (
    <div className="logo bg-black flex justify-center items-center h-screen overflow-hidden">
    {/* <motion.p 
          variants={pVaiants}
          initial="hidden"
          animate={["moveRight","bounceBack","moveLeft"]}
          className="text-red-500"
          >Company
      </motion.p> */}
      <motion.div
        className="h-[3px] w-full mt-10 mr-2 bg-gray-500 absolute"
        variants={lineVariant1}
        initial="hidden"
        animate={["expand", "fadeOut"]}
      ></motion.div>
      <motion.div
        className="h-[3px] mt-10 mr-2 bg-gray-500 absolute"
        variants={lineVariant2}
        initial="hidden"
        animate={["expand", "fadeOut"]}
      ></motion.div>



    <div className="">
     <motion.svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={200}
            height={500} 
            variants={svgVariants}
            initial="hidden"
            animate={["visible","movedRigth","zommed"]}
            >
          <motion.path
          variants={pathVariants}
          initial="hidden"
          animate={["visible","fullWhite"]}
            fill="none"
            stroke="white"
            strokeWidth={1}
            
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
           variants={pathVariants}
           initial="hidden"
           animate={["visible","fullWhite"]}
           stroke="white"
           strokeWidth={1}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
        
        {/* <Balls/> */}
    </div>
    <div>
      
    </div>

    </div>
    
  );
}
