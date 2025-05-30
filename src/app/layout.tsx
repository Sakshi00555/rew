import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio | Chandra Sekhar Todeti",
  description:
    "Chandra Sekhar Todeti’s portfolio: Business Intelligence Developer & Data Analyst specializing in Power BI migrations, Azure Cloud, ETL automation, SQL optimization, and machine-learning pipelines.",
  authors: [
    {
      name: "Chandra Sekhar Todeti",
      url: "https://www.linkedin.com/in/chandrasekhar-todeti/",
    },
  ],
  keywords: [
    "Business Intelligence",
    "Data Analytics",
    "Power BI",
    "Azure",
    "ETL",
    "SQL",
    "SSIS",
    "Informatica",
    "Python",
    "R",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
        style={{ backgroundColor: "#121212" }}
      >
        <Analytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
