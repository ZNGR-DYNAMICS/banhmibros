import { motion, useTransform } from 'framer-motion';
import AnimatedMenuItem from './AnimatedMenuItem';

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

const MenuSection: React.FC<MenuSectionProps> = ({ title, description, items, imgSrc, motionProps, mainScrollYProgress, animationRange }) => {
    const localScrollProgress = useTransform(mainScrollYProgress, animationRange, [0, 1]);

    return (
        <motion.div className="absolute inset-0" {...motionProps}>
            <div className='relative w-full h-screen overflow-hidden'>
                <img src={imgSrc} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="relative flex h-full flex-col text-white-500">
                    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
                        <h1 className="font-circula circula-bold md:circula-extrabold lg:circula-black text-6xl md:text-7xl lg:text-10xl">
                            {title}
                        </h1>
                    </div>
                    <div className="flex flex-row">
                        <div className="px-4 md:px-8 lg:px-16">
                            <p className="text-lg md:text-xl lg:text-2xl">{description}</p>
                        </div>
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
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuSection;