import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import cover from "../assets/bongo-cat-transparent.gif";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* side design */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 secondary-gradient" />
        </div>

        {/* name and intro */}
        <div className="w-full">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-secondary">Cindy</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A creative web designer and developer based in Toronto ON.
          </p>
          <div className="w-full flex justify-center py-10 sm:py-20 md:py-40 lg:py-10">
            <img src={cover} alt="cover" className="object-contain w-full sm:w-full md:w-full lg:w-1/4" />
          </div>
        </div>
      </div>

      {/* scroll icon */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
