import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
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
    scrollYProgress: any;
};

const AnimatedMenuItem: React.FC<AnimatedMenuItemProps> = ({ item, index, scrollYProgress }) => {
    const ref = useRef(null);
    const y = useTransform(scrollYProgress, [index * 0.1, (index + 1) * 0.1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [index * 0.1, (index + 1) * 0.1], [0, 1]);

    return (
        <motion.div ref={ref} className="overflow-hidden" style={{ y, opacity }}>
            <MenuItem {...item} />
        </motion.div>
    );
};

export default AnimatedMenuItem;