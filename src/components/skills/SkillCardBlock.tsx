// src/components/skills/SkillCardBlock.tsx

import React from "react";
import {
  ReactOriginal,
  NextjsOriginal,
  JavascriptOriginal,
  MaterialuiOriginal,
  NodejsOriginal,
  MysqlOriginal,
  MongodbOriginal,
  PythonOriginal,
  GithubOriginal,
  GitOriginal,
  TypescriptOriginal,
  ReduxOriginal,
  BootstrapOriginal,
  Css3Original,
  SqldeveloperOriginal,
} from "devicons-react";
import skill from "@/assets/skill.png";
import Image from "next/image";

interface Props {
  icon: string | null;
  name: string;
}

const SkillCardBlock: React.FC<Props> = ({ icon, name }) => {
  let IconComponent: React.ComponentType<any> | null = null;

  switch (icon) {
    case "ReactOriginal":
      IconComponent = ReactOriginal;
      break;
    case "NextjsOriginal":
      IconComponent = NextjsOriginal;
      break;
    case "JavascriptOriginal":
      IconComponent = JavascriptOriginal;
      break;
    case "TypescriptOriginal":
      IconComponent = TypescriptOriginal;
      break;
    case "NodejsOriginal":
      IconComponent = NodejsOriginal;
      break;
    case "MysqlOriginal":
      IconComponent = MysqlOriginal;
      break;
    case "MongodbOriginal":
      IconComponent = MongodbOriginal;
      break;
    case "PythonOriginal":
      IconComponent = PythonOriginal;
      break;
    case "SqldeveloperOriginal":
      IconComponent = SqldeveloperOriginal;
      break;
    case "GitOriginal":
      IconComponent = GitOriginal;
      break;
    case "GithubOriginal":
      IconComponent = GithubOriginal;
      break;
    case "ReduxOriginal":
      IconComponent = ReduxOriginal;
      break;
    case "BootstrapOriginal":
      IconComponent = BootstrapOriginal;
      break;
    case "Css3Original":
      IconComponent = Css3Original;
      break;
    case "MaterialuiOriginal":
      IconComponent = MaterialuiOriginal;
      break;
    default:
      IconComponent = null;
  }

  return (
    <div className="flex cursor-pointer items-center gap-3 rounded-md px-4 py-3 transition-all duration-150 ease-in-out hover:bg-gray-800">
      {IconComponent ? (
        <IconComponent className="scale-[150%] text-white" />
      ) : (
        <Image
          src={skill}
          alt="skill"
          width={20}
          height={20}
          className="invert filter"
        />
      )}
      <span className="text-sm sm:text-base text-white">{name}</span>
    </div>
  );
};

export default SkillCardBlock;
