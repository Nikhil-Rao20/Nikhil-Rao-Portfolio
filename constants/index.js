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
    name: "ZOYA",
    description:
      "ZOYA is a humanoid Robot which can talk and have a conversation with university students. Can help students with their career guidance, fun talks and little chit chat. This is built using Python, Generative AI, Langchain, SpeechSynthesis and OpenAI. Furtherly we deployed into a Raspberry Pi board and made it portable. This project was made for Teckzite 2024, RGUKT Nuzvid and we made it to Top 2. I learned many ascepts of developing a real world application and deploying into Raspberr Pi.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "generative-ai",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "langchain",
        color: "orange-text-gradient",
      },
      {
        name: "speech-synthesis",
        color: "yellow-text-gradient",
      },
      {
        name : "raspberry-pi",
        color : "blue-text-gradient"
      },
      {
        name : "TOP2",
        color: "green-text-gradient"
      }
    ],
    image: "/assets/projects/zoya-working.JPG",
    source_code_link: "https://github.com/Nikhil-Rao20/ZOYA",
    deployed_link: "https://github.com/Nikhil-Rao20/ZOYA",
  },
  {
    name: "Hand Sign Detection for Deaf and Dumb",
    description:
      "Hand Sign Detection project is for those who are unfortunately deaf and dumb. This project is to normalize their inability of communication so that they can get more further oppurtunities in their life. This can recognize the letters shown to camera and forms a full sentence with auto-complete feature and words recommendation. This project is built using Python, OpenCV, TensorFlow, Keras, Mediapipe and Front Web Development. Acheived a high accuracy of 98.2% for all the letters and deployed into a webpage for interface. This project was a part of Intel Group and Awiros Computer Vision Appathon 2.0 and I made it to the Semi-finals.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
      {
        name: "keras",
        color: "orange-text-gradient",
      },
      {
        name: "mediapipe",
        color: "yellow-text-gradient",
      },
      {
        name: "front-end",
        color: "blue-text-gradient",
      },
      {
        name: "SEMI-FINALIST",
        color: "green-text-gradient"
      }
    ],
    image: "/assets/projects/handsign.png",
    source_code_link: "https://github.com/Nikhil-Rao20/ML_and_DL_Projects/tree/main/Sign%20Language%20Detection",
    deployed_link: "https://github.com/Nikhil-Rao20/ML_and_DL_Projects/tree/main/Sign%20Language%20Detection",
  },
  {
    name: "AI powered Calculator",
    description:
      "An interactive AI-powered calculator designed to solve complex mathematical and physics questions directly from handwritten or drawn inputs. With a user-friendly interface, simply write your question and hit the Calculate button to get precise answers instantly. Perfect for tackling equations and scientific problems with ease. This project was made using ReactJs, NextJs, HTML, CSS, JS, Python, Gemini Model and Image processing.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "js",
        color: "yellow-text-gradient",
      },
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-model",
        color: "green-text-gradient"
      }
    ],
    image: "/assets/projects/ai-cal.png",
    source_code_link:
      "https://github.com/Nikhil-Rao20/AI-Calculator",
    deployed_link:
      "https://github.com/Nikhil-Rao20/AI-Calculator",
  },
  {
    name: "Video-GPT",
    description:
      "Welcome to the Video GPT, which made a win in the Parabola9 Hackathon. This project focuses on video caption generation using advanced models and techniques to process videos efficiently. Our system is built to handle large video files by reducing and eliminating redundant frames, leveraging models like InternV2, and generating summarized text from the remaining frames.Frame Reduction: Efficiently reduces the number of frames in a video to optimize processing time. Redundant Frame Elimination: Identifies and removes frames that do not add value to the video's context. InternV2 Model: Utilizes the InternV2 model for redundant frame analysis and processing. Text Summarization: Automatically generates text summaries from the optimized video frames.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "internvl2",
        color: "yellow-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient"
      },
      {
        name: "TOP1",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/videogpt.jpg",
    source_code_link: "https://github.com/jayanth119/The-Challangers",
    deployed_link: "https://github.com/jayanth119/The-Challangers",
  },
  {
    name: "University Website",
    description:
      "This project is a univeristy website, where recent styled techniques with unique style designing was used. This is made using html, css, javascript, bootstrap and jquerry. This project me taught a lot more about styling, designing and web development.",
    tags: [
      {
        name: "html #css",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "jquerry",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/univer-website.png",
    source_code_link: "https://github.com/jayanth119/The-Challangers",
    deployed_link: "https://github.com/jayanth119/The-Challangers",
  },
  {
  	name: "Crop Managment System",
  	description:
  		"This project leverages machine learning to recommend optimal crops based on atmospheric and geographical data, helping farmers make informed choices. It includes a crop disease detection system that identifies plant diseases from leaf images, enabling precise diagnosis. Additional features like a chatbot enhance user interaction, while farmers and merchants can connect and collaborate, with merchants able to promote their businesses on the platform. These AI-driven tools aim to support decision-making, boost crop yields, and foster a collaborative agricultural community.",
  	tags: [
  		{
  			name: "reactjs",
  			color: "blue-text-gradient"
  		},
  		{
  			name: "flask",
  			color: "green-text-gradient"
  		},
  		{
  			name: "python",
  			color: "pink-text-gradient"
  		},
      {
  			name: "deeplearning",
  			color: "blue-text-gradient"
  		},
  		{
  			name: "machinelearning",
  			color: "green-text-gradient"
  		},
  		{
  			name: "streamlit",
  			color: "pink-text-gradient"
  		}
  	],
  	image: "/assets/projects/crop-mang.png",
  	source_code_link: "#",
  	deployed_link: "#"
  }
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
