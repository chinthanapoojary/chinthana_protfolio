import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Google = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Python Programmer
        <span className="text-textGreen tracking-wide">@YHills EduTech</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2024 - July 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Proficient in Python programming, OOP, and data structures, experienced in Flask and REST API development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Skilled in MySQL, data handling, and libraries like Pandas and NumPy
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Experienced in writing clean, efficient, and reusable code with a solid understanding of data structures and algorithms.
        </li>
      </ul>
    </motion.div>
  );
};

export default Google;
