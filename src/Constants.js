import htmlLogo from '/html.png';
import cssLogo from '/css.png';
import javascriptLogo from '/javascript.png';
import reactjsLogo from '/reactjs.png';
import reduxLogo from '/redux.png';
import tailwindcssLogo from '/tailwindcss.png';
import gsapLogo from '/gsap.png';
import mongodbLogo from '/mongodb.png';
import cLogo from '/c.png';
import cppLogo from '/cpp.png';
import githubLogo from '/github.png';
import vscodeLogo from '/vscode.png';
import postmanLogo from '/postman.png';
import mcLogo from '/mc.png';
import vercelLogo from '/vercel.png';
import psit from '/PSIT.png'
import krec from '/krec.jpeg'
import movieslogo from '/moviesstorelogo.png'
import firebaselogo from '/firebase.png'
import contactlogo from '/contactlogo.png'
import budgettriplogo from '/budgettrip.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Firebase', logo: firebaselogo }
    ],
  },
];

export const education = [
    {
      id: 0,
      img: psit,
      school: "PSIT, Kanpur",
      date: "Dec-2022 - Present",
      grade: "6.6 SGPA",
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) degree in Information Technology. My academic journey has given me a strong foundation in computer science fundamentals, programming, and software development. I have hands-on experience in building frontend projects using React.js and Tailwind CSS. Alongside web development, I am actively learning Data Structures & Algorithms (DSA) to strengthen my problem-solving skills. I am also exploring backend development to become a full-stack developer. My goal is to build efficient, scalable, and user-friendly applications.",
    },
    {
      id: 1,
      img: krec,
      school: "K.R. Education Centre, Kanpur",
      date: "Apr 2021 - March 2022",
      grade: "74%",
      desc: "I completed my class 12 education from K.R. Education Centre, Kanpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: krec,
      school: "K.R. Education Centre, Kanpur",
      date: "Apr 2019 - March 2020",
      grade: "86%",
      desc: "I completed my class 10 education from K.R. Education Center, Kanpur , under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Movies Store App",
      description:
        "A responsive movie store web application built using React and Tailwind CSS, powered by The Movie Database (TMDb) API. It displays trending movies, detailed movie pages, detailed actor pages and supports real-time search. Integrated Redux for state management and Axios for API requests. The UI is clean and modern, optimized for fast performance and mobile responsiveness.",
      image: movieslogo,
      tags: ["React JS", "Tailwind CSS", "Redux", "Vercel", "TMDB API"],
      github: "https://github.com/Anand-9677/Movies-Store",
      webapp: "https://movies-store-self.vercel.app/",
    },
    {
      id: 1,
      title: "Contacts Firebase App",
      description:
        "I developed a Contacts App using React.js, Tailwind CSS, and Firebase. The app allows users to add, view, and delete contacts, storing each contact's name and email securely in Firebase Realtime Database. It features a clean and responsive UI for a smooth user experience. Firebase handles the backend logic, including real-time data updates and storage. This project helped me understand CRUD operations and integration of cloud databases with React.",
      image: contactlogo,
      tags: ["React JS", "Tailwind CSS", "Firebase", "Vercel"],
      github: "https://github.com/Anand-9677/ContactsFirebaseApp",
      webapp: "https://contacts-firebase-app.vercel.app/",
    },
    {
      id: 2,
      title: "Budget-Trip.com",
      description:
        "Budget Trip is a responsive travel booking website where users can explore and book affordable holiday packages like Goa, Manali, etc. It features a clean React-based frontend with dynamic routing and real-time data. The backend is built using Node.js and Express, connected to MongoDB Atlas for managing package data. Admins can add new packages using Postman. EmailJS is integrated for handling user inquiries via email. The site is deployed with Vercel (frontend) and Render (backend), and uses a custom domain from GoDaddy. The platform supports both desktop and mobile users with a smooth user experience.",
      image: budgettriplogo,
      tags: ["React JS", "Tailwind CSS", "EmailJS", "Node JS", "Express JS",  "MongoDB Atlas", "Render", "Vercel"],
      github: "https://github.com/Anand-9677/Budget-Trip.com",
      webapp: "https://www.budget-trip.com",
    }
  ];