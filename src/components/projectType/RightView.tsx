import { ArrowRight } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const RightView = ({ name, description, img, tech, source, demo }: any) => {
  const refContent = useRef(null);

  // Change amount from 1 → 0.5 so we don’t need 100% visibility
  const inViewContent = useInView(refContent, { once: true, amount: 0.5 });

  return (
    <div className="mt-[80px] grid grid-cols-1 md:px-10 lg:grid-cols-12 lg:mt-[120px]">

      {/* ----------------------- */}
      {/* 1) IMAGE CONTAINER      */}
      {/* ----------------------- */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, filter: "blur(6px) brightness(50%)" }}
        animate={
          inViewContent
            ? { opacity: 1, filter: "blur(0px) brightness(100%)" }
            : { opacity: 1, filter: "blur(6px) brightness(50%)" }
        }
        transition={{ duration: 1 }}
        className="
          col-span-7 
          w-full 
          lg:w-fit 
          brightness-50 
          transition-all 
          duration-700 
          ease-in-out 
          hover:z-20 
          hover:scale-[1.05] 
          hover:brightness-100 
          z-0
        "
      >
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex w-fit items-center justify-center lg:mx-0 lg:justify-start"
        >
          <Image
            width={500}
            height={300}
            src={img}
            alt={name}
            className="cursor-pointer rounded-md object-contain"
          />
        </a>
      </motion.div>

      {/* ----------------------- */}
      {/* 2) TEXT (TITLE + DESC)  */}
      {/* ----------------------- */}
      <motion.div
        ref={refContent}
        initial={{ opacity: 0, x: 50 }}
        animate={inViewContent ? { opacity: 1, x: 0 } : {}}
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.5 }}
        className="
          relative 
          col-span-5 
          flex 
          w-full 
          flex-col 
          items-end 
          z-10
        "
      >
        {/* ---- Project Title ---- */}
        <div className="w-full px-3 py-2 text-right text-3xl font-[600] lg:py-0 mb-2">
          <h3 className="font-bold text-heading w-full whitespace-normal break-words text-3xl md:text-2xl lg:text-3xl">
            {name}
          </h3>
        </div>

        {/* ---- Project Description ---- */}
        <div className="
            group 
            right-0 
            z-10 
            mt-1 
            w-full 
            rounded-lg 
            bg-bgDark 
            p-2 
            shadow-sm 
            shadow-slate-800 
            lg:relative 
            lg:mt-[1.5rem] 
            lg:w-[500px]
          "
        >
          {description?.map((item: any, i: number) => (
            <div key={i} className="flex items-start gap-1 sm:gap-2">
              <ArrowRight className="h-5 w-4 flex-none" />
              <div className="text-sm text-textWhite">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ---- Tech Stack (smaller gap now) ---- */}
        <div className="
            mt-4 
            flex 
            items-center 
            gap-2 
            text-xs 
            text-heading 
            font-medium 
            md:gap-3 
            md:text-sm 
            lg:mt-[50px]   /* ↓ was 200px, now only 50px */
          "
        >
          {tech?.map((item: any, i: number) => (
            <span key={i}>{item}</span>
          ))}
        </div>

        {/* ---- Source & Demo Links ---- */}
        <div className="mt-5 flex w-full items-center justify-end gap-8 text-sm font-[500]">
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="
                group 
                relative 
                flex 
                animate-bounce 
                cursor-pointer 
                items-center 
                gap-1
              "
            >
              <GitHubIcon />
              <span className="
                  absolute 
                  -left-[135%] 
                  top-7 
                  w-[90px] 
                  whitespace-nowrap 
                  px-2 
                  text-xs 
                  text-textLight 
                  opacity-0 
                  group-hover:opacity-100
                "
              >
                Source Code
              </span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="
                group 
                relative 
                flex 
                animate-bounce 
                cursor-pointer 
                items-center 
                gap-2
              "
            >
              <LaunchIcon />
              <span className="
                  absolute 
                  -left-[60%] 
                  top-7 
                  w-fit 
                  px-2 
                  text-xs 
                  text-textLight 
                  opacity-0 
                  group-hover:opacity-100
                "
              >
                Demo
              </span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default RightView;
