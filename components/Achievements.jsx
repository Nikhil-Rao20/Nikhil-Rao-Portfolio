import React, { useState } from "react";
import { achievementsData } from "../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../utils/motion";

const Achievements = () => {
    const [showAll, setShowAll] = useState(false);
    const [selectedAchievement, setSelectedAchievement] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Separate top 3 and other achievements
    const topAchievements = achievementsData.slice(0, 4);
    const otherAchievements = achievementsData.slice(4);

    const handleReadMore = (achievement) => {
        setSelectedAchievement(achievement);
        setCurrentImageIndex(0); // Reset the image carousel to the first image
    };

    const handleClosePopup = () => {
        setSelectedAchievement(null);
    };

    const handleNextImage = () => {
        if (selectedAchievement.pictures && currentImageIndex < selectedAchievement.pictures.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    const handlePrevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <section className="xl:my-36 md:mx-36 p-8" id="achievements">
            <div>
            <p className="sectionSubText">My awards</p>
            <h2 className="sectionHeadText">Achievements</h2>

            <div className="w-full flex">
            <p className="mt-3 dark:text-ctnSecondaryDark text-ctnSecondaryLight text-[17px] max-w-3xl leading-[30px]">
                These are my achievements that showcase my dedication and hard work.
            </p>
            </div>
            <div className="mt-10"></div>
            <motion.div
                variants={fadeIn("up", "spring", 0.5, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                >
                
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {(showAll ? achievementsData : topAchievements).map((achievement, index) => (
                        <Tilt
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            className={`dark:bg-bgSecondaryDark bg-bgSecondaryLight 
                            } p-3 rounded-xl sm:w-[270px] w-full h-fit min-h-[350px] shadow-sm shadow-primary`}
                            >
                        <div
                            key={index}
                            className="bg-white shadow-lg p-4 rounded-lg relative hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={achievement.picture}
                                alt={achievement.achievement}
                                className="w-full h-36 object-cover rounded-md"
                            />
                            <div className="mt-3">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {achievement.achievement}
                                </h3>
                                <p className="text-sm text-gray-500">{achievement.year}</p>
                                <button
                                    onClick={() => handleReadMore(achievement)}
                                    className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                        </Tilt>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        {showAll ? "Show Less" : "See More"}
                    </button>
                </div>
            </motion.div>
            </div>

            {selectedAchievement && (
                
                <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
                style={{ '--border-color': 'var(--bg-color)' }} // Dynamically sets border color
                >
                <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden flex flex-col lg:flex-row shadow-xl border-4 p-4" style={{ borderColor: 'var(--border-color)' }}>
                    {/* Carousel for images */}
                    <div className="relative w-full lg:w-1/3 order-1 lg:order-none">
                    <div className="flex justify-center items-center h-full">
                        <button
                        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedAchievement.pictures.length - 1 : prevIndex - 1))}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-75"
                        >
                        &lt;
                        </button>
                        <img
                        src={selectedAchievement.pictures[currentImageIndex]}
                        alt={`Achievement image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover rounded-md border border-gray-200"
                        />
                        <button
                        onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex === selectedAchievement.pictures.length - 1 ? 0 : prevIndex + 1))}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full hover:bg-opacity-75"
                        >
                        &gt;
                        </button>
                    </div>
                    </div>
                    {/* Text content */}
                    <div className="w-full lg:w-2/3 p-6 bg-gray-50 flex flex-col order-2 lg:order-none">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <span className="text-indigo-500">&#9733;</span>
                        {selectedAchievement.achievement}
                    </h3>
                    <div className="mb-4 space-y-2">
                        <p className="text-gray-600 flex items-center gap-2">
                        <span className="text-indigo-500">&#128505;</span>
                        <strong>Position:</strong> {selectedAchievement.position}
                        </p>
                        <p className="text-gray-600 flex items-center gap-2">
                        <span className="text-green-500">&#128197;</span>
                        <strong>Year:</strong> {selectedAchievement.year}
                        </p>
                        <p className="text-gray-600 flex items-center gap-2">
                        <span className="text-red-500">&#128205;</span>
                        <strong>Location:</strong> {selectedAchievement.location}
                        </p>
                        <p className="text-gray-600 flex items-center gap-2">
                        <span className="text-blue-500">&#127970;</span>
                        <strong>Organization:</strong> {selectedAchievement.organization}
                        </p>
                    </div>
                    <div className="mt-auto text-right">
                        <button
                        onClick={handleClosePopup}
                        className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg hover:opacity-90"
                        >
                        Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>

            )}
            
        </section>
    );
};

export default Achievements;
