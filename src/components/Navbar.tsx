"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Scroll from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import {
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiEbox, SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MenuItems } from "../constants/MenuItem";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  return (
    <nav className="sticky top-0 z-[100] w-full bg-bgDark shadow-lg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap items-center justify-between px-3 py-5 sm:px-4 md:px-8"
      >
        {/* Brand */}
        <ScrollLink
          to="intro"
          smooth
          duration={500}
          className="min-w-[150px] cursor-pointer text-lg font-[600] tracking-wide sm:text-xl sm:font-[800]"
        >
          <span className="sm:hidden">@Chandra</span>
          <span className="hidden sm:block">@Chandra Sekhar Todeti</span>
        </ScrollLink>

        {/* Mobile menu toggle */}
        <span
          className="-ml-[120px] cursor-pointer text-[22px] lg:hidden"
          onClick={() => setMobileView(!mobileView)}
        >
          <SiEbox />
        </span>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileView && (
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              exit={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -top-5 left-0 w-full bg-bgDark"
            >
              <div className="relative flex flex-col p-5 sm:p-10 lg:hidden">
                <span
                  className="absolute right-12 top-[44px] cursor-pointer text-[24px]"
                  onClick={() => setMobileView(false)}
                >
                  <AiFillCloseCircle />
                </span>
                {/* Social Icons */}
                <div className="flex gap-4 border-b-2 border-b-white p-6 text-[22px]">
                  <a
                    href="https://www.linkedin.com/in/chandrasekhar-todeti/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsLinkedin />
                  </a>
                  <a
                    href="mailto:chandravicky220@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiMailOpen />
                  </a>
                </div>

                {/* Menu Items */}
                <ul className="flex flex-col items-center gap-5 p-5 text-[18px] font-[500]">
                  {MenuItems.map((item) => (
                    <li key={item.id}>
                      <ScrollLink
                        to={item.url}
                        smooth
                        duration={1000}
                        onClick={() => setMobileView(false)}
                        className="relative after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 hover:after:w-full"
                      >
                        {item.name}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>
              {/* overlay */}
              <div
                className="w-full flex-grow bg-transparent"
                onClick={() => setMobileView(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-4 lg:-ml-5">
          <ul className="flex gap-4">
            {MenuItems.map((item) => (
              <li key={item.id}>
                <ScrollLink
                  to={item.url}
                  smooth
                  duration={1000}
                  className="relative cursor-pointer text-base font-[500] after:absolute after:-bottom-[3px] after:left-0 after:h-[3px] after:w-0 after:bg-current after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-2 text-[24px]">
            <a
              href="https://www.linkedin.com/in/chandrasekhar-todeti/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="transition-transform hover:-translate-y-1"
            >
              <BsLinkedin />
            </a>
            <a
              href="mailto:chandravicky220@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Email"
              className="transition-transform hover:-translate-y-1"
            >
              <HiMailOpen />
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
