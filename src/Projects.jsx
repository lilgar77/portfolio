import React from 'react';
import { motion } from 'framer-motion';
import {faCodeBranch, faLaptopCode} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Projects = () => {
    const projectsData = [
        {
            id: 2,
            title: "Smart Campus (Pt.PHP Symfony)",
            description: "Ce projet vise à améliorer le confort des salles de classe et réduire l'empreinte écologique de l'école en surveillant la qualité de l'air intérieur. En mesurant les niveaux de CO₂, l'humidité et la température, le système aide à ajuster la ventilation pour maintenir un environnement sain, contribuant ainsi aux objectifs de neutralité carbone de La Rochelle d'ici 2050.",
            codeLink: "https://github.com/lilgar77/SmartCampus",
            demoLink: "https://demo.project2.com",
            imageSrc: "https://imgur.com/xzwutb7.png"
        },
        {
            id: 2,
            title: "Smart Campus (Pt. ESP32 C++)",
            description: "Ce projet vise à améliorer le confort des salles de classe et réduire l'empreinte écologique de l'école en surveillant la qualité de l'air intérieur. En mesurant les niveaux de CO₂, l'humidité et la température, le système aide à ajuster la ventilation pour maintenir un environnement sain, contribuant ainsi aux objectifs de neutralité carbone de La Rochelle d'ici 2050.",
            codeLink: "https://github.com/lilgar77/SmartCampus",
            demoLink: "https://demo.project2.com",
            imageSrc: "https://imgur.com/6LOUO4o.png"
        },
        {
            id: 3,
            title: "P0KeMonE Game (C++)",
            description: "Ce projet est un jeu Pokémon en open world développé en C++, permettant aux joueurs de capturer des Pokémon, de participer à des combats stratégiques et de suivre un scénario captivant. Les joueurs peuvent explorer librement un vaste environnement tout en relevant divers défis et en façonnant leur propre aventure.",
            codeLink: "https://github.com/lilgar77/PokemonGame",
            demoLink: "https://demo.project1.com",
            imageSrc: "https://img001.prntscr.com/file/img001/OhXuc4UPSEiUv8mIT4HFWw.png"
        },
        {
            id: 4,
            title: "Server GTA RP FiveM (Lua)",
            description: "Ce projet est un serveur GTA RP développé en Lua sur la plateforme FiveM, offrant aux joueurs une expérience de jeu immersive et réaliste. Les joueurs peuvent incarner divers personnages, interagir avec d'autres joueurs et participer à des activités variées, telles que des courses de rue, des missions de police et des événements spéciaux.",
            codeLink: "https://github.com/lilgar77/GalaxyV2",
            demoLink: "https://demo.project1.com",
            imageSrc: "https://upload.wikimedia.org/wikipedia/commons/5/5a/FiveM-Logo.png"
        },
        {
            id: 5,
            title: "Api REST Securité (Symfony API platform)",
            description: "Développer une application de gestion de projets multi-sociétés permettant aux utilisateurs d'être associés à plusieurs entreprises, chacune avec des droits spécifiques. Les utilisateurs peuvent consulter et gérer des projets au sein des sociétés auxquelles ils appartiennent, en fonction de leurs rôles respectifs. Le projet est basé sur une configuration initiale incluant Symfony, API Platform et une authentification JWT.",
            codeLink: "https://github.com/lilgar77/exerciceUSTS",
            demoLink: "https://demo.project1.com",
            imageSrc: "https://api-platform.com/docs/symfony/images/api-platform-2.6-api.png"
        },

    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-16"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center mb-8">
                    <span className="text-3xl mr-4 text-purple-400"><FontAwesomeIcon icon={faLaptopCode} /></span>
                    <h2 className="text-4xl font-bold">Projets</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl"
                        >
                            <img
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3 text-purple-400">{project.title}</h3>
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex space-x-7">
                                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300">
                                        <span className="text-2xl mr-2"><FontAwesomeIcon icon={faCodeBranch} /></span>
                                        Code source
                                    </a>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300">
                                        <span className="text-2xl mr-2">🔗</span>
                                        Demo (Coming soon)
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
