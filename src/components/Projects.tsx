import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="lg:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://chinthanapoojary.github.io/zastriya_associates/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/zastriya.png"}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Zastriya Associates Website</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Developed and deployed a professional, responsive website for Zastriya Associates, a legal firm, focusing 
on a clean user interface, seamless cross-device experience, and optimized performance. {" "}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>EmailJS</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/chinthanapoojary/zastriya_associates"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              
              <a
                className="hover:text-textGreen duration-300"
                href="https://chinthanapoojary.github.io/zastriya_associates/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://relaxed-douhua-fecc61.netlify.app//"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/zoo.png"}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Zoo-Management System</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A Zoo Management System web application built using HTML, CSS, JavaScript, and Firebase. It features an interactive animal gallery, online ticket booking, and donation management to support wildlife conservation. The platform ensures a user-friendly experience for visitors while simplifying zoo operations.              
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>FireBase</li>
              <li>Netlify</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/chinthanapoojary/zoo-managment"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              
              <a
                className="hover:text-textGreen duration-300"
                href="https://relaxed-douhua-fecc61.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://appointment-git-main-chinthanapoojarys-projects.vercel.app/"
            target="_blank"
          >
            <div>
              <img
                className="w-full h-full object-contain"
                src={"/assets/images/appointment.png"}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Tattoo Appointment page</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              A Tattoo Appointment Booking Page built using the MERN stack , integrated with Firebase Authentication for secure user login and Razorpay for seamless online payment processing. This page allows users to browse tattoo designs, schedule appointments, and complete payments securely, ensuring a smooth and user-friendly booking experience
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>MERN STACK</li>
              <li>FireBase</li>
              <li>Razorpay</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/chinthanapoojary/Appointment"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              
              <a
                className="hover:text-textGreen duration-300"
                href="https://appointment-git-main-chinthanapoojarys-projects.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
