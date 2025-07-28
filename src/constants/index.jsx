import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from 'react-icons/si';
import { SiScikitlearn } from 'react-icons/si';
import { SiPandas } from 'react-icons/si';
import { SiFastapi } from 'react-icons/si';

import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.png";
import image5 from "../assets/project5.png";
import image6 from "../assets/project6.png";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievement", href: "#award" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Debjit Chatterjee",
  info: "From UI to API to AI—delivering full-stack solutions with style and substance.",
  resumeLinkText: "Download Resume",
  resumeLink: "/Resume.pdf",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Debjit Chatterjee, a full-stack developer with style and substance. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of traditional martial art cultures. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "Sentiment-Aware Recommendation System with Demand Forecasting",
    subtitle:
      "A hybrid fashion recommendation engine that integrates both content and collaborative filtering, sentiment analysis from user reviews, and time-series demand forecasting to deliver smarter, context-aware product suggestions.",
    image: image1,
    link: "https://github.com/Debjit1729/Sentiment-Aware-Recommendation-System-with-Demand-Forecasting"
  },
  {
    title: "Real Time Insurance Premium Prediction API FastAPI ML",
    subtitle:
      "A production-ready machine learning project to predict insurance premiums based on demographic and lifestyle features, using a trained regression model deployed through a FastAPI web API. The project allows users to send JSON requests with personal details such as age, gender, BMI, smoking status, number of children, and region, and receive a predicted premium amount in response.",
    image: image2,
    link: "https://github.com/Debjit1729/Real-Time-Insurance-Premium-Prediction-API--FastAPI-ML-"
  },
  {
    title: "GTA 6 Website using React",
    subtitle: "A visually rich and animated concept landing page for GTA VI, built using React.js and Vite. This project is designed as a front-end showcase inspired by the aesthetics of the Grand Theft Auto franchise, featuring themed graphics, stylized fonts, and animated elements.",
    image: image3,
    link: "https://github.com/Debjit1729/GTA-6-Website-using-React"
  },
  {
    title: "Sidcup Family Golf Website Using HTML, CSS, JavaScript and GSAP",
    subtitle:
      "This project is a visually engaging and interactive website for Sidcup Family Golf, a multipurpose golf facility in South East London. The site is designed to provide users with an immersive experience, showcasing the services and amenities offered by the facility.",
    image: image4,
    link: "https://github.com/Debjit1729/SIDECUP_Family_Golf_Website_Using_HTML_CSS_JavaScript"
  },
  {
    title: "Hospital Emergency Room Dashboard - Power BI Project",
    subtitle:
      "This project delivers a comprehensive Power BI solution to monitor, analyze, and improve the operations of a hospital’s emergency room. It enables stakeholders to track key performance indicators (KPIs), identify trends, and drill down to patient-level data to make data-driven decisions aimed at optimizing patient management and enhancing quality of care.",
    image: image5,
    link: "https://github.com/Debjit1729/Hospital-Emergency-Room-Dashboard"
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with React.js, Tailwind CSS, Framer Motion.",
    image: image6,
    link: "#"
  },
  {
    title: "Moder Animated Awwwarded Website (OSCHI DESIGN) Using React",
    subtitle: "Upcoming...",
    image: image7,
  },
  {
    title: "Full Stack Donation App With Node.js, Express.js, React.js and Tailwind",
    subtitle: "Upcoming...",
    image: image8,
  },
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "Intermediate",
  },
  {
    icon: <DiJavascript1 className="text-4xl lg:text-6xl text-white" />,
    name: "JavaScript",
    experience: "Advanced",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "Intermediate",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "Intermediate",
  },
  {
    icon: <DiPython className="text-4xl lg:text-6xl text-red-600" />,
    name: "Python",
    experience: "Advanced",
  },
  {
    icon: <SiMysql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "MySQL",
    experience: "Intermediate",
  },
  {
    icon: <SiScikitlearn className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Scikit-learn",
    experience: "Advanced",
  },
  {
    icon: <SiPandas className="text-4xl lg:text-6xl text-sky-700" />,
    name: "Pandas",
    experience: "Advanced",
  },
  {
    icon: <SiFastapi className="text-4xl lg:text-6xl text-sky-700" />,
    name: "FastAPI",
    experience: "Beginner",
  }
];

export const ACHIEVEMENT = {
  title: "Smart India Hackathon 2023",
  // award: "Gold Medalist - 2024",
  description:
    "Our project focuses on real-time Twitter sentiment analysis using NLP and AI/ML Achievements: Team NOVA excelled in an internal hackathon and secured a spot among 30 teams, out of 300, to represent our college at SIH",
};

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/debjit.chatterjee.37201",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/channels/@me",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/debjitchatterjee1729?igsh=MTBwbnc4ejlmOGhzNQ==",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Debjit1729",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/debjit-chatterjee-ab1437314/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
