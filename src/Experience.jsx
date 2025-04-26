import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuilding, faCodeBranch} from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-16"
        >
            <div className="max-w-3xl mx-auto">
                <div className="flex items-center mb-8">
                    <span className="text-3xl mr-4 text-purple-400"><FontAwesomeIcon icon={faBuilding} /></span>
                    <h2 className="text-4xl font-bold">Expérience</h2>
                </div>
                <div className="space-y-8">
                    <motion.div
                        whileHover={{ x: 10 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg"
                    >
                        <h3 className="text-2xl font-bold mb-2 text-purple-400">Stage Back End - Entreprise USTS</h3>
                        <p className="text-gray-400 mb-4">7 avril - 13 juin 2025 (10 semaines)</p>
                        <p className="text-gray-300">
                            <strong>Développement de projet de recherche & développement informatiques.</strong><br/>
                            - Conception de diagrammes de classes.<br/>
                            - Conception de diagrammes de classes.<br/>
                            - Développement back end de logiciels sur mesure.<br/>
                            - Mises en place de tests unitaires.<br/>
                            - Participation aux réunions de cadrages interne.<br/>
                            - Suivi technique sur notre outil de gestion de projet.<br/>
                        </p>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
