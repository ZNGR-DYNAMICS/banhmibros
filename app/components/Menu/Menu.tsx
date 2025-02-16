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
        <div ref={ref} className="overflow-hidden background-blur-[128px]">
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
    const menuItems: MenuItemType[] = [
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
    ];

    return (
        <section className="relative w-full min-h-dvh text-white-500 bg-black-500">
            {/* Sticky container for the background image (parallax effect) */}
            <div className="sticky top-0 w-full h-screen">
                <img
                    src="./BanhMi.png"
                    alt="Banh Mi"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Static text content (heading and paragraph) */}
            <div className="relative -mt-[100dvh] flex flex-col md:flex-row z-10">
                <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
                <h1 className="font-circula text-8xl lg:text-9xl circula-extrabold">
                    Banh Mi
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                    Quisque euismod orci in ligula hendrerit, in fermentum libero suscipit.
                </p>
                </div>

                {/* Container for animated MenuItems */}
                <div className="flex flex-col">
                {menuItems.map((item, index) => (
                    <AnimatedMenuItem key={item.typeId} item={item} index={index} />
                ))}
                </div>
            </div>
        </section>
    );
}