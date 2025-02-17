import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MenuItem from "./MenuItem";

const horizontalVariants = {
    hidden: { x: "100%" },
    visible: (custom: number) => ({
        x: "0%",
        transition: { duration: 1, ease: "easeOut", delay: custom * 0.3 },
    }),
};

const verticalVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut", delay: 0.2 + custom * 0.3 },
    }),
};

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
                variants={horizontalVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={index}
            >
                <motion.div
                    variants={verticalVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    custom={index}
                >
                    <MenuItem {...item} />
                </motion.div>
            </motion.div>
        </div>
    );
}
export default function Menu() {
    // Demonstration Menu items
    /*const menuItems: MenuItemType[] = [
        {
            typeId: 1,
            title: "Tofu",
            vietnameseName: "Banh Mi Chay",
            is_vegetarian: true,
            price: 9.95,
        },
        {
            typeId: 2,
            title: "Pork",
            vietnameseName: "Banh Mi Thit",
            is_vegetarian: false,
            price: 11.95,
        },
        {
            typeId: 3,
            title: "Chicken",
            vietnameseName: "Banh Mi Ga",
            is_vegetarian: false,
            price: 10.95,
        },
    ];*/

    return (
        // Outer section takes up the full viewport and allows vertical scrolling.
        <section className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Section 1: Banh Mi Classics */}
            <div className="relative w-full h-screen snap-start">
                <img
                    src="./BanhMi.png"
                    alt="Banh Mi Classics"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex flex-col md:flex-row h-full text-white">
                    {/* Title and Description */}
                    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16 flex-1">
                        <h1 className="font-circula text-5xl lg:text-6xl">Banh Mi Classics</h1>
                        <p className="text-lg md:text-xl lg:text-2xl">
                            Experience the traditional flavors of our signature Banh Mi sandwiches.
                        </p>
                    </div>
                    {/* Menu Items */}
                    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16 flex-1">
                        <AnimatedMenuItem
                        item={{
                            typeId: 1,
                            title: "Tofu",
                            vietnameseName: "Banh Mi Chay",
                            is_vegetarian: true,
                            price: 9.95,
                        }}
                        index={0}
                        />
                        <AnimatedMenuItem
                        item={{
                            typeId: 2,
                            title: "Pork",
                            vietnameseName: "Banh Mi Thit",
                            is_vegetarian: false,
                            price: 11.95,
                        }}
                        index={1}
                        />
                    </div>
                </div>
            </div>
        
            {/* Section 2: Modern Twists */}
            <div className="relative w-full h-screen snap-start">
                <img
                    src="./BanhMi.png"
                    alt="Modern Twists"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex flex-col md:flex-row h-full text-white">
                    {/* Title and Description */}
                    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16 flex-1">
                        <h1 className="font-circula text-5xl lg:text-6xl">Modern Twists</h1>
                        <p className="text-lg md:text-xl lg:text-2xl">
                        Discover our innovative takes on the classic, with fresh ingredients and bold flavors.
                        </p>
                    </div>
                    {/*Menu Items*/}
                    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16 flex-1">
                        <AnimatedMenuItem
                        item={{
                            typeId: 3,
                            title: "Chicken",
                            vietnameseName: "Banh Mi Ga",
                            is_vegetarian: false,
                            price: 10.95,
                        }}
                        index={0}
                        />
                        <AnimatedMenuItem
                        item={{
                            typeId: 4,
                            title: "Beef",
                            vietnameseName: "Banh Mi Bo",
                            is_vegetarian: false,
                            price: 12.95,
                        }}
                        index={1}
                        />
                    </div>
                </div>
            </div>
        
            {/* Section 3: Vegan Delights */}
            <div className="relative w-full h-screen snap-start">
                <img
                    src="./BanhMi.png"
                    alt="Vegan Delights"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-10 flex flex-col md:flex-row h-full text-white">
                    {/* Title and Description */}
                    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16 flex-1">
                        <h1 className="font-circula text-5xl lg:text-6xl">Vegan Delights</h1>
                        <p className="text-lg md:text-xl lg:text-2xl">
                        Savor our delicious vegan options that bring out the best in flavor and texture.
                        </p>
                    </div>
                    {/*Menu Items*/}
                    <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16 flex-1">
                        <AnimatedMenuItem
                        item={{
                            typeId: 5,
                            title: "Mushroom",
                            vietnameseName: "Banh Mi Nam",
                            is_vegetarian: true,
                            price: 9.95,
                        }}
                        index={0}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}