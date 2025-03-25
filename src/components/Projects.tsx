import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const projectData = [
    { date: "January 1984", title: "First Macintosh computer", description: "Revolutionized personal computing with a graphical user interface. It introduced the mouse as a primary input device." },
    { date: "April 2024", title: "Application UI code in Tailwind CSS", description: "Developed a modern UI using Tailwind CSS with a responsive and accessible design." },
    { date: "October 2001", title: "iPod", description: "Changed the way people listen to music with 1000 songs in your pocket, redefining digital media consumption." },
    { date: "June 2007", title: "iPhone", description: "Transformed the mobile industry with a touchscreen smartphone, integrating a phone, iPod, and internet device." },
    { date: "April 2015", title: "Apple Watch", description: "Innovative smartwatch with fitness tracking and notifications, introducing heart rate monitoring features." }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".timeline-item");
    items.forEach((item: any, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });
  }, []);

  // for mobile
  useEffect(() => {
    if (window.innerWidth <= 768) { // Apply GSAP only for mobile
      const items = gsap.utils.toArray(".timeline-item");
      
      items.forEach((item: any) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",  // Trigger animation when item reaches 85% of viewport
              end: "bottom 10%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });
    }
  }, []);

  return (
    <div id="projects" ref={containerRef} className="px-5 md:px-10 bg-gradient-to-bl from-gray-300 via-white to-white min-h-screen font-serif flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-4xl md:text-5xl font-serif mb-10 md:mb-20"
      >
        Our Projects:
      </motion.h1>

      {/* Desktop View (Timeline Layout) */}
      <ul className="hidden md:flex timeline timeline-vertical">
        {projectData.map((project, index) => (
          <li key={index} className="timeline-item">
            <hr />
            <div className={`timeline-box p-4 text-sm md:text-base ${index % 2 === 0 ? "timeline-start" : "timeline-end"}`}>
              <p className="text-gray-500 text-xs md:text-sm">{project.date}</p>
              <h2 className="text-lg md:text-2xl font-semibold">{project.title}</h2>
              <p className="mt-2 md:mt-3">{project.description}</p>
            </div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 md:h-5 md:w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        ))}
      </ul>

      {/* Mobile View (Stacked Layout) */}
      <motion.div 
      
      className="flex md:hidden flex-col space-y-6">
        {projectData.map((project, index) => (
          <motion.div 
          initial={{ opacity: 0, x: -180 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          key={index} className="relative flex items-start space-x-4">
            {/* Timeline Indicator */}
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              {index !== projectData.length - 1 && <div className="w-1 h-16 bg-gray-400"></div>}
            </div>

            {/* Content Box */}
            <div className="bg-white shadow-md rounded-lg p-4 w-full">
              <p className="text-gray-500 text-xs">{project.date}</p>
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="text-sm mt-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
