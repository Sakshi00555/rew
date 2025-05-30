import React from "react";
import { motion } from "framer-motion";

interface CompaniesBarProps {
  setDescriptionJob: (job: string) => void;
  activeJob: string;
}

const CompaniesBar: React.FC<CompaniesBarProps> = ({
  setDescriptionJob,
  activeJob,
}) => {
  // vertical (desktop) and horizontal (mobile) bar positions
  const [barY, setBarY] = React.useState<number>(0);
  const [barX, setBarX] = React.useState<number>(0);

  // only the two TCS roles now
  const companies = [
    {
      key: "TCS_BI",
      label: "TCS – BI Developer",
      barY: 0,
      barX: 0,
    },
    {
      key: "DataScience",
      label: "TCS – Data Analyst Intern",
      barY: 48,   // desktop Y offset for second item
      barX: 128,  // mobile X offset for second item
    },
  ];

  const handleClick = (company: typeof companies[0]) => {
    setBarY(company.barY);
    setBarX(company.barX);
    setDescriptionJob(company.key);
  };

  return (
    <div className="scrollbar-hide flex w-screen flex-col items-start justify-start overflow-scroll pb-4 md:items-center md:justify-center lg:w-[220px] lg:flex-row lg:overflow-hidden lg:pb-0">
      {/* Desktop vertical bar */}
      <div className="relative hidden lg:block lg:order-1 translate-y-1 rounded bg-gray-500 lg:h-[112px] lg:w-0.5">
        <motion.div
          animate={{ y: barY }}
          className="absolute h-10 w-0.5 rounded bg-heading"
        />
      </div>

      {/* Company buttons */}
      <div className="order-2 flex flex-row space-x-4 px-4 md:px-8 lg:flex-col lg:space-x-0 lg:space-y-1 lg:px-0">
        {companies.map((company) => (
          <button
            key={company.key}
            onClick={() => handleClick(company)}
            className={`w-32 flex-none rounded py-3 text-center font-mono text-sm duration-500 hover:text-gray-500 lg:w-44 lg:px-4 lg:pl-6 lg:text-left lg:text-base ${
              activeJob === company.key
                ? "scale-[1.03] text-heading"
                : "text-textWhite"
            }`}
          >
            {company.label}
          </button>
        ))}
      </div>

      {/* Mobile horizontal bar */}
      <div className="block h-0.5 w-full rounded bg-gray-500 lg:hidden mt-2">
        <motion.div
          animate={{ x: barX }}
          className="h-0.5 w-32 rounded bg-heading"
        />
      </div>
    </div>
  );
};

export default CompaniesBar;
