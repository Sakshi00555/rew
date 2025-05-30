import React from "react";
import CompaniesBar from "./CompaniesBar";
import TCS_BI from "./TCS_BI";
import DataScience from "./DataScience";

interface Props {}

const ExperienceWrapper = (props: Props) => {
  const [selectedJob, setSelectedJob] = React.useState("TCS_BI");

  const renderDescription = () => {
    switch (selectedJob) {
      case "TCS_BI":
        return <TCS_BI />;
      case "DataScience":
        return <DataScience />;
      default:
        return null;
    }
  };

  return (
    <section
      className="flex w-full flex-col items-center justify-center space-y-4
      overflow-hidden lg:flex-row lg:items-start lg:justify-between lg:space-y-0 lg:px-20 xl:space-x-6"
    >
      {/* Left side: company selector */}
      <CompaniesBar
        setDescriptionJob={setSelectedJob}
        activeJob={selectedJob}
      />

      {/* Right side: description panel */}
      <div className="w-full flex-1 px-2">
        {renderDescription()}
      </div>
    </section>
  );
};

export default ExperienceWrapper;
