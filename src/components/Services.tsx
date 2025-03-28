

"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const Support = () => {
  const tabs = [
    {
      title: "Web development",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-[20rem] md:h-full rounded-2xl   text-lg md:text-4xl font-bold text-white bg-black">
          {/* <p className="md:mx-10 mt-10">Web Development</p> */}
          <DummyContent src="/webdev.jpg" title="Web Development" desc="Building high-performance, scalable, and secure websites that drive success in the digital world. Our web development services focus on creating custom, responsive, and user-friendly solutions tailored to your business needs. From dynamic websites to complex web applications, we use the latest technologies to ensure speed, security, and seamless functionality. Whether you're a startup or an enterprise, our expert developers deliver cutting-edge solutions that enhance user experience and optimize performance. Turn your vision into reality with powerful web development solutions designed for growth!"/>
        </div>
      ),

    },
    {
      title: "Web Designing",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-[20rem] md:h-full rounded-2xl text-lg md:text-4xl font-bold text-white bg-black">
          {/* <p className="md:mx-10 mt-10">Web Designing</p> */}
          <DummyContent src="/webdesign.png" title="Web Designing" desc="Crafting visually stunning and user-friendly web designs, we ensure your brand stands out in the digital world. Our expert designers focus on creating modern, responsive, and intuitive layouts that enhance user experience and drive engagement. Whether it’s a new website or a revamp of an existing one, every element—from typography to color schemes—is thoughtfully designed for both aesthetics and functionality. With a mobile-first approach, seamless navigation, and pixel-perfect precision, we bring your vision to life. Elevate your brand with creative and impactful web design solutions!"/>
        </div>
      ),
      src: ""
    },
    {
      title: "Web Hosting",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-[20rem] md:h-full rounded-2xl   text-lg md:text-4xl font-bold text-white bg-black">
          {/* <p className="md:mx-10 mt-10">Web Hosting</p> */}
          <DummyContent src="/webhosting.png" title="Web Hosting" desc="At Elential, we provide reliable, secure, and high-performance web hosting services tailored to meet the needs of businesses of all sizes. Our hosting solutions ensure 99.9% uptime, lightning-fast loading speeds, and robust security to keep your website running smoothly at all times. Whether you need shared hosting, VPS, or dedicated servers, we offer scalable options to match your growing business demands. With automated backups, SSL certification, and 24/7 technical support, Elential guarantees a seamless online experience so you can focus on what matters—growing your business. Power your website with Elential and experience hosting without limits!"/>
        </div>
      ),
      src: ""
    },
    {
      title: "SEO",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-[20rem] md:h-full rounded-2xl  text-lg md:text-4xl font-bold text-white bg-black">
          {/* <p className="md:mx-10 mt-10">Search Engine Optimisation</p> */}
          <DummyContent src="/seo.png"  title="Search Engine Optimisation" desc="Boost your online visibility and outrank the competition with strategic SEO solutions. Our expert SEO services focus on keyword optimization, technical SEO, on-page and off-page strategies, and performance tracking to ensure your website ranks higher on search engines. We help businesses drive organic traffic, increase conversions, and enhance brand credibility through data-driven SEO techniques. Whether you're looking to improve your site's search rankings, optimize content, or build high-quality backlinks, we provide tailored strategies to achieve long-term success. Maximize your digital presence with our result-oriented SEO services!"/>
        </div>
      ),
      src: ""
    },
    {
      title: "Web Maintainence",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-[20rem] md:h-full rounded-2xl  text-lg md:text-4xl font-bold text-white bg-black">
          {/* <p className="md:mx-10 mt-10">Web Maintainence</p> */}
          <DummyContent src="/webmaintainence.png" title="Web Maintainence" desc="Keep your website secure, updated, and running at peak performance with our reliable web maintenance services. We provide regular updates, security patches, performance optimization, and bug fixes to ensure your site remains fast, secure, and fully functional. From content updates to backup management and troubleshooting, we take care of all the technical aspects so you can focus on growing your business. With 24/7 monitoring and proactive support, we prevent potential issues before they impact your users. Ensure a seamless digital experience with our comprehensive web maintenance solutions!"/>
        </div>
      ),

    },
  ];

  return (
    <div id="services" className="">

      <div className="h-[30rem] hidden md:flex md:h-[30rem]  [perspective:1000px] relative b flex flex-col  mx-auto w-full  mt-40">

        <h1 className="text-5xl font-semibold  flex justify-center items-center ">Services</h1>
        <Tabs tabs={tabs} />
      </div>

      {/* mobile */}

      <div className="md:hidden mx-5">
        <h1 className="text-5xl  flex justify-center items-center font-serif mt-20">Services</h1>
        <FeaturesSectionDemo />
      </div>

    </div>
  );
}

const DummyContent = ({ src, title,desc }: { src: string; title: string; desc: string}) => {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src={src}
        alt="dummy image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Title at the top-left */}
      <h2 className="absolute top-10 left-5 text-white text-xl md:text-4xl font-bold z-10">
        {title}
      </h2>

      {/* Centered Text */}
      {/* <p className="absolute mx-10 inset-0 flex justify-center items-center text-white font-thin text-lg md:text-sm lg:text-xl z-10">
      {desc}
      </p> */}
       <div className="absolute inset-0 flex justify-center items-center z-10 px-10">
        <p className="relative text-white font-thin text-lg md:text-sm lg:text-xl px-6 py-3 rounded-lg bg-black/30 backdrop-blur-md">
          {desc}
        </p>
      </div>
    </div>
  );
};



import React from "react";
import { useId } from "react";

export function FeaturesSectionDemo({ width, height, x, y, squares, ...props }: any) {
  return (
    <div className="pt-20 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b  from-neutral-100  to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800  relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600  mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Web Development",
    description:
      "We provide top-notch web development services, building scalable, secure, and high-performance websites tailored to your business needs.",
  },
  {
    title: "Web Designing",
    description:
      "Our expert designers craft visually appealing and user-friendly websites with a focus on seamless user experience and modern design trends.",
  },
  {
    title: "Web Hosting",
    description:
      "Reliable and secure web hosting solutions ensuring high uptime, fast loading speeds, and robust security for your online presence.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Boost your website’s visibility with our SEO strategies, including keyword optimization, on-page and off-page SEO, and performance tracking.",
  },
  {
    title: "Web Maintenance",
    description:
      "Keep your website updated, secure, and running smoothly with our regular maintenance and performance optimization services.",
  },
];


export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]  from-zinc-100/30 to-zinc-300/30  opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay  stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
