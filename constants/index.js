import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Research",
    icon: <FrontendIcon />,
  },
  {
    title: "Machine Learning",
    icon: <FullStackIcon />,
  },
  {
    title: "Deep Learning",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Computer Vision",
    icon: <FreelancerIcon />,
  },
  {
    title: "Generative AI Applications",
    icon: <BackendIcon />,
  },
];

const technologies = {
  languages: [
    
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
  ],
  frameworks: [
    {
      name: "TensorFlow",
      icon: "/assets/tech/tensorflow.png",
      link: "https://www.tensorflow.org/",
    },
    {
      name: "Pytorch",
      icon: "/assets/tech/pytorch.png",
      link: "https://pytorch.org/",
    },
    {
      name: "OpenCV",
      icon: "/assets/tech/opencv.png",
      link: "https://opencv.org/",
    },
    {
      name: "Langchain",
      icon: "/assets/tech/langchain.png",
      link: "https://www.langchain.com/",
    },
    {
      name: "OpenAI",
      icon: "/assets/tech/openai.png",
      link: "https://openai.com/",
    },
    {
      name: "Hugging Face",
      icon: "/assets/tech/huggingface.png",
      link: "https://huggingface.co/",
    },
  ],
  libraries: [
    {
      name: "Numpy",
      icon: "/assets/tech/numpy.png",
      link: "https://numpy.org/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/pandas.png",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "Seaborn",
      icon: "/assets/tech/seaborn.png",
      link: "https://seaborn.pydata.org/",
    },
    {
      name: "Pillow",
      icon: "/assets/tech/pillow.png",
      link: "https://pillow.readthedocs.io/en/stable/",
    },
    {
      name: "Streamlit",
      icon: "/assets/tech/streamlit.png",
      link: "https://streamlit.io/",
    },
    {
      name: "Gradio",
      icon: "/assets/tech/gradio.png",
      link: "https://www.gradio.app/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "TensorBoard",
      icon: "/assets/tech/TensorBoard.png",
      link: "https://www.tensorflow.org/tensorboard",
    },
    {
      name: "WanDB",
      icon: "/assets/tech/wandb.png",
      link: "https://wandb.ai/site/",
    },
    {
      name: "Kaggle",
      icon: "/assets/tech/kaggle.png",
      link: "https://www.kaggle.com/",
    },
    {
      name: "CUDA",
      icon: "/assets/tech/nvidia.png",
      link: "https://developer.nvidia.com/cuda-toolkit",
    },
    
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    

  ],
  environments: [
    {
      name: "Anaconda",
      icon: "/assets/tech/Anaconda.png",
      link: "https://www.anaconda.com/",
    },
    {
      name: "Jetson Nano",
      icon: "/assets/tech/jetson.png",
      link: "https://developer.nvidia.com/embedded/jetson-nano",
    },
    {
      name: "NVIDIA AI Workbench",
      icon: "/assets/tech/nvidia.png",
      link: "https://www.nvidia.com/en-in/deep-learning-ai/solutions/data-science/workbench/",
    },
    
    {
      name: "Raspberr Pi",
      icon: "/assets/tech/raspberry.png",
      link: "https://www.raspberrypi.com/",
    },
  ],
  databases: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "ReactJs",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
};

const experiences = [
  {
    title: "Generative AI Engineer",
    company_name: "FreeLance",
    icon: "/assets/company/freelancer.png",
    iconBg: "#E6DEDD",
    date: "March 2024 - April 2024",
    points: [
      "I have developed and implemented LocusChat, a generative AI project designed for customer interaction in hotels, restaurants, and clinics",
      "This involved creating an intelligent system capable of handling customer inquiries and providing prompt, accurate responses",
      "My responsibilities included designing the AI architecture, training models, integrating the system with various platforms, and ensuring seamless user experience",
    ],
  },
  {
    title: "GDSC AI/ML Lead",
    company_name: "Google Developer Student Clubs RGUKT Nuzvid",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    date: "August 2023 - September 2024",
    points: [
      "Responsible for raising awareness about trending AI technologies at my university",
      "I was selected for this role due to my skills and problem-solving abilities, outshining many competitors",
      "I motivate and support students interested in AI/ML as part of my open-source contributions",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "LetsGrowMore",
    icon: "/assets/company/letsgrowmore2.png",
    iconBg: "#E6DEDD",
    date: "February 2023 - March 2023",
    points: [
      "Conducted Exploratory Data Analysis to uncover crucial insights",
      "Performed Feature Engineering and Selection for model-ready datasets",
      "Developed CNN models for recognizing mathematical characters and equations, a mood-based song suggestion model",
      "Developed UI prototype for a House Price Prediction project",
      "Major contributor to these projects, earning a Letter of Recommendation from the company",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FigPro",
    description:
      "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "fabricjs",
        color: "orange-text-gradient",
      },
      {
        name: "liveblocks",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/fig-pro.png",
    source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
    deployed_link: "https://fig-pro-github.vercel.app",
  },
  {
    name: "GDSC Website",
    description:
      "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "styled-components",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "framer-motion",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/gdsc-website.png",
    source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
    deployed_link: "https://gdscmvjce.vercel.app/",
  },
  {
    name: "Facility Management System",
    description:
      "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      {
        name: "tanstack/react-query",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/facility-manager.png",
    source_code_link:
      "https://github.com/Shivam-Sharma-1/Facility-Management-System",
    deployed_link:
      "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Nikhil-Rao20",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/nikhileswara-rao-sulake/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://x.com/s_rao80798",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/mine_nikhil_rao/",
  },
];

const heroTexts = [
  "Machine Learning Engineer",
  500,
  "Deep Learning Researcher",
  500,
  "AI Researcher",
  500,
  "Computer Vision Engineer",
  500,
  "Generative AI Researcher",
  500,
  "Frontend Web Developer",
  500,
  "Freelancer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
