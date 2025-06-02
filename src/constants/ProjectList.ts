// src/constants/ProjectList.ts

import airlineAnalysis from "@/assets/projects/airline.png";
import gigAnalysis from "@/assets/projects/gig.jpg"; 
import jobMarketImg from "@/assets/projects/linkdln.jpg";
export const ProjectList = [
  {
    id: 1,
    name: "Airline Data Quality & Performance Analysis",
    description: [
      "Analyzed over 1 million real-world flight records to identify the 10 busiest and most profitable round-trip airline routes.",
      "Built KPIs—On-time Performance, Load Factor, Revenue per Mile and Cost per Mile—using Python (Pandas, NumPy, Matplotlib).",
      "Conducted profitability and break-even analysis, identifying 5 high-ROI routes and calculating flight volume needed to recover a $90 M aircraft investment.",
      "Performed end-to-end data cleansing, merging and transformation to ensure high data integrity and improve analytical accuracy."
    ],
    img: airlineAnalysis,
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    source: "https://github.com/chandra5617597286/Airline-Data-Quality-Performance-Analysis"
  },
  {
    id: 2,
    name: "Gig Economy Workforce Analyzer",
    description: [
      "Simulated and analyzed gig driver data (earnings, hours, distance) to surface performance insights.",
      "Built dynamic dashboards in Power BI with filters for city, month, gender, and vehicle type.",
      "Mapped driver throughput and earnings trends using GeoMap visuals.",
      "Cleaned and enhanced raw rideshare data with Python—adding gender, vehicle_type, and geo-coordinates."
    ],
    img: gigAnalysis,
    tech: ["Power BI", "Python", "GeoMap visuals"],
    source: "https://github.com/chandra5617597286/Gig-Uber-Project"
  },
    {
    id: 3,
    name: "Job Market & Skill Demand Trends Analyzer",
    description: [
      "Cleaned and preprocessed 60K+ job postings (title, company, location, experience, salary) using Python & Pandas.",
      "Normalized job descriptions (lowercase, remove punctuation) and extracted skill keywords via regex + mapping dictionary.",
      "Generated aggregated CSVs (skills_by_location, skills_by_company, skills_by_title, salary_by_skill) for Power BI.",
      "Built interactive Power BI dashboards visualizing posting distribution, top roles, skill demand, salary trends, and demographics."
    ],
    img: jobMarketImg,
    tech: ["Python", "Pandas", "RegEx", "Power BI"],
    source: "https://github.com/chandra5617597286/Job-Skills-Demand-Analyzer"
  }
];
