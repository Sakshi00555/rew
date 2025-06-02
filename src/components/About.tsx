"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "@mui/icons-material";
import about from "@/assets/Chandra Photo.jpg";

const About = () => {
  const refHeading = useRef(null);
  const refContent = useRef(null);
  const inViewHeading = useInView(refHeading);
  const inViewContent = useInView(refContent, { once: true });

  const certifications = [
    {
      label: "Introduction to Career Skills in Data Analytics",
      issuer: "LinkedIn",
      date: "Oct 2024",
      url: "https://www.linkedin.com/learning/certificates/6af8f46e22074f30731ad4e7192b35616d202afbfb8990353b51a8fb37979f51"
    },
    {
      label: "Power BI Data Analyst Associate",
      issuer: "Microsoft",
      date: "Nov 2024",
      url: "https://learn.microsoft.com/en-us/users/chandrasekhartodeti-5946/credentials/62bd2df04b347dd4?ref=https%3A%2F%2Fwww.linkedin.com%2F"
    },
    {
      label: "Operations Job Simulation",
      issuer: "Goldman Sachs",
      date: "Dec 2024",
      url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_3NTMp9pqfiSn5AWfe_1735271916407_completion_certificate.pdf"
    },
  ];

  return (
    <section className="py-[80px] sm:px-6" id="about">
      {/* Heading */}
      <motion.div
        ref={refHeading}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <h3 className="text-3xl font-[800] text-textWhite sm:text-5xl">
          About Me
        </h3>
        <div className="mt-2 h-[4px] flex-grow bg-textWhite"></div>
      </motion.div>

      <div className="mt-16 flex flex-col items-center gap-10 py-6 lg:flex-row">
        {/* Profile Image */}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: 20, scale: 0.8, filter: "blur(10px)" }}
          animate={
            inViewContent
              ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
              : {}
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src={about}
            alt="Chandra Sekhar Todeti"
            width={300}
            height={400}
            className="rounded-full transition-all duration-300 ease-in-out hover:scale-[1.02]"
            priority
          />
        </motion.div>

        {/* Bio & Details */}
        <motion.div
          ref={refContent}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={inViewContent ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex-1 xl:px-4 space-y-6"
        >
          {/* Bio */}
          <p className="text-textWhite">
            I’m{" "}
            <span className="font-semibold text-heading">
              Chandra Sekhar Todeti
            </span>
            , a Business Intelligence Developer & Data Analyst. At TCS, I
            migrated 70+ Power BI reports to Azure, optimized SQL for 40%
            performance gains, and automated ETL with SSIS & Informatica. I
            specialize in crafting data-driven insights using Python, R, Snowflake,
            AWS, and Azure.
          </p>

          {/* Education */}
          <div>
            <h5 className="text-xl font-bold text-textWhite">Education</h5>
            <div className="mt-2 flex items-start gap-2">
              <ArrowRight className="h-5 w-4 flex-none text-heading" />
              <div className="flex flex-col text-textWhite">
                <span className="font-medium">Florida Atlantic University</span>
                <span className="text-sm">
                  M.Sc. Computer Science, May 2024
                  <br />
                  Concentrations: Data Analytics · Machine Learning
                </span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h5 className="text-xl font-bold text-textWhite">Certifications</h5>
            <div className="mt-2 space-y-2">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-textWhite text-sm"
                >
                  <ArrowRight className="h-5 w-4 flex-none text-heading" />
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {cert.label}
                  </a>
                  , {cert.issuer} — {cert.date}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h5 className="text-xl font-bold text-textWhite">Skills</h5>
            <p className="mt-2 text-textWhite text-sm">
              Data Cleaning · ETL · SSIS · Informatica · Power BI (DAX, M Query) ·
              Azure · AWS · Snowflake · SQL Server · Python · R · Pandas ·
              Matplotlib · Machine Learning
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
