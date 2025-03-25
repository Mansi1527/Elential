import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="px-6 py-10 md:py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Connect With Us */}
        <nav className="mb-6 md:mb-8">
          <p className="mb-4 text-xs md:text-lg font-bold tracking-wider text-gray-400 uppercase">
            Connect With Us
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <Link
              href="https://x.com/_elential_"
              className="text-sm md:text-base font-medium transition hover:text-primary"
            >
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/_elential_?igsh=MTN1dmN0YTY2ZWw3Mw%3D%3D&utm_source=qr"
              className="text-sm md:text-base font-medium transition hover:text-primary"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/in/elential-229bb9357/"
              className="text-sm md:text-base font-medium transition hover:text-primary"
            >
              Linkedin
            </Link>
            <Link
              href="mailto:contact.elential@gmail.com"
              className="text-sm md:text-base font-medium transition hover:text-primary"
            >
              Email
            </Link>
            <Link
              href="https://wa.me/919336885413"
              className="text-sm md:text-base font-medium transition hover:text-primary"
            >
              Whatsaap
            </Link>
          </div>
        </nav>

        {/* Footer Bottom */}
        <div className="text-xs md:text-sm text-gray-500">
          © {new Date().getFullYear()} Elential. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
