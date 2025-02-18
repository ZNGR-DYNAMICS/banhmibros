import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MenuItem from "./MenuItem";

type MenuItemType = {
    typeId: number;
    title: string;
    vietnameseName: string;
    is_vegetarian?: boolean;
    is_hot?: boolean;
    price: number;
};

type AnimatedMenuItemProps = {
    item: MenuItemType;
    index: number;
};

const AnimatedMenuItem: React.FC<AnimatedMenuItemProps> = ({ item, index }) => {
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
};

export default AnimatedMenuItem;