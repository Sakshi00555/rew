import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function ExperienceTCS() {
  const tasks = [
    {
      text: "Led the migration of 70+ on-premises Power BI reports to Azure Cloud, reducing load times by 30% and increasing accessibility for over 200 users.",
    },
    {
      text: "Analyzed and optimized SQL queries for slow and failing reports, boosting performance by 40% and cutting report generation time from 10 to 6 minutes.",
    },
    {
      text: "Participated in the full BI development lifecycle—from requirements gathering to UAT—delivering 5 major projects on time and raising user satisfaction by 25%.",
    },
    {
      text: "Instituted automated reporting workflows using SSIS and Informatica, slashing manual reporting time by 50% while enhancing data accuracy.",
    },
    {
      text: "Engaged in data modeling, warehousing, and ETL processes to organize large datasets, optimizing pipelines to improve data retrieval times by 30%.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-between gap-3 px-4 md:px-0 lg:flex-row xl:gap-5"
    >
      <div className="flex w-full flex-col space-y-3">
        <div className="flex flex-col space-y-2">
          {/* Title and location */}
          <div className="flex items-center justify-between">
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              BI Developer
            </span>
            <span className="text-sm">Hyderabad, India</span>
          </div>

          {/* Company and dates */}
          <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
            <span>TCS</span>
            <span>Feb 2020 – Aug 2022</span>
          </div>
        </div>

        <div className="flex flex-col space-y-1 text-sm sm:text-base">
          {tasks.map((item, i) => (
            <div key={i} className="flex flex-row space-x-2">
              <ArrowRight className="h-5 w-4 flex-none" />
              <span>{item.text}</span>
            </div>
          ))}

          <div className="flex flex-row space-x-2">
            <ArrowRight className="h-5 w-4 flex-none" />
            <span className="font-bold text-heading">
              Technologies used: Power BI, Azure, SSIS, Informatica, SQL, Python, R
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
