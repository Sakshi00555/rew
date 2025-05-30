"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillCardBlock from "./SkillCardBlock";

interface Props {
  title: string;
  skills: {
    icon: string | null;
    name: string;
  }[];
}

const SkillCard: React.FC<Props> = ({ title, skills }) => {
  return (
    <div className="w-full bg-gray-800 p-6 rounded-lg">
      {/* Section title in white */}
      <h4 className="text-white text-2xl font-semibold mb-6">
        {title}
      </h4>

      {/* Skill grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <SkillCardBlock icon={skill.icon} name={skill.name} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
