import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10">
        <ArchiveCard
          title="Vehicle and License Authentication using face recognition"
          des=" A secure Vehicle and License Authentication System that uses face recognition to verify vehicle owners and prevent unauthorized access. The system combines CNN and PCA for accurate feature extraction and efficient authentication"
          listItem={["Python", "CNN", "PCA"]}
          link=""
        />
        <ArchiveCard
          title="Network Intrusion Detection System"
          des=" A NIDS that monitors network traffic and uses machine learning algorithms to detect malicious activities and prevent cyberattacks. It ensures real-time threat detection and improved network security."
          listItem={["Python", "Flask", "Logistic Regression"]}
          link=""
        />
        <ArchiveCard
          title="Emotion Detection System"
          des=" An Emotion Detection System built using Python and Convolutional Neural Networks that analyzes facial expressions to classify emotions such as happy, sad, angry, and more. The system leverages deep learning for accurate real-time emotion recognition"
          listItem={["Python", "OpenCV", "CNN"]}
          link=""
        />
        <ArchiveCard
          title="Hospital Inventory Management System"
          des=" A Hospital Inventory Management System built using Python and Flask that allows admins to manage medicines, equipment, and patient details efficiently, while providing patients with access to prescribed medicines and related information"
          listItem={["HTML, CSS, JavaScript", "Python (Flask Framework)", "SQLite"]}
          link="https://www.reactbd.com/projects"
        />
        <ArchiveCard
          title="Face Recognition System"
          des=" A Face Recognition System implemented using Flask that captures and processes facial images to verify user identity in real-time, ensuring secure and efficient authentication"
          listItem={["OpenCV", "Python (Flask Framework)", "dlib"]}
          link="https://www.reactbd.com/projects"
        />
        <ArchiveCard
          title="Rock or Mine Detection System"
          des=" A Rock or Mine Detection System that uses Machine Learning algorithms to classify sonar signal data and predict whether an object is a rock or a mine, enhancing underwater object detection accuracy"
          listItem={["Python", "Machine Learning Algorithms", "Scikit-learn & Pandas"]}
          link="https://www.reactbd.com/projects"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Education Management Portal"
                des=" An Education Management Portal built using Python and Flask that manages student enrollment, courses, faculty details, and performance tracking, providing an efficient and user-friendly platform for academic institutions."
                listItem={["HTML, CSS, JavaScript", "Python (Flask Framework)", "SQLite"]}
                link=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Diabetes Prediction System"
                des=" A Diabetes Prediction System that uses Support Vector Machine (SVM) with SVC to analyze medical data and predict the likelihood of diabetes in patients, helping in early diagnosis and preventive care"
                listItem={["Python", "SVM", "Scikit-learn & Pandas"]}
                link=""
              />
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Personalized Blog"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                link="https://www.reactbd.com/projects"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Shoppers Online Shopping Market"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="https://www.reactbd.com/projects"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Single Page Personalized Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://www.reactbd.com/projects"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://www.reactbd.com/projects"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://www.reactbd.com/projects"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Blog101 Application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://www.reactbd.com/projects"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Todo application"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://www.reactbd.com/projects"
              />
            </motion.div> */}
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
