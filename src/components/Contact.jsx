import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import "../index.css";

const Contact = () => {
  return (
    <div>
      <div className={`xl:mt-12 flex flex-col overflow-hidden`}>
        <p className={styles.sectionSubText}>Like what you see?</p>
        <div className="flex items-center">
          <h3 className={styles.sectionHeadText}>Let's Chat!</h3>
          <div className="flex flex-1 gap-10 justify-end">
            <a
              href="https://www.linkedin.com/in/cindy-er-19231a1a2/"
              className="text-decoration-line: underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:er.cindy168@gmail.com"
              className="text-decoration-line: underline"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
