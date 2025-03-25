import { useState, useEffect } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export const Clients = () => {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Harsh Sharma",
      designation: "Product Manager at TechFlow",
      src: "/pplImg1.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Saket Sahani",
      designation: "CTO at InnovateSphere",
      src: "/pplimg2.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Supriya",
      designation: "Engineering Lead at DataPro",
      src: "/pplImg3.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Jasmeet Singh",
      designation: "VP of Technology at FutureNet",
      src: "/pplImg4.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 640); // Only apply for screens ≤ 640px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleImageTap = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div id="reviews" className=" mx-5 md:mx-10 md:mt-52 my-10">
      <h1 className="text-3xl md:text-5xl font-bold flex justify-center items-center">
        Beyond Business: Stories of Satisfaction
      </h1>

      {/* Desktop & Tablet (`md` and above) */}
      {!isMobile && <AnimatedTestimonials testimonials={testimonials} />}

      {/* Mobile (`sm` and below) */}
      {isMobile && (
        <div className="flex flex-col items-center mt-8 relative">
          <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <img
              src={testimonials[currentIndex].src}
              alt={testimonials[currentIndex].name}
              className="w-32 h-32 object-cover rounded-full cursor-pointer"
              onClick={handleImageTap}
            />
            {/* Tooltip - "Tap to Change" */}
            {showTooltip && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 bg-black text-white text-xs px-3 py-1 rounded-md shadow-md">
                Tap to Change
              </div>
            )}
          </div>

          <p className="text-center mt-4 italic">{testimonials[currentIndex].quote}</p>
          <h2 className="font-bold mt-2">{testimonials[currentIndex].name}</h2>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].designation}</p>
        </div>
      )}
    </div>
  );
};
