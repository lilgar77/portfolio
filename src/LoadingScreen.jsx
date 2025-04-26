import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="loading-screen flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="custom-spinner w-20 h-20 border-8 border-t-8 border-gray-200 rounded-full"></div>
            <p className="text-4xl font-bold mt-8 animate-bounce">Bienvenue sur le Portfolio de Lilian</p>
            <style>{`
                .custom-spinner {
                    border-top-color: #9F7AEA;
                    animation: spin 1.5s linear infinite, fadeIn 1s ease-in-out;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes fadeIn {
                    0% {
                        opacity: 0;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }

                .animate-bounce {
                    animation: bounce 2s infinite;
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;
