import headerLogo from "./header_logo.png";
import logo from "./favicon.png";
import grain from "./grain.jpg";
import DanceHero from "./danceHero.png";
import pawan from "./memoji-smile.png";
import sunny from "./memoji-avatar-1.png";
import anuska from "./memoji-avatar-2.png";
import viraj from "./memoji-avatar-3.png";
import jaya from "./memoji-avatar-4.png";
import swastik from "./memoji-avatar-5.png";
import Guru from "./guru.png";
import Vision from "./vision.png";
import Motivate from "./motivate.png";
import Global from "./Global.png";
import Accuracy from "./Accuracy.png";
import Border from "./border.png";
import BottomBorder from './bottomBorder.png'

// techstack Icons
import {
  SiMediapipe,
  SiPython,
  SiPytorch,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiTensorflow,
  SiNodedotjs,
  SiDocker,
  SiReact,
  SiExpo,
  SiVercel,
  SiFirebase,
  SiGooglegemini,
  SiGithub,
  SiCloudinary,
  SiMongodb,
  SiFastapi,
  SiNetlify,
  SiAmazonwebservices,
} from "react-icons/si";
import { GrServicePlay } from "react-icons/gr";
import { StaticImageData } from "next/image";

export const assets = {
  headerLogo,
  logo,
  grain,
  DanceHero,
  pawan,
  sunny,
  viraj,
  jaya,
  anuska,
  swastik,
  Border,
  BottomBorder
};

export const teamData = [
  {
    name: "Pawan Kumar",
    role: "Leader",
    social: [{ name: "mail", link: "pawankumarfz12@gmail.com" }],
    course: "B.Sc Hons Mathematics",
    year: "3",
    avatar: pawan,
  },
  {
    name: "Sunny Kumar",
    role: "Co-Leader",
    social: [{ name: "mail", link: "pawankumarfz12@gmail.com" }],
    course: "B.Sc Hons Mathematics",
    year: "3",
    avatar: sunny,
  },
  {
    name: "Viraj Tanti",
    role: "Member",
    social: [{ name: "mail", link: "pawankumarfz12@gmail.com" }],
    course: "B.Sc Hons Mathematics",
    year: "3",
    avatar: viraj,
  },
  {
    name: "Jaya Sinha",
    role: "Member",
    social: [{ name: "mail", link: "pawankumarfz12@gmail.com" }],
    course: "B.Sc Hons CS",
    year: "3",
    avatar: jaya,
  },
  {
    name: "Anuska Pohal",
    role: "Member",
    social: [{ name: "mail", link: "pawankumarfz12@gmail.com" }],
    course: "B.Sc Prog. CS",
    year: "2",
    avatar: anuska,
  },
  {
    name: "Swastik Tiwari",
    role: "Member",
    social: [{ name: "mail", link: "pawankumarfz12@gmail.com" }],
    course: "B.Sc Prog. CS",
    year: "3",
    avatar: swastik,
  },
];

export const techStack = [
  { name: "PyTorch", icon: SiPytorch },
  { name: "Python", icon: SiPython },
  { name: "MediaPipe", icon: SiMediapipe },
  { name: "TensorFlow.js", icon: SiTensorflow },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Firebase", icon: SiFirebase },
  { name: "Gemini", icon: SiGooglegemini },
  { name: "Netlify", icon: SiNetlify },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "GitHub", icon: SiGithub },
  { name: "React Native", icon: SiReact },
  { name: "MongoDB", icon: SiMongodb },
  { name: "HTML", icon: SiHtml5 },
  { name: "Css", icon: SiCss3 },
  { name: "js", icon: SiJavascript },
  { name: "Yolo Vision", icon: GrServicePlay },
  { name: "AWS", icon: SiAmazonwebservices },
  { name: "Expo Go", icon: SiExpo },
  { name: "Vercel", icon: SiVercel },
  { name: "Fast API", icon: SiFastapi },
];

interface FeatureProps {
  title: string;
  desc: string;
  position: boolean;
  img: StaticImageData;
}

export const features: FeatureProps[] = [
  {
    title: "Accurate. Accessible. Authentic.",
    desc: "Learning with DARPAN is interactive, and our research-backed approach works! With real-time pose correction and a vast digital library, you'&apos;'ll master ancient mudras while preserving cultural heritage.",
    position: true,
    img: Accuracy,
  },
  {
    title: "Backed by AI Vision",
    desc: "We use a combination of advanced computer vision pipelines and deep learning models to create a tool that effectively recognizes, classifies, and teaches complex hand gestures.",
    position: false,
    img: Vision,
  },
  {
    title: "Stay Motivated",
    desc: "We make it easy to form a habit of practice with game-like features and progression tracking. Get instant feedback and suggestions for correct forms to improve your skills efficiently.",
    position: true,
    img: Motivate,
  },
  {
    title: "Your Personal Guru",
    desc: "Combining the best of AI and dance knowledge, our AI Guru  is tailored to help you learn at your own pace. It answers your queries and provides detailed information  on every mudra.",
    position: false,
    img: Guru,
  },
  {
    title: "Connect, learn, and preserve",
    desc: "Join a global community to digitize and make traditional dance heritage accessible worldwide. dont put text something ",
    position: true,
    img: Global,
  },
];

export const tableData = [
  {
    feature: "Dance Mudra Focus",
    darpan: "Yes",
    mudraMingle: "Yes",
    yolo: "Yes",
    mediapipe: "No",
  },
  {
    feature: "Real-Time Feedback",
    darpan: "Yes",
    mudraMingle: "Yes",
    yolo: "No",
    mediapipe: "Yes",
  },
  {
    feature: "Educational/Tutorial Features",
    darpan: "Yes",
    mudraMingle: "No",
    yolo: "No",
    mediapipe: "No",
  },
  {
    feature: "Multilingual Support",
    darpan: "Yes",
    mudraMingle: "No",
    yolo: "No",
    mediapipe: "No",
  },
  {
    feature: "Community Learning/Support",
    darpan: "Yes",
    mudraMingle: "No",
    yolo: "No",
    mediapipe: "No",
  },
  {
    feature: "Open Source",
    darpan: "Planned",
    mudraMingle: "Yes",
    yolo: "Yes",
    mediapipe: "No",
  },
  {
    feature: "Dedicated Large Mudra Dataset",
    darpan: "Planned",
    mudraMingle: "No",
    yolo: "No",
    mediapipe: "No",
  },
  {
    feature: "Customizable Models for Mudras",
    darpan: "Yes",
    mudraMingle: "No",
    yolo: "Yes",
    mediapipe: "No",
  },
  {
    feature: "AR or Visual Overlay Feedback",
    darpan: "Planned",
    mudraMingle: "Yes",
    yolo: "No",
    mediapipe: "No",
  },
  {
    feature: "Mobile/Edge Deployment Ready",
    darpan: "Yes",
    mudraMingle: "No",
    yolo: "Yes",
    mediapipe: "Yes",
  },
];
