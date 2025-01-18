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
  {
    id: "achievements",
    title:"Achievements",
  },
  
];

const services = [
  {
    title: "AI Research",
    icon: <FrontendIcon />,
  },
  {
    title: "Medical Image Analysis",
    icon: <FullStackIcon />,
  },
  {
    title: "Deep Learning",
    icon: <ProblemSolvingIcon />,
  },
  {
    title: "Computer Vision",
    icon: <FreelancerIcon />,
  }
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
    year: 2024,
    points: [
      "Built LocusChat, a generative AI for customer interaction",
      "Designed, trained, and integrated the system",
      "Ensured seamless user experience",
     ],
  },
  {
    title: "GDSC AI/ML Lead",
    company_name: "Google Developer Student Clubs RGUKT Nuzvid",
    icon: "/assets/company/gdsc-logo.svg",
    iconBg: "#E6DEDD",
    year:2023,
    date: "August 2023 - September 2024",
    points: [
      "Raised awareness about AI technologies",
      "Selected for skills and problem-solving abilities",
      "Motivated and supported AI/ML students",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "LetsGrowMore",
    icon: "/assets/company/letsgrowmore2.png",
    iconBg: "#E6DEDD",
    year:2023,
    date: "February 2023 - March 2023",
    points: [
      "Performed EDA, Feature Engineering and Selection",
      "Developed UI prototype for House Price Prediction",
      "Earned a Letter of Recommendation",
    ],
  },
  {
    title: "AI Engineer",
    company_name: "Parabola9",
    icon: "/assets/company/parabola9.png",
    iconBg: "#E6DEDD",
    date: "December 2024 - Current",
    year: 2024,
    points: [
      "Worked on Video Captioning models for Traffic Accidents",
      "Automatic Recognition of Attendance through OCR"
      
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
    image: "/assets/avatar.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "/assets/avatar.png",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "/assets/avatar.png",
  },
];

const projects = [
  {
    name: "ZOYA",
    description:
    "ZOYA is a humanoid Robot which can talk and have a conversation with university students. Can help students with their career guidance, fun talks and little chit chat. This is built using Python, Generative AI, Langchain, SpeechSynthesis and OpenAI. Furtherly we deployed into a Raspberry Pi board and made it portable. This project was made for Teckzite 2024, RGUKT Nuzvid and we made it to Top 2. I learned many ascepts of developing a real world application and deploying into Raspberr Pi.",
    tags: [
      {
        name: "langchain",
        color: "orange-text-gradient",
      },
      {
        name: "raspberry-pi",
        color: "blue-text-gradient",
      },
      {
        name: "TOP2",
        color: "green-text-gradient",
      },
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
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
      {
        name: "SEMI-FINALIST",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/projects/handsign.png",
    source_code_link: "https://github.com/Nikhil-Rao20/ML_and_DL_Projects/tree/main/Sign%20Language%20Detection",
    deployed_link: "https://github.com/Nikhil-Rao20/ML_and_DL_Projects/tree/main/Sign%20Language%20Detection",
  },
  {
    name: "STAWS",
    description:
    "Smart Traffic Alert Watching System (STAWS) is a complete end to end automated solution for accident monitoring and reporting system, with police administration being the main target. This used Video captioning, Sentimental analysis, Reporting System and Enhanced Route Mapping. We also add customer sector where we provide the route mapping option, accident reporting to nearerst location so that they can skip that route and also a option to report accident that they see.",
    tags: [
      {
        name: "video-captioning",
        color: "green-text-gradient",
      },
      {
        name: "avishkar-2024",
        color: "pink-text-gradient",
      },
      {
        name: "traffic-alerts",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/projects/staws.gif",
    source_code_link: "https://github.com/jayanth119/avishkaar_trafficpulse",
    deployed_link: "https://github.com/jayanth119/avishkaar_trafficpulse",
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
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "gemini-model",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/projects/ai-cal.png",
    source_code_link: "https://github.com/Nikhil-Rao20/AI-Calculator",
    deployed_link: "https://github.com/Nikhil-Rao20/AI-Calculator",
  },
  {
    name: "SWETCHA",
    description:
      "SWETCHA is an automated solution for detecting workplace harassment using CCTV video analysis. Utilizes hand touching, face recognition, and scene classification to detect any harassment. If yes it would send a complete report to the POSH cell in company. This project is made for Idea and Innovation Challenge, Indian Army - NCC.",
    tags: [
      {
        name: "computer-vision",
        color: "blue-text-gradient",
      },
      {
        name: "INDIAN-ARMY",
        color: "blue-text-gradient",
      },
      {
        name: "Delhi",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/projects/swetcha.gif",
    source_code_link: "#",
    deployed_link: "#",
  },
  {
    name: "Video-GPT",
    description:
    "Welcome to the Video GPT, which made a win in the Parabola9 Hackathon. This project focuses on video caption generation using advanced models and techniques to process videos efficiently. Our system is built to handle large video files by reducing and eliminating redundant frames, leveraging models like InternV2, and generating summarized text from the remaining frames.Frame Reduction: Efficiently reduces the number of frames in a video to optimize processing time. Redundant Frame Elimination: Identifies and removes frames that do not add value to the video's context. InternV2 Model: Utilizes the InternV2 model for redundant frame analysis and processing. Text Summarization: Automatically generates text summaries from the optimized video frames.",
    tags: [
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
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
        name: "html",
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
    image: "/assets/projects/university.gif",
    source_code_link: "https://github.com/Nikhil-Rao20/Web_Development/tree/main/University_Website",
    deployed_link: "https://uni-website-nikhil.netlify.app/",
  },
  {
    name: "Crop Management System",
    description:
    "This project leverages machine learning to recommend optimal crops based on atmospheric and geographical data, helping farmers make informed choices. It includes a crop disease detection system that identifies plant diseases from leaf images, enabling precise diagnosis. Additional features like a chatbot enhance user interaction, while farmers and merchants can connect and collaborate, with merchants able to promote their businesses on the platform. These AI-driven tools aim to support decision-making, boost crop yields, and foster a collaborative agricultural community.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "deeplearning",
        color: "blue-text-gradient",
      },
    ],
    image: "/assets/projects/crop-mang.png",
    source_code_link: "#",
    deployed_link: "#",
  },
];

const researchProjects = [
  {
    name: "CardioLens - Automated Cardiovascular Disease Detection",
    description:
    "Our project uses AI to automate echocardiogram analysis with Intel’s DPT Large model, achieving a 0.795 dice score. It segments the left ventricle, calculates ejection fraction, and provides disease predictions via a web interface, streamlining diagnostics and supporting clinicians effectively.",
    tags: [
      {
        name: "echo-cardiogram",
        color: "blue-text-gradient",
      },
      {
        name: "IIT-KGP",
        color: "green-text-gradient",
      },
      {
        name: "TOP3",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/cardiolens.gif",
    source_code_link: "https://github.com/jayanth119/The-Challangers",
    deployed_link: "https://github.com/jayanth119/The-Challangers",
  },
  {
    name: "Comparative Analysis of MLP-Mixer and CNN Models for OCT Images",
    description:"The project evaluates MLP-Mixer and CNN models for OCT image classification, exploring loss functions and calibration metrics to enhance accuracy, robustness, and insights into their medical imaging suitability.",
    tags: [
      
      {
        name: "mlp-mixer",
        color: "orange-text-gradient",
      },
      {
        name : "convolutions",
        color : "blue-text-gradient"
      },
      {
        name : "comprative-analysis",
        color: "green-text-gradient"
      }
      
    ],
    image: "/assets/projects/mlp_mixer.jpeg",
    source_code_link: "https://github.com/Nikhil-Rao20/ZOYA",
    deployed_link: "https://github.com/Nikhil-Rao20/ZOYA",
  },
  {
  	name: "Enhanced YOLOv8 with CNN, Transformer and Mamba based Backbones",
  	description:
    "Redesigned YOLOv8 by replacing the Darknet backbone with condition-based Transformers and Vision Mamba models. Despite the innovations, the original backbone outperformed alternatives in mAP vs. parameters. This project, fully coded and mathematically optimized, highlights the efficiency of the vanilla architecture and showcases my problem-solving and analytical skills.",
  	tags: [
  		{
  			name: "yolov8",
  			color: "blue-text-gradient"
  		},
  		{
  			name: "transformer",
  			color: "green-text-gradient"
  		},
      {
  			name: "architecture",
  			color: "blue-text-gradient"
  		},
  	],
  	image: "/assets/projects/yolobackbone.png",
  	source_code_link: "#",
  	deployed_link: "#"
  },
  {
    name: "Liver and Thyroid Nodule Segmentation Comparative Analysis",
    description: "The project analyzes UNet and Modified UNet for Liver and Thyroid Segmentation, proposes new loss functions, identifies optimal combinations, and includes uncertainty-based performance quantification.",
        tags: [
      {
        name: "liver",
        color: "green-text-gradient",
      },
      {
        name: "thyroid-nodule",
        color: "pink-text-gradient",
      },
      {
        name: "UNet-Family",
        color: "green-text-gradient"
      }
    ],
    image: "/assets/projects/thyroid.jpg",
    source_code_link: "https://github.com/Nikhil-Rao20/ML_and_DL_Projects/tree/main/Sign%20Language%20Detection",
    deployed_link: "https://github.com/Nikhil-Rao20/ML_and_DL_Projects/tree/main/Sign%20Language%20Detection",
  },
  {
    name: "Power of Casuality in Medical Image Analysis",
    description:
      "I worked on ResNet18 and ResNet50 models for OCT image classification and introduced the casuality aware features to combine and give the best results so far. The casuality aware CNN are very much useful for the scenaiors of where the background and area of interest are intersecting each other.",
    tags: [
      {
        name: "casuality-aware-CNN",
        color: "blue-text-gradient",
      },
      {
        name: "OCT",
        color: "blue-text-gradient",
      },
      {
        name: "resnet18",
        color: "green-text-gradient"
      }
    ],
    image: "/assets/projects/casuality.png",
    source_code_link:
      "https://github.com/Nikhil-Rao20/AI-Calculator",
    deployed_link:
      "https://github.com/Nikhil-Rao20/AI-Calculator",
  },
  {
    name: "ZeroShot CT Segmentation using MedSam and Panoptic Segmentation",
    description:
    "We trained the MedSam on the CT images for different organs and made it to segment the organs with the help of Panoptic Segmentation. This projects helped us to get an overview of the power of zeroshot learning and currently working on it.",
    tags: [
      {
        name: "aws",
        color: "orange-text-gradient",
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
    image: "/assets/projects/zeroshot.png",
    source_code_link: "https://github.com/jayanth119/The-Challangers",
    deployed_link: "https://github.com/jayanth119/The-Challangers",
  },
  {
  	name: "Updating Domain Generalization with YOLO Architecture Evolution",
  	description:
    "This project focuses on domain generalization by evolving the YOLOv3 model architecture into YOLOv8, incorporating domain-specific logic and improvements. I developed and optimized custom architectures for YOLOv5, YOLOv8, and YOLOv10, enhancing the model’s ability to generalize across different domains. By coding the entire framework from scratch, I successfully improved performance and achieved superior results, showcasing my expertise in architecture design and advanced computer vision techniques.",
  	tags: [
  		{
  			name: "DG-YOLO",
  			color: "blue-text-gradient"
  		},
  		{
  			name: "architecture",
  			color: "green-text-gradient"
  		},
  	],
  	image: "/assets/projects/dgyolo.png",
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

const achievementsData = [
  {
    achievement: "Intel AI Hackathon @ IEEE Indicon",
    position: "2nd Runner UP",
    year: "2024",
    picture: "/assets/achivs/intel-2.jpg",
    location: "Kharagpur, West Bengal",
    organization: "Intel AI and IEEE Indicon 2024",
    pictures: ["/assets/achivs/intel-2.jpg","/assets/achivs/intel-1.jpg","/assets/achivs/intel-3.jpg","/assets/achivs/intel-6.jpg","/assets/achivs/intel-4.jpg","/assets/achivs/intel-5.jpg",]
  },
  {
    achievement: "Multimodal AI4TB Challenge, SNU-H",
    position: "Top 22",
    year: "2024",
    picture: "/assets/achivs/maic-2.jpeg",
    location: "Seoul, South Korea",
    organization: "Seoul National University - Hospital",
    pictures: ["/assets/achivs/maic-2.jpeg","/assets/achivs/maic-3.png","/assets/achivs/maic-1.jpg",]
  },
  {
    achievement: "Idea and Innovation by Indian Army",
    position: "Top 20",
    year: "2024",
    picture: "/assets/achivs/ncc-3.jpg",
    location: "Delhi, India",
    organization: "NCC, Indian Army",
    pictures: ["/assets/achivs/ncc-3.jpg","/assets/achivs/ncc-1.jpg","/assets/achivs/ncc-4.jpg","/assets/achivs/ncc-2.jpg",]
  },
  {
    achievement: "ProjectExpo, Teckzite 2024",
    position: "Top 2",
    year: "2024",
    picture: "/assets/achivs/zoya-1.JPG",
    location: "Nuzvid, Andhra Pradesh",
    organization: "RGUKT Nuzvid",
    pictures: ["/assets/achivs/zoya-1.JPG","/assets/achivs/zoya-2.JPG","/assets/achivs/zoya-3.jpeg","/assets/achivs/zoya-4.jpeg","/assets/achivs/zoya-5.jpeg","/assets/achivs/zoya-6.jpeg","/assets/achivs/zoya-7.jpeg","/assets/achivs/zoya-8.jpeg",]
  },
  {
    achievement: "Parabola9 Hackathon",
    position: "Top 1",
    year: "2024",
    picture: "/assets/achivs/parabola-1.jpg",
    location: "Nuzvid, Andhra Pradesh",
    organization: "RGUKT Nuzvid",
    pictures: ["/assets/achivs/parabola-1.jpg","/assets/achivs/parabola-2.jpg","/assets/achivs/parabola-3.jpg",]
  },
  {
    achievement: "Blogathon 49 by Analytics Vidhya",
    position: "Top 1",
    year: "2024",
    picture: "/assets/achivs/blog-3.png",
    location: "Gurugram, Haryana",
    organization: "Analytics Vidhya",
    pictures: ["/assets/achivs/blog-3.png","/assets/achivs/blog-2.jpeg","/assets/achivs/bloga-1.jpeg",]
  },
  {
    achievement: "Hackfest 2.0, CMR College",
    position: "Finalist",
    year: "2024",
    picture: "/assets/achivs/cmr-2.jpeg",
    location: "Hyderabad, India",
    organization: "CMR College, Hyderabad",
    pictures: ["/assets/achivs/cmr-2.jpeg","/assets/achivs/cmr-1.jpeg","/assets/achivs/cmr-3.jpeg","/assets/achivs/cmr-4.jpeg",]
  },
  {
    achievement: "CV Appathon 2.0 by Intel and Awiros",
    position: "Semi-Finalist",
    year: "2023",
    picture: "/assets/projects/handsign.png",
    location: "Bengaluru, India",
    organization: "Intel and Awiros",
    pictures: ["/assets/projects/handsign.png",]
  },
  {
    achievement: "AI/ML Professional by DIAT-DRDO, India",
    position: "Certified Professional (Special seat)",
    year: "2023",
    picture: "/assets/achivs/drdo-1.png",
    location: "Pune, India",
    organization: "DIAT-Pune and DRDO",
    pictures: ["/assets/achivs/drdo-1.png","/assets/achivs/drdo-3.png",]
  },
  {
    achievement: "Scientia, The Project Expo",
    position: "Top 2",
    year: "2022",
    picture: "/assets/achivs/scientia-1.jpg",
    location: "Nuzvid, India",
    organization: "RGUKT Nuzvid",
    pictures: ["/assets/achivs/scientia-1.jpg","/assets/achivs/scientia-2.jpg",]
  },
];

const travelImages = [
  {
    url: "/assets/travel/araku.jpg",
    location: 'Araku',
    caption: 'Peaceful Green Hills'
  },
  {
    url: "/assets/travel/araku_3.jpg",
    location: 'Madagada Viewpoint, Araku',
    caption: 'Iconic Pose'
  },
  {
    url: "/assets/travel/araku_2.jpg",
    location: 'Hills of Araku',
    caption: 'Capture every moment'
  },
  {
    url: "/assets/travel/rajamundry.jpg",
    location: 'Rajamundry',
    caption: 'Godavari River'
  },
  {
    url: "/assets/travel/viza.jpg",
    location: 'RK Beach, Vizag',
    caption: 'Hail the sea'
  },
  {
    url: "/assets/travel/bang.jpg",
    location: 'Namma Metro, Benguluru',
    caption: 'Ride the Future'
  },
  {
    url: "/assets/travel/iisc_2.jpg",
    location: 'IISC Banglore',
    caption: 'Where Minds Soar'
  },
  {
    url: "/assets/travel/cmr_hyd.jpg",
    location: 'Hyderabad',
    caption: 'Compete Learn Win'
  },
  {
    url: "/assets/travel/thanjavur.jpg",
    location: 'Thanjavur',
    caption: 'Sprituality'
  },
  {
    url: "/assets/travel/charminar.jpg",
    location: 'Hyderabad',
    caption: 'Grace in Stone'
  },
  {
    url: "/assets/travel/guitar.jpg",
    location: 'Vijayawada',
    caption: 'Music Plays, Play Music'
  },
  {
    url: "/assets/travel/chidambaram.jpg",
    location: 'Chidambaram',
    caption: 'Future to Know'
  },
  {
    url: "/assets/travel/srisailam_dam.jpg",
    location: 'Srisailam',
    caption: 'Mighty Water Flow'
  },
  {
    url: "/assets/travel/bza.jpg",
    location: 'Vijayawada',
    caption: 'Sips of Joy'
  },
  {
    url: "/assets/travel/bhavani_islands.jpg",
    location: 'Bhavani Islands',
    caption: 'Nestled in Nature'
  },
  {
    url: "/assets/travel/krishna_dam.jpg",
    location: 'Prakasam Barrage',
    caption: 'Bridge Over Calm'
  },
  {
    url: "/assets/travel/Hyder_army_unit.jpg",
    location: 'Army Unit, Hyderabad',
    caption: 'Strength in Unity'
  },
  {
    url: "/assets/travel/orissa.jpg",
    location: 'Khudra Road, Orissa',
    caption: 'Love the Trains'
  },
  {
    url: "/assets/travel/kharagpur.jpg",
    location: 'Kharagpur, West Bengal',
    caption: 'Whispers in the Mist'
  },
  {
    url: "/assets/travel/thala_for_reason.jpg",
    location: 'Kharagpur Railway Station',
    caption: 'Thala for a Reason'
  },
  {
    url: "/assets/travel/vicotira_mahal.jpg",
    location: 'Victoria Mahal, Kolkata',
    caption: 'Beauty in Stone'
  },
  {
    url: "/assets/travel/kali_mata.jpg",
    location: 'Kali Mata Temple, Kolkata',
    caption: 'Powerful Goddess'
  },
  {
    url: "/assets/travel/vizag_beach.jpg",
    location: 'RK Beach, Vizag',
    caption: 'Enjoy every Breeze'
  },
  {
    url: "/assets/travel/IITKGP.jpg",
    location: 'IIT Kharagpur',
    caption: 'Acheive the Impossible'
  },
  {
    url: "/assets/travel/Intel AI Hackathon.jpg",
    location: 'IIT Kharagpur',
    caption: 'Hard work paid off'
  },
  {
    url: "/assets/travel/sklm_aitam.jpg",
    location: 'AITAM, Srikakulam',
    caption: 'Learning and Building'
  },
  {
    url: "/assets/travel/meet_with_GC_Indian_army.jpg",
    location: 'RGUKT Nuzvid',
    caption: 'Indian Army meets Us'
  },
  
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  researchProjects,
  socials,
  heroTexts,
  travelImages ,
  achievementsData,
};
