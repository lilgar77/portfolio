import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCode, faCogs, faTasks } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-16"
        >
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center mb-8">
                    <span className="text-3xl mr-4 text-purple-400">
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </span>
                    <h2 className="text-4xl font-bold">Ma Formation</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    Actuellement étudiant en 2e année de BUT Informatique à l'IUT de La Rochelle,
                    choix du parcours A : Développeur Full-Stack.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex items-start space-x-4">
                        <FontAwesomeIcon icon={faCode} className="text-2xl mt-1 text-blue-400" />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-200">Développement web et application</h3>
                            <ul className="list-disc list-inside pl-4 text-gray-300">
                                <li>Back-end : SQL, Symfony</li>
                                <li>Front-end : React, JS</li>
                                <li>POO : Python, C++, Swift</li>
                            </ul>
                            <br></br>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <FontAwesomeIcon icon={faCogs} className="text-2xl mt-1 text-green-400" />
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-200">Maîtrise des principaux utilitaires DevOps</h3>
                            <ul className="list-disc list-inside pl-4 text-gray-300">
                                <li>Docker, Git...</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-start space-x-4 mt-8 md:mt-0 md:col-span-2">
                    <FontAwesomeIcon icon={faTasks} className="text-2xl mt-1 text-yellow-400" />
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-200">Gestion de projet</h3>
                        <p className="text-gray-300">Méthode agile (Scrum)</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
