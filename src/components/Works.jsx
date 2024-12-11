import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./Card.css";

const Card = ({ name, description, tags, image, source_code_link }) => {
  let link = source_code_link;
  return (
    <div
      className="card cursor-pointer"
      onClick={
        link.startsWith("/")
          ? () => window.open(source_code_link, "_self")
          : () => window.open(source_code_link, "_blank")
      }
    >
      <div className="card-inner">
        <div className="card-front bg-secondary flex-col p-6 rounded-2xl">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <h3 className="mt-5 text-white font-bold text-[24px] w-full text-left">
            {name}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={tag.name}
                className={`text-[14px] text-primary text-left`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
        <div className="card-back bg-secondary rounded-2xl p-3">
          <p className="text-white text-[14px] text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my personal archive of projects!
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          //<ProjectCard key={`project-${index}`} {...project} />
          <Card key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
