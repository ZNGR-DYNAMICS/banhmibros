import React from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";

export type AnimatedTextProps = {
    children?: React.ReactNode;
    scrollRef: React.RefObject<HTMLElement>;
    "data-en"?: string;
    "data-de"?: string;
};

type AnimatedCharacterProps = {
    char: string;
    index: number;
    progress: MotionValue<number>;
};

const AnimatedCharacter: React.FC<AnimatedCharacterProps> = ({ char, index, progress }) => {
    useTransform(progress, (value) => value - index);
    const smoothedProgress = useSpring(progress, { stiffness: 200, damping: 50 })

    const color = useTransform(
        smoothedProgress,
        [index - 0.5, index + 0.5],
        ["#8E8983", "#1D1A17"]
    );
  
    return (
        <motion.span
            style={{
                display: "inline-block",
                whiteSpace: "pre-wrap",
                color,
            }}
        >
            {char === " " ? "\u00A0" : char}
        </motion.span>
    );
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, scrollRef }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        container: scrollRef,
        offset: ["0 1", "0 0.25"],
        layoutEffect: false,
    });
  
    const text = React.Children.toArray(children || "").join("");
    const progress = useTransform(scrollYProgress, [0, 1], [0, text.length]);

    const tokens = text.split(/(\s+)/);
    let globalIndex = 0;
    
    return (
        <div
            ref={containerRef}
            style={{
                overflow: "hidden",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                position: "relative",
            }}
            className="lg:pb-4"
        >
            {tokens.map((token, tokenIndex) => {
                // If the token is only whitespace, render it directly.
                if (/^\s+$/.test(token)) {
                    globalIndex += token.length;
                    return token;
                }
    
            // Otherwise, it's a word.
                return (
                    <span
                        key={tokenIndex}
                        style={{
                            display: "inline-block",
                            whiteSpace: "nowrap", // Prevent breaking inside the word.
                        }}
                    >
                        {token.split("").map((char) => {
                            const currentIndex = globalIndex;
                            globalIndex += 1;
                            return (
                                <AnimatedCharacter
                                    key={currentIndex}
                                    char={char}
                                    index={currentIndex}
                                    progress={progress}
                                />
                            );
                        })}
                    </span>
                );
            })}
        </div>
    );
};

export default AnimatedText;