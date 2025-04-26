import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen.jsx';
import Header from './Header.jsx';
import About from './About.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Footer from './Footer.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simuler un temps de chargement de 2 secondes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Nettoyer le timer si le composant est démonté
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <>
                    <Header />
                    <About />
                    <Projects />
                    <Experience />
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
