import { motion, useTransform } from 'framer-motion';
import AnimatedMenuItem from './AnimatedMenuItem';
import ButtonTopRight from '../ButtonTopRight';

type MenuItemType = {
    typeId: number;
    title: string;
    vietnameseName: string;
    is_vegetarian?: boolean;
    is_hot?: boolean;
    price: number;
};

type MenuSectionProps = {
    title: string;
    description: string;
    items: MenuItemType[];
    imgSrc: string;
    motionProps: any;
    mainScrollYProgress: any;
    animationRange: [number, number];
}

/**
 * A full-screen animated menu section with scroll-linked transitions
 * 
 * @remarks
 * Requires Framer Motion's ScrollYProgress context. Should be used within
 * an AnimatedScrollContainer component for proper scroll tracking.
 * 
 * @example
 * ```tsx
 * <MenuSection
 *   title="Desserts"
 *   description="Sweet endings"
 *   items={dessertItems}
 *   imgSrc="/desserts-bg.jpg"
 *   motionProps={springAnimation}
 *   mainScrollYProgress={scrollProgress}
 *   animationRange={[0.2, 0.4]}
 * />
 * ```
 * 
 * @param title - Section heading displayed in large text
 * @param description - Brief section description
 * @param items - Array of menu items to display
 * @param imgSrc - Background image URL for the section
 * @param motionProps - Framer Motion animation configuration
 * @param mainScrollYProgress - Scroll progress reference (0-1 range)
 * @param animationRange - Scroll position range [start, end] for animations
 * 
 * @returns React component with scroll-linked animations
 */
const MenuSection: React.FC<MenuSectionProps> = ({ title, description, items, imgSrc, motionProps, mainScrollYProgress, animationRange }) => {
    const localScrollProgress = useTransform(mainScrollYProgress, animationRange, [0, 1]);

    return (
        <motion.div className="absolute inset-0" {...motionProps}>
            <div className='relative w-full h-screen overflow-hidden'>
                <div className="absolute inset-0 w-full h-full bg-white-500" />
                <div className="relative h-full flex flex-col md:flex-row text-black-500 p-4 md:p-8 lg:p-16 gap-4 md:gap-8 lg:gap-16">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-16">
                        <h1 className="font-circula circula-bold md:circula-extrabold lg:circula-black text-6xl md:text-7xl lg:text-10xl">
                            {title}
                        </h1>
                        <div className="">
                            <p className="text-lg md:text-xl lg:text-2xl">{description}</p>
                        </div>
                        <div className='flex justify-center'>
                            <img src={imgSrc} alt={title} />
                        </div>
                    </div>
                    <div className="flex ml-auto flex-col">
                        <div className="flex flex-col flex-1">
                            {items.map((item, index) => (
                                <AnimatedMenuItem
                                    key={item.typeId}
                                    item={item}
                                    index={index}
                                    scrollProgress={localScrollProgress}
                                />
                            ))}
                        </div>
                        <div className='ml-auto flex'>
                            <a href="/order">
                                <ButtonTopRight width='w-40' color='black-500'>Order Online</ButtonTopRight>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuSection;