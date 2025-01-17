// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import Image from "next/image";

// import { projects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import truncateText from "@/utils/truncate";
// import GithubLogo from "./../public/assets/icons/github.svg";
// import RocketLogo from "./../public/assets/icons/rocket.svg";

// function ProjectCard({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   deployed_link,
// }) {
//   const CHAR_LIMIT = 250;

//   return (
//     <motion.div
//       variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.25 }}
//     >
//       <Tilt
//         tiltMaxAngleX="10"
//         tiltMaxAngleY="10"
//         className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[450px] shadow-sm shadow-primary"
//       >     
//         <div className="relative w-full h-[230px]">
//           <div className="w-full h-full object-cover rounded-2xl relative">
//             <Image
//               src={image}
//               alt="project_image"
//               fill={true}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//               className="object-cover"
//             />
//           </div>

//           <div className="absolute inset-0 flex justify-start m-3 card-img_hover">
//             <div
//               onClick={() => window.open(deployed_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <RocketLogo className="w-1/2 h-1/2 mr-[2px] z-10" />
//             </div>
//           </div>
//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <GithubLogo className="w-2/3 h-2/3 z-10" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
//             {name}
//           </h3>
//           <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
//             {truncateText(description, CHAR_LIMIT)}
//           </p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// }

// function Works() {
//   return (
//     <section className="xl:my-36 md:mx-36 p-8 " id="projects">
//       <motion.div
//         variants={textVariant()}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.25 }}
//       >
//         <p className={"sectionSubText"}>My work</p>
//         <h2 className={"sectionHeadText"}>Projects.</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.25 }}
//         >
//           These projects showcase my practical skills and experience, each with
//           descriptions and links to code repositories. They demonstrate my
//           work on updated technologies, and research work on different projects.
//           Faced many challenges and tailored a strategic plan to overcome them.
//         </motion.p>
//       </div>

//       <div className="md:mt-20 mt-10 flex justify-center flex-wrap gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Works;

// The Main code -------------------------------------

// import React from "react";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade, EffectFlip, EffectCube, EffectCoverflow, EffectCards, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "swiper/css/navigation";

// import { projects, researchProjects } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";
// import truncateText from "@/utils/truncate";
// import GithubLogo from "./../public/assets/icons/github.svg";
// import RocketLogo from "./../public/assets/icons/rocket.svg";

// function ProjectCard({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   deployed_link,
// }) {
//   const CHAR_LIMIT = 250;

//   return (
//     <motion.div
//       variants={fadeIn("up", "spring", index * 0.5, 0.75)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.25 }}
//     >
//       <Tilt
//         tiltMaxAngleX={10}
//         tiltMaxAngleY={10}
//         className="dark:bg-bgSecondaryDark bg-bgSecondaryLight p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[450px] shadow-sm shadow-primary"
//       >
//         <div className="relative w-full h-[230px]">
//           <Image
//             src={image}
//             alt="project_image"
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
//             className="object-cover rounded-2xl"
//           />

//           {/* Deployed Link Button */}
//           <div className="absolute top-3 left-3 flex items-center justify-center">
//             <div
//               onClick={() => window.open(deployed_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <RocketLogo className="w-5 h-5" />
//             </div>
//           </div>

//           {/* Source Code Button */}
//           <div className="absolute top-3 right-3 flex items-center justify-center">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <GithubLogo className="w-6 h-6" />
//             </div>
//           </div>
//         </div>

//         {/* Project Details */}
//         <div className="mt-5">
//           <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
//             {name}
//           </h3>
//           <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
//             {truncateText(description, CHAR_LIMIT)}
//           </p>
//         </div>

//         {/* Tags */}
//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <span key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </span>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// }

// function Works() {
//   return (
//     <section className="xl:my-36 md:mx-36 p-8" id="projects">
//       <div>
//         <p className="sectionSubText">My work</p>
//         <h2 className="sectionHeadText"> Research Projects</h2>
//       </div>

//       <div className="w-full flex">
//         <p className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]">
//           These are few research oriented projects, these showcases my research capabilities in Medical Image Analysis and Computer Vision
//         </p>
//       </div>

//       {/* Swiper Carousel */}
//       <div className="md:mt-20 mt-10">
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           slidesPerView={3}  // Number of cards visible at once
//           spaceBetween={30}  // Space between cards
//           loop={false}
//           centeredSlides={true}
//           navigation={true}
//           modules={[EffectCoverflow, Navigation]}
//           className="mySwiper"
//           breakpoints={{
//             300: {
//               slidesPerView: 1, // Only 1 card visible per slide for mobile
//               spaceBetween: 0,  // No space between slides
//             },
//             400: {
//               slidesPerView: 1, // Only 1 card visible per slide for mobile
//               spaceBetween: 0,  // No space between slides
//             },
//             500: {
//               slidesPerView: 1, // Only 1 card visible per slide for mobile
//               spaceBetween: 0,  // No space between slides
//             },
//             640: {
//               slidesPerView: 1, // Only 1 card visible per slide for mobile
//               spaceBetween: 0,  
//             },
//             768: {
//               slidesPerView: 1, // 2 slides visible on tablet
//               spaceBetween: 0, // Medium gap between slides on tablet
//             },
//             1024: {
//               slidesPerView: 3, // 3 slides visible on larger screens
//               spaceBetween: 40, // Space between slides on larger screens
//             },
//           }}
//         >
//           <div className="mt-10"></div>
//           {researchProjects.map((project, index) => (
//             <SwiperSlide key={`project-${index}`}>
//               <ProjectCard {...project} />
//             </SwiperSlide>
//           ))}
//           <div className="mt-10"></div>
//         </Swiper>
//       </div>
//       <div>
//         <h2 className="sectionHeadText">Application Projects</h2>
//       </div>
//       <div className="w-full flex">
//         <p className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]">
//           These projects showcase my practical skills and experience, in application oriented projects.
//         </p>
//       </div>
//       <div className="md:mt-20 mt-10">
//         <Swiper
//           effect="coverflow"
//           grabCursor={true}
//           slidesPerView={3}  // Number of cards visible at once
//           spaceBetween={30}  // Space between cards
//           loop={false}
//           centeredSlides={true}
//           navigation={true}
//           modules={[EffectCoverflow, Navigation]}
//           className="mySwiper"
//           breakpoints={{
//             300: {
//               slidesPerView: 1, // Only 1 card visible per slide for mobile
//               spaceBetween: 0,  // No space between slides
//             },
//             400: {
//               slidesPerView: 1, // Only 1 card visible per slide for mobile
//               spaceBetween: 0,  // No space between slides
//             },
//             500: {
//               slidesPerView: 1, // Only 1 card visible per slide for mobile
//               spaceBetween: 0,  // No space between slides
//             },
//             640: {
//               slidesPerView: 1, // Only 1 card visible per slide for mobile
//               spaceBetween: 0,  
//             },
//             768: {
//               slidesPerView: 1, // 2 slides visible on tablet
//               spaceBetween: 0, // Medium gap between slides on tablet
//             },
//             1024: {
//               slidesPerView: 3, // 3 slides visible on larger screens
//               spaceBetween: 40, // Space between slides on larger screens
//             },
//           }}
//         >
//           <div className="mt-10"></div>
//           {projects.map((project, index) => (
//             <SwiperSlide key={`project-${index}`}>
//               <ProjectCard {...project} />
//             </SwiperSlide>
//           ))}
//           <div className="mt-10"></div>
//         </Swiper>
//       </div>
//     </section>
    
//   );
// }


// export default Works;
// --------------------------------------------------

import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import { projects, researchProjects } from "../constants";
import { fadeIn } from "../utils/motion";
import truncateText from "@/utils/truncate";
import GithubLogo from "./../public/assets/icons/github.svg";
import RocketLogo from "./../public/assets/icons/rocket.svg";

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_link,
  type, // type to differentiate between research and application projects
}) {
  const CHAR_LIMIT = 250;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className={`${
          type === "application"
            ? "dark:bg-blue-950 bg-cyan-50"
            : "dark:bg-bgSecondaryDark bg-bgSecondaryLight"
        } p-5 rounded-2xl sm:w-[370px] w-full h-fit min-h-[450px] shadow-sm shadow-primary`}
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            className="object-cover rounded-2xl"
          />

          {/* Deployed Link Button for Application Projects */}
          {type === "application" && (
            <div className="absolute top-3 left-3 flex items-center justify-center">
              <div
                onClick={() => window.open(deployed_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <RocketLogo className="w-5 h-5" />
              </div>
            </div>
          )}

          {/* Source Code Button for Application Projects */}
          {type === "application" && (
            <div className="absolute top-3 right-3 flex items-center justify-center">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <GithubLogo className="w-6 h-6" />
              </div>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="mt-5">
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[14px]">
            {truncateText(description, CHAR_LIMIT)}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

function Works() {
  return (
    <section className="xl:my-36 md:mx-36 p-8" id="projects">
      <div>
        <p className="sectionSubText">My work</p>
        <h2 className="sectionHeadText">Research Projects</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]">
          These are a few research-oriented projects, showcasing my capabilities in Medical Image Analysis and Computer Vision.
        </p>
      </div>

      {/* Swiper Carousel for Research Projects */}
      <div className="md:mt-20 mt-10">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          centeredSlides={true}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 0 },
            400: { slidesPerView: 1, spaceBetween: 0 },
            500: { slidesPerView: 1, spaceBetween: 0 },
            640: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 1, spaceBetween: 0 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          
          {researchProjects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <ProjectCard {...project} type="research" />
            </SwiperSlide>
          ))}
          <div className="mt-10"></div>
        </Swiper>
      </div>

      <div>
        <h2 className="sectionHeadText">Application Projects</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]">
          These projects showcase my practical skills and experience in application-oriented projects.
        </p>
      </div>

      {/* Swiper Carousel for Application Projects */}
      <div className="md:mt-20 mt-10">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          centeredSlides={true}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
          breakpoints={{
            300: { slidesPerView: 1, spaceBetween: 0 },
            400: { slidesPerView: 1, spaceBetween: 0 },
            500: { slidesPerView: 1, spaceBetween: 0 },
            640: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 1, spaceBetween: 0 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`}>
              <ProjectCard {...project} type="application" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Works;
