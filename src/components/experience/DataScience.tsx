import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function DataAnalystIntern() {
  const tasks = [
    {
      text: "Propelled machine learning models to analyze large datasets, leading to a 20% increase in predictive accuracy and enabling data-driven decision-making for enterprise solutions.",
    },
    {
      text: "Implemented AI algorithms to automate data processing and pattern recognition, reducing manual analysis time by 40% and enhancing overall system efficiency.",
    },
    {
      text: "Forged and optimized cloud solutions on AWS, improving system scalability by 30% and cutting operational costs by 15%.",
    },
    {
      text: "Built a Python script for automated data cleansing and preprocessing, saving ~20 hours per week by reducing prep time by 10% and ensuring data accuracy.",
    },
    {
      text: "Generated and maintained retail data integration and reporting via SSIS, SSRS, and SQL, boosting processing speed by 15%.",
    },
    {
      text: "Leveraged Python and R for statistical modelling and predictive analytics, achieving a 15% lift in model accuracy and optimizing decision workflows.",
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
          {/* Title & Location */}
          <div className="flex items-center justify-between">
            <span className="text-base font-medium tracking-wide text-gray-100 sm:text-2xl">
              Data Analyst Intern
            </span>
            <span className="text-sm">Hyderabad, India</span>
          </div>
          {/* Company & Dates */}
          <div className="flex flex-col items-start justify-between font-mono text-sm font-bold text-heading sm:flex-row sm:items-center sm:text-base">
            <span>TCS</span>
            <span>Sep 2019 – Feb 2020</span>
          </div>
        </div>

        <div className="flex flex-col space-y-1 text-sm sm:text-base">
          {tasks.map((item, idx) => (
            <div key={idx} className="flex flex-row space-x-2">
              <ArrowRight className="h-5 w-4 flex-none" />
              <span>{item.text}</span>
            </div>
          ))}

          <div className="flex flex-row space-x-2">
            <ArrowRight className="h-5 w-4 flex-none" />
            <span className="font-bold text-heading">
              Technologies used: Python, R, AWS, SSIS, SSRS, SQL
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
