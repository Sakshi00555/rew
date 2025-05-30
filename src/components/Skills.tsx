"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SkillCard from "./skills/SkillCard";
import { MySkills } from "@/constants/MySkills";

const Skills: React.FC = () => {
  const refHeading = useRef(null);
  const inViewHeading = useInView(refHeading, { once: true });

  return (
    <section
      id="skills"
      className="bg-bgDark py-20 px-6"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={refHeading}
          initial={{ opacity: 0, y: 30 }}
          animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <h3 className="text-4xl font-bold text-white sm:text-5xl">
            Skills
          </h3>
          <div className="flex-grow h-1 bg-white"></div>
        </motion.div>

        {/* Skill sections */}
        <div className="space-y-10">
          {MySkills.map((section, idx) => (
            <SkillCard
              key={idx}
              title={section.title}
              skills={section.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
