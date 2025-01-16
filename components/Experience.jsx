// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { motion } from "framer-motion";

// import "react-vertical-timeline-component/style.min.css";

// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// function ExperienceCard({ experience, theme }) {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{
//         background:
//           theme !== "dark"
//             ? "linear-gradient(90deg, rgba(224,234,240,1) 0%, rgba(232,239,243,1) 50%, rgba(224,234,240,1) 100%)"
//             : "linear-gradient(90deg, rgba(33,33,52,1) 0%, rgba(39,39,61,1) 50%, rgba(33,33,52,1) 100%)",
//         color: theme !== "dark" ? "#7e8c9f" : "#e5e6e9",
//         boxShadow: "0 1px 2px 0 rgb(128, 77, 238)",
//       }}
//       contentArrowStyle={{
//         borderRight: `7px solid ${theme !== "dark" ? "#e0eaf0" : "#2b2b42"}`,
//       }}
//       style={{
//         boxShadow: "0 1px 2px 0 rgb(128, 77, 238 / 0.05)",
//       }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg, backgroundColor: "#e0eaf0" }}
//       icon={
//         <div className="flex justify-center items-center w-full h-full">
//           <div className="w-[60%] h-[60%] relative">
//             <Image
//               src={experience.icon}
//               alt={experience.company_name}
//               fill={true}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//             />
//           </div>
//         </div>
//       }
//     >
//       <div>
//         <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[24px] font-bold">
//           {experience.title}
//         </h3>
//         <p
//           className="dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[16px] font-semibold"
//           style={{ margin: 0 }}
//         >
//           {experience.company_name}
//         </p>
//       </div>

//       <ul className="mt-5 list-disc ml-5 space-y-2">
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-[14px] pl-1 tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </VerticalTimelineElement>
//   );
// }

// function Experience() {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <section className="w-full p-8 mt-20">
//       <motion.div variants={textVariant()}>
//         <p className={`sectionSubText text-center`}>What I have done so far</p>
//         <h2 className={`sectionHeadText text-center`}>Work Experience.</h2>
//       </motion.div>

//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline lineColor={theme === "dark" ? "#7e8c9f" : "#8c9db1"}>
//           {experiences.map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${index}`}
//               experience={experience}
//               theme={theme}
//             />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </section>
//   );
// }

// export default SectionWrapper(Experience, "work");

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import {
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";

// import "react-vertical-timeline-component/style.min.css";

// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// function ExperienceCard({ experience, theme }) {
//   return (
//     <div
//       className={`p-4 rounded-lg shadow-md flex flex-col items-start bg-[${
//         theme !== "dark"
//           ? "#e0eaf0"
//           : "#33334f"
//       }] text-[${theme !== "dark" ? "#7e8c9f" : "#e5e6e9"}]`}
//     >
//       <div className="flex items-center w-full">
//         <div className="w-[50px] h-[50px] relative mr-4">
//           <Image
//             src={experience.icon}
//             alt={experience.company_name}
//             fill={true}
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//           />
//         </div>
//         <div>
//           <h3 className="text-[20px] font-bold">{experience.title}</h3>
//           <p className="text-[16px] font-semibold">{experience.company_name}</p>
//         </div>
//       </div>
//       <ul className="mt-5 list-disc pl-5 space-y-2">
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="text-[14px] tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Experience() {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [selectedIdx, setSelectedIdx] = useState(0);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <section className="w-full p-8 mt-20">
//       <motion.div variants={textVariant()}>
//         <p className="sectionSubText text-center">What I have done so far</p>
//         <h2 className="sectionHeadText text-center">Work Experience.</h2>
//       </motion.div>

//       <div className="mt-20 flex flex-wrap justify-center items-center gap-8">
//         {experiences.map((experience, index) => (
//           <div
//             key={`experience-${index}`}
//             onClick={() => setSelectedIdx(index)}
//             className={`cursor-pointer px-4 py-2 rounded-lg border ${
//               selectedIdx === index
//                 ? "bg-blue-500 text-white"
//                 : theme !== "dark"
//                 ? "bg-gray-100 text-gray-800"
//                 : "bg-gray-800 text-gray-100"
//             }`}
//           >
//             {experience.date}
//           </div>
//         ))}
//       </div>

//       <div className="mt-10">
//         <ExperienceCard
//           experience={experiences[selectedIdx]}
//           theme={theme}
//         />
//       </div>
//     </section>
//   );
// }

// export default SectionWrapper(Experience, "work");


// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import { experiences } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// // Group experiences by year
// const groupExperiencesByYear = (experiences) => {
//   return experiences.reduce((acc, experience) => {
//     const year = new Date(experience.date).getFullYear();
//     if (!acc[year]) {
//       acc[year] = [];
//     }
//     acc[year].push(experience);
//     return acc;
//   }, {});
// };

// function ExperienceCard({ experience, theme }) {
//   return (
//     <div
//       className={`p-4 rounded-lg shadow-md flex flex-col items-start bg-[${
//         theme !== "dark"
//           ? "#e0eaf0"
//           : "#33334f"
//       }] text-[${theme !== "dark" ? "#7e8c9f" : "#e5e6e9"}]`}
//     >
//       <div className="flex items-center w-full">
//         <div className="w-[50px] h-[50px] relative mr-4">
//           <Image
//             src={experience.icon}
//             alt={experience.company_name}
//             fill={true}
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//           />
//         </div>
//         <div>
//           <h3 className="text-[20px] font-bold">{experience.title}</h3>
//           <p className="text-[16px] font-semibold">{experience.company_name}</p>
//         </div>
//       </div>
//       <ul className="mt-5 list-disc pl-5 space-y-2">
//         {experience.points.map((point, index) => (
//           <li
//             key={`experience-point-${index}`}
//             className="text-[14px] tracking-wider"
//           >
//             {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Experience() {
//   const { theme } = useTheme();
//   const [mounted, setMounted] = useState(false);
//   const [selectedYear, setSelectedYear] = useState(null);

//   const experiencesByYear = groupExperiencesByYear(experiences);
//   const years = Object.keys(experiencesByYear).sort((a, b) => b - a);

//   useEffect(() => {
//     setMounted(true);
//     if (years.length > 0) {
//       setSelectedYear(years[0]);
//     }
//   }, [years]);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <section className="w-full p-8 mt-20">
//       <motion.div variants={textVariant()}>
//         <p className="sectionSubText text-center">What I have done so far</p>
//         <h2 className="sectionHeadText text-center">Work Experience.</h2>
//       </motion.div>

//       <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
//         {years.map((year) => (
//           <button
//             key={year}
//             onClick={() => setSelectedYear(year)}
//             className={`px-4 py-2 rounded-lg border ${
//               selectedYear === year
//                 ? "bg-blue-500 text-white"
//                 : theme !== "dark"
//                 ? "bg-gray-100 text-gray-800"
//                 : "bg-gray-800 text-gray-100"
//             }`}
//           >
//             {year}
//           </button>
//         ))}
//       </div>

//       <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {selectedYear &&
//           experiencesByYear[selectedYear].map((experience, index) => (
//             <ExperienceCard
//               key={`experience-${selectedYear}-${index}`}
//               experience={experience}
//               theme={theme}
//             />
//           ))}
//       </div>
//     </section>
//   );
// }

// export default SectionWrapper(Experience, "work");

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Group experiences by year
const groupExperiencesByYear = (experiences) => {
  return experiences.reduce((acc, experience) => {
    const { year } = experience;
    if (!year) {
      console.warn("Experience entry missing year: ", experience);
      return acc;
    }
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(experience);
    return acc;
  }, {});
};

function ExperienceCard({ experience, theme }) {
  return (
    <div
      className={`p-4 rounded-lg shadow-md flex flex-col items-start bg-[${
        theme !== "dark" ? "#e0eaf0" : "#33334f"
      }] text-[${theme !== "dark" ? "#7e8c9f" : "#e5e6e9"}]`}
    >
      <div className="flex items-center w-full">
        <div className="w-[50px] h-[50px] relative mr-4">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          />
        </div>
        <div>
          <h3 className="text-[20px] font-bold">{experience.title}</h3>
          <p className="text-[16px] font-semibold">{experience.company_name}</p>
        </div>
      </div>
      <ul className="mt-5 list-disc pl-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedYear, setSelectedYear] = useState(2024); // Default to 2024

  const experiencesByYear = groupExperiencesByYear(experiences);
  const years = Object.keys(experiencesByYear).sort((a, b) => b - a);

  useEffect(() => {
    setMounted(true);
    if (!experiencesByYear[selectedYear]) {
      // Fallback to the first available year if 2024 isn't present
      setSelectedYear(years[0]);
    }
  }, [years, selectedYear, experiencesByYear]);

  if (!mounted) {
    return null;
  }

  return (
    <section className="w-full p-8 mt-20">
      <motion.div variants={textVariant()}>
        <p className="sectionSubText text-center">What I have done so far</p>
        <h2 className="sectionHeadText text-center">Work Experience.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-lg border ${
              selectedYear == year
                ? "bg-blue-500 text-white"
                : theme !== "dark"
                ? "bg-gray-100 text-gray-800"
                : "bg-gray-800 text-gray-100"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedYear &&
          experiencesByYear[selectedYear]?.map((experience, index) => (
            <ExperienceCard
              key={`experience-${selectedYear}-${index}`}
              experience={experience}
              theme={theme}
            />
          ))}
      </div>
    </section>
  );
}

export default SectionWrapper(Experience, "work");
