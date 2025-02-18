import { useRef } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import MenuItem from "./MenuItem";

type MenuItemType = {
    typeId: number;
    title: string;
    vietnameseName: string;
    is_vegetarian: boolean;
    price: number;
};

type AnimatedMenuItemProps = {
    item: MenuItemType;
    index: number;
};

function AnimatedMenuItem({ item, index }: AnimatedMenuItemProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.2, once: false });

    return (
        <div ref={ref} className="overflow-hidden">
            <motion.div
                initial={{ x: "100%" }}
                animate={inView ? { x: "0%" } : { x: "100%" }}
                transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 + index * 0.3 }}
                >
                    <MenuItem {...item} />
                </motion.div>
            </motion.div>
        </div>
    );
}

interface MenuProps {
    scrollRef: React.RefObject<HTMLDivElement>;
}

const Menu: React.FC<MenuProps> = ({ scrollRef }) => {
    const { scrollYProgress } = useScroll({ container: scrollRef, layoutEffect: false });

    const section1Opacity = useTransform(scrollYProgress, [0, 0.2], [1, 1]);
    const section2Y = useTransform(scrollYProgress, [0.2, 0.4], ["100vh", "0vh"]);
    const section2Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const section3Y = useTransform(scrollYProgress, [0.4, 0.6], ["100vh", "0vh"]);
    const section3Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    return (
        <div className="relative">
            <div className="sticky top-0 h-screen w-full">
                <motion.div className="absolute inset-0 z-10" style={{ opacity: section1Opacity }}>
                    <div className="relative w-full h-screen">
                        <img src="./BanhMi.png" alt="Banh Mi" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative flex flex-col text-white-500">
                            <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
                                <h1 className="font-circula circula-bold md:circula-extrabold lg:circula-black text-6xl md:text-7xl lg:text-10xl">Banh Mi</h1>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 md:px-8 lg:px-16">
                                    <p className="text-lg md:text-xl lg:text-2xl">Experience the traditional flavors of our signature Banh Mi sandwiches.</p>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <AnimatedMenuItem item={{ typeId: 1, title: "Tofu", vietnameseName: "Banh Mi Chay", is_vegetarian: true, price: 9.95 }} index={0} />
                                    <AnimatedMenuItem item={{ typeId: 2, title: "Pork", vietnameseName: "Banh Mi Thit", is_vegetarian: false, price: 11.95 }} index={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="absolute inset-0 z-20" style={{ y: section2Y, opacity: section2Opacity }}>
                    <div className="relative w-full h-screen">
                        <img src="./BanhMi.png" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative flex flex-col text-white-500">
                            <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
                                <h1 className="font-circula circula-bold md:circula-extrabold lg:circula-black text-6xl md:text-7xl lg:text-10xl">Pho</h1>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 md:px-8 lg:px-16">
                                    <p className="text-lg md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <AnimatedMenuItem item={{ typeId: 3, title: "Chicken", vietnameseName: "Banh Mi Ga", is_vegetarian: false, price: 10.95 }} index={0} />
                                    <AnimatedMenuItem item={{ typeId: 4, title: "Beef", vietnameseName: "Banh Mi Bo", is_vegetarian: false, price: 12.95 }} index={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="absolute inset-0 z-30" style={{ y: section3Y, opacity: section3Opacity }}>
                    <div className="relative w-full h-screen">
                        <img src="./BanhMi.png" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="relative flex flex-col text-white-500">
                            <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
                                <h1 className="font-circula circula-bold md:circula-extrabold lg:circula-black text-6xl md:text-7xl lg:text-10xl">Pho</h1>
                            </div>
                            <div className="flex flex-row">
                                <div className="px-4 md:px-8 lg:px-16">
                                    <p className="text-lg md:text-xl lg:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium!</p>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <AnimatedMenuItem item={{ typeId: 5, title: "Mushroom", vietnameseName: "Banh Mi Nam", is_vegetarian: true, price: 9.95 }} index={0} />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="h-[400dvh]"></div>
        </div>
    );
};

export default Menu;