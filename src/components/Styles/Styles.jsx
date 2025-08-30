import React from "react";

export default function Styles() {
    return (
        <style jsx>{`
            @keyframes spin-in {
                from {
                    transform: rotate(-90deg);
                    opacity: 0;
                }
                to {
                    transform: rotate(0);
                    opacity: 1;
                }
            }

            @keyframes gradient {
                0%,
                100% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
            }

            @keyframes fade-in-up {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            @keyframes fade-in {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }

            .animate-spin-in {
                animation: spin-in 0.3s ease-out;
            }

            .animate-gradient {
                background-size: 200% 200%;
                animation: gradient 3s ease infinite;
            }

            .animate-fade-in-up {
                animation: fade-in-up 0.8s ease-out forwards;
                opacity: 0;
            }

            .animate-fade-in {
                animation: fade-in 0.8s ease-out forwards;
                opacity: 0;
            }
        `}</style>
    );
}
