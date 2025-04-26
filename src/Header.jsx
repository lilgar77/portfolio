import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faEnvelope, faUserAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-20 text-center"
        >
            <motion.h1
                className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                Lilian Garcia
            </motion.h1>
            <motion.p
                className="text-xl md:text-3xl text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Développeur Full Stack
            </motion.p>
            <div className="flex justify-center space-x-6">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/lilgar77"
                    target="_blank"
                    className="p-3 bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-colors"
                    title="GitHub"
                >
                    <span className="text-3xl text-purple-400"><FontAwesomeIcon icon={faCodeBranch} /></span>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.linkedin.com/in/lilian-garcia-024858264"
                    target="_blank"
                    className="p-3 bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-colors"
                    title="LinkedIn"
                >
                    <span className="text-3xl text-purple-400"> <FontAwesomeIcon icon={faUserAlt} /> </span>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:lilian.garcia77176@gmail.com"
                    className="p-3 bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition-colors"
                    title="Email"
                >
                    <span className="text-3xl text-purple-400"><FontAwesomeIcon icon={faEnvelope} /></span>
                </motion.a>
            </div>
        </motion.header>
    );
};

export default Header;
