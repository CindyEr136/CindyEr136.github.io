import { styles } from "../styles";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../utils/motion";
import wave from "../assets/4c236364db3543337354bc3acc1fe792.gif";
import one from "../assets/WIN_20240904_09_58_46_Pro (2).png";
import { extras, currently } from "../constants";
import Playlist from "../components/Playlist";

import "./About.css";

const Card = ({ image, text }) => {
  return (
    <div className="extraCard cursor-pointer">
      <img
        src={image}
        alt="extra_image"
        className="cardImg w-full h-full object-cover rounded-2xl"
      />
      <div className="textBox text-center">
        <p className="text">{text}</p>
      </div>
    </div>
  );
};

export function About() {
  return (
    <>
      <div className="relative z-0 bg-primary w-full">
        <section className="relative w-full mx-auto flex flex-col gap-10 h-full pt-20">
          <div
            className={`max-w-7xl flex flex-col items-start gap-10 ${styles.paddingX} py-10`}
          >
            <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full h-full gap-10 items-center px-0 sm:px-16 md:px-16 lg:px-16">
              <div className="flex-1">
                <h2 className={`${styles.sectionHeadText}`}>Hi there!</h2>
                <p className={`${styles.sectionSubText} mt-0`}>
                  {"So you've come to learn about me >.<"}
                </p>
                <p
                  className={`${styles.sectionSubText} text-white normal-case mt-7`}
                >
                  I'm a Chinese-Canadian student who recently graduated from the
                  University of Waterloo with a Bachelor's of Computer Science
                  and Wilfrid Laurier with a Bachelor's of Business
                  Administration. As a developer with a background in business,
                  I am consistently looking at projects through a business lens
                  to ensure that everything we make is aligning with the goals
                  and values of the company
                </p>
                <div className="mt-7">
                  <p className={`${styles.sectionSubText}`}>
                    What I'm currently up to:
                  </p>
                  <ul className="list-disc px-5 mt-5">
                    {currently.map((card, index) => (
                      <li key={`current-${index}`}>{card}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative bg-white w-[300px] sm:w-[370px] p-6 pb-16">
                  <img src={one} className="object-cover" />
                  <div className="absolute bottom-0 end-0">
                    <img src={wave} className="w-[100px] h-[100px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex md:flex lg:flex absolute bottom-0 w-full justify-center items-center">
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
          </div>
        </section>

        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.padding} mx-auto relative z-0`}
        >
          <div className={`bg-secondary rounded-2xl ${styles.padding}`}>
            <p
              className={`${styles.sectionSubText} text-white sm:text-[22px] text-[18px]`}
            >
              ✨Extras✨
            </p>
            <div className="mt-10 sm:mt-20 flex flex-wrap gap-10">
              {extras.map((card, index) => (
                <Card key={`extra-${index}`} {...card} />
              ))}
              <Playlist />
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
}
