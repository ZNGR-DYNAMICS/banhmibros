import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    width?: string;
    color?: string;
    children: React.ReactNode;
}

const ButtonTopRight: React.FC<ButtonProps> = ({ color = 'black-500', width = 'w-48', children }) => {
    const [hover, setHover] = useState(false);
    const borderColor = `border-${color}`;
    const textColor = `text-${color}`;

    const bounceVariant = {
        initial: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 350,
                damping: 30,
            },
        },
        hover: {
            y: -48,
            x: 48,
            transition: {
                type: "spring",
                stiffness: 350,
                damping: 30,
            },
        },
    };

    return (
        <button
            className={`group relative flex justify-center items-center gap-8 rounded-full py-4 px-10 border-4 ${textColor} ${borderColor} overflow-hidden`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                className={`relative h-12 ${width} flex items-center text-4xl ${textColor} overflow-hidden`}
            >
                <motion.p
                    className="absolute top-0 circula-bold"
                    variants={bounceVariant}
                    initial="initial"
                    animate={hover ? "hover" : "initial"}
                >
                {children}
                </motion.p>
                <motion.p
                    className="absolute -left-12 top-12 circula-bold"
                    variants={bounceVariant}
                    initial="initial"
                    animate={hover ? "hover" : "initial"}
                >
                    {children}
                </motion.p>
            </div>

            <div className={`flex items-center justify-center relative h-12 w-8 overflow-hidden`}>
                <motion.svg
                    className="absolute h-8 w-8"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    variants={bounceVariant}
                    initial="initial"
                    animate={hover ? "hover" : "initial"}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6374 3.0404C11.6563 2.03968 12.4828 1.21313 13.4835 1.19424L33.9836 0.807452C34.9843 0.788568 35.7803 1.58451 35.7614 2.58523L35.3746 23.0853C35.3557 24.086 34.5291 24.9126 33.5284 24.9314C32.5277 24.9503 31.7318 24.1544 31.7506 23.1537L32.0549 7.02808L3.87622 35.2068C3.15525 35.9277 2.00797 35.9494 1.31371 35.2551C0.619443 34.5608 0.64109 33.4136 1.36206 32.6926L29.5407 4.51392L13.4152 4.81818C12.4144 4.83706 11.6185 4.04112 11.6374 3.0404Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.svg>
                <motion.svg
                    className="absolute -left-12 top-12 h-8 w-8"
                    viewBox="0 0 37 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    variants={bounceVariant}
                    initial="initial"
                    animate={hover ? "hover" : "initial"}
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6374 3.0404C11.6563 2.03968 12.4828 1.21313 13.4835 1.19424L33.9836 0.807452C34.9843 0.788568 35.7803 1.58451 35.7614 2.58523L35.3746 23.0853C35.3557 24.086 34.5291 24.9126 33.5284 24.9314C32.5277 24.9503 31.7318 24.1544 31.7506 23.1537L32.0549 7.02808L3.87622 35.2068C3.15525 35.9277 2.00797 35.9494 1.31371 35.2551C0.619443 34.5608 0.64109 33.4136 1.36206 32.6926L29.5407 4.51392L13.4152 4.81818C12.4144 4.83706 11.6185 4.04112 11.6374 3.0404Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.svg>
            </div>
        </button>
    );
}

export default ButtonTopRight;