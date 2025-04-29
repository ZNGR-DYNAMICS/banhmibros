import { motion, useTransform } from 'framer-motion';
import AnimatedMenuItem from './AnimatedMenuItem';
import ButtonTopRight from '../ButtonTopRight';
import { useMediaQuery } from '../../hooks/useMediaQuery';

type MenuItem = {
    typeId: number;
    title: { 'en': string, 'de': string };
    vietnameseName: string;
    is_vegetarian?: boolean;
    is_hot?: boolean;
    price: number;
};

type MenuSectionProps = {
    title: { en: string, de: string };
    description: { en: string, de: string };
    items: MenuItem[];
    imgSrc: string;
    motionProps: any;
    mainScrollYProgress: any;
    animationRange: [number, number];
}

const MAX_ITEMS_BEFORE_SHRINK = 4;
const INITIAL_IMAGE_MAX_HEIGHT = 172;
const MD_BREAKPOINT = '(min-width: 768px)';

/**
 * A full-screen animated menu section with scroll-linked transitions.
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
 * @param title - Menu section title displayed in large text
 * @param description - Brief section description
 * @param items - Array of menu items to display
 * @param imgSrc - Background image URL for the section
 * @param motionProps - Framer Motion animation configuration
 * @param mainScrollYProgress - Scroll progress reference (0-1 range)
 * @param animationRange - Scroll position range [start, end] for animations
 * 
 * @returns React component with scroll-linked animations
 */
const MenuSection: React.FC<MenuSectionProps> = ({ title, description, items, imgSrc, motionProps, mainScrollYProgress, animationRange}) => {
    const localScrollProgress = useTransform(mainScrollYProgress, animationRange, [0, 1]);
    const shouldShrinkImage = items.length > MAX_ITEMS_BEFORE_SHRINK;
    const isMediumOrLarger = useMediaQuery(MD_BREAKPOINT);

    const imageMaxHeight = useTransform(
        localScrollProgress,
        [0.1, 0.6],
        [INITIAL_IMAGE_MAX_HEIGHT, shouldShrinkImage ? 0 : INITIAL_IMAGE_MAX_HEIGHT]
    );
    const animatedStyle =
        !isMediumOrLarger && shouldShrinkImage
            ? { maxHeight: imageMaxHeight, overflow: 'hidden' }
            : { overflow: 'hidden' };

    return (
        <motion.div className="absolute inset-0" {...motionProps}>
            <div className='relative w-full h-screen'>
                <div className="absolute inset-0 w-full h-full bg-white-500" />
                <div className="relative h-full flex flex-col md:flex-row text-black-500 p-4 md:p-8 lg:p-16 gap-4 md:gap-8 lg:gap-16">
                    <div className="flex flex-col gap-4 md:gap-8 lg:gap-16 md:w-1/2"> {/**/}
                        <h1 className="font-circula circula-bold md:circula-extrabold lg:circula-black text-6xl md:text-7xl lg:text-10xl text-nowrap"
                            data-en={title.en} data-de={title.de}
                        >
                            {title.en}
                        </h1>
                        <div className="">
                            <p className="text-lg md:text-xl lg:text-2xl" data-en={description.en} data-de={description.de}>{description.en}</p>
                        </div>
                        <motion.div
                            className='flex justify-center w-full max-h-[172px] md:max-h-[50vh]'
                            style={animatedStyle}
                        >
                            <img className='object-cover w-full h-auto max-h-full' src={imgSrc} alt={title.en} />
                        </motion.div>
                    </div>
                    <div className="flex flex-col md:ml-auto md:w-1/2">
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
                        <div className='hidden mt-auto ml-auto md:flex'>
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