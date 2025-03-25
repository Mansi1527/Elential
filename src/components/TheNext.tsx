import React from "react";
import { Cover } from "@/components/ui/cover";

export const TheNext = () => {
  return (
    <div className="flex  flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative z-20  bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 ">
        Build next-gen websites with <Cover>unmatched velocity</Cover>
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl text-center mt-4 text-gray-700 ">
        We empower you with game-changing advantages to seamlessly navigate your digital transformation.
      </p>
      <button className="btn-66 relative overflow-hidden border-2 bg-black border-white text-transparent font-bold uppercase px-14 h-10 rounded-full transition-all duration-200 hover:border-wheat mt-6">
        Get Started
      </button>

      <style>
        {`
          .btn-66 {
            --progress: 0px;
            text-shadow: 0 calc(var(--progress) * -1) white, 0 calc(40px - var(--progress)) wheat;
          }
          .btn-66:hover {
            --progress: 40px;
          }
        `}
      </style>
    </div>
  );
};
