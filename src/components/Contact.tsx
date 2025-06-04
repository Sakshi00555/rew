"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import Image from "next/image";
import jobMarketImg from "@/assets/projects/image.jpg";

const Contact: React.FC = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading, { once: true });
  const refContent = useRef(null);
  const inViewContent = useInView(refContent, { once: true });

  return (
    <section id="contact" className="sm:px-6 sm:pt-[80px]">
      {/* Section Heading */}
      <motion.div
        ref={refHeading}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          Get In Touch
        </h3>
        <div className="mt-2 h-[4px] flex-grow bg-textWhite" />
      </motion.div>

      <div className="mt-10 flex flex-col-reverse items-center gap-8 py-12 md:flex-row md:items-start">
        {/* CTAs */}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: -30 }}
          animate={inViewContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <p className="mb-6 max-w-lg text-textWhite">
            I’m always open to new opportunities and look forward to connecting
            with you.
          </p>
          <div className="flex flex-col items-center gap-4 md:items-start">
            <a
              href="https://calendly.com/chandravicky220/1-on-1-call-with-chandra-sekhar-todeti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs rounded-full bg-white px-6 py-3 text-center font-medium text-darkHover transition hover:scale-[0.98]"
            >
              🗓 Book a 15-min call
            </a>
            <a
              href="mailto:chandravicky220@gmail.com"
              className="w-full max-w-xs rounded-full border-2 border-white px-6 py-2.5 text-center font-medium text-white transition hover:bg-gray-700 hover:scale-[0.98]"
            >
              ✉️ Email Me
            </a>
            <a
              href="tel:+15617597286"
              className="w-full max-w-xs rounded-full border-2 border-white px-6 py-2.5 text-center font-medium text-white transition hover:bg-gray-700 hover:scale-[0.98]"
            >
              📞 +1 (561) 759-7286
            </a>
            <div className="mt-6 flex gap-5 text-2xl">
              <a
                href="https://www.linkedin.com/in/chandrasekhar-todeti/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:-translate-y-1"
              >
                <BsLinkedin className="text-white" />
              </a>
              <a
                href="mailto:chandravicky220@gmail.com"
                className="transition hover:-translate-y-1"
              >
                <HiMailOpen className="text-white" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Illustration Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inViewContent ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-0 md:w-1/3"
        >
          <Image
            src={jobMarketImg}
            alt="Contact Illustration"
            width={400}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center pb-6">
        <span className="text-white">
          © {new Date().getFullYear()} – Chandra Sekhar Todeti
        </span>
      </footer>
    </section>
  );
};

export default Contact;
