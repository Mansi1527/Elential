import { MacbookScroll } from "@/components/ui/mackbook-scroll";
import Link from "next/link";

export const About = () => {
  return (
    <div id="about" className="overflow-hidden  bg-white w-full md:px-10">
      <div className="flex flex-col lg:flex-row md:gap-10 items-center justify-center lg:space-x-20 px-4 lg:px-8">
        
        {/* Text Section */}
        <div className="about-text w-full mt-20 md:mt-20 lg:mt-0 md:w-5/6 text-center md:text-left md:mr-8">
          <h1 className="text-2xl flex md:text-5xl font-extrabold bg-gradient-to-r from-gray-500 via-black to-black text-transparent bg-clip-text">
            We Build Stunning Websites 🚀
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold">Company</span>, we specialize in building{" "}
            <b>fast, responsive, and user-friendly</b> websites. Our team of experts blends{" "}
            <b>creativity with the latest technology</b> to deliver high-quality web solutions.
          </p>
          <p className="mt-3 text-lg text-gray-600 italic">
            We're here to turn your <b>vision into reality</b>.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            Let's build something amazing together! ✨
          </a>
        </div>

        {/* MacBook Scroll Section */}
        <div className="  w-full lg:w-2/5 md:order-last lg:order-none">
          <MacbookScroll
            title={<span></span>}
            badge={
              <Link href="https://peerlist.io/manuarora">
                {/* <Badge className="h-10 w-10 transform -rotate-12" /> */}
              </Link>
            }
            src={`/linear.webp`}
            showGradient={false}
          />
        </div>
      </div>
    </div>
  );
};
