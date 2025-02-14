import React from "react";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";

export type AnimatedSVGProps = {
    children?: React.ReactNode;
    scrollRef: React.RefObject<HTMLElement>;
    transitionColor?: string;
};

type AnimatedSVGChildProps = {
    svgElement: React.ReactElement;
    index: number;
    progress: MotionValue<number>;
    transitionColor?: string;
};

const AnimatedSVGChild: React.FC<AnimatedSVGChildProps> = ({
    svgElement,
    index,
    progress,
    transitionColor = "#1D1A17",
}) => {
    // Smooth the scroll progress value
    const smoothedProgress = useSpring(progress, { stiffness: 200, damping: 50 });
    // Animate the color from a base color to the transitionColor over a small range around the index
    const color = useTransform(
        smoothedProgress,
        [index - 0.5, index + 0.5],
        ["#8E8983", transitionColor]
    );

    return (
        <motion.span
            style={{
                display: "inline-block",
                color, // Applies to colors in svg elements using 'currentColor'
                overflow: "hidden",
            }}
        >
            {React.cloneElement(svgElement, {
                // Merge existing classnames to use external svgs
                className: svgElement.props.className,
            })}
        </motion.span>
    );
};

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
    children,
    scrollRef,
    transitionColor,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        container: scrollRef,
        offset: ["0 1", "0 0.25"],
        layoutEffect: false,
    });

    // Creating an array of svg children
    const svgArray = React.Children.toArray(children).filter((child) =>
        React.isValidElement(child)
    );
    const count = svgArray.length;
    // Map the scroll progress to the total number of svgs
    const progress = useTransform(scrollYProgress, [0, 1], [0, count]);

    return (
        <div
            ref={containerRef}
            style={{
                overflow: "hidden",
                display: "flex",
                gap: "0.5rem",
                position: "relative",
            }}
        >
            {svgArray.map((child, index) => (
                <AnimatedSVGChild
                    key={index}
                    svgElement={child as React.ReactElement}
                    index={index}
                    progress={progress}
                    transitionColor={transitionColor}
                />
            ))}
        </div>
    );
};

export default AnimatedSVG;
