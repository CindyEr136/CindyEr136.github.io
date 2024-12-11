import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import "../index.css";

const BrainyBees = () => {
  return (
    <div className="min-h-screen xl:mt-12 flex flex-col overflow-hidden">
      <div className="problem">
        <h2 className={`${styles.sectionHeadText}`}>Defining the Problem: Understanding the Challenge at Hand</h2>
      </div>
    </div>
  );
};

export default SectionWrapper(BrainyBees, "contact");
