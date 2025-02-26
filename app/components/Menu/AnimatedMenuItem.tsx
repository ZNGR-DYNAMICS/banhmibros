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
    scrollProgress: any;
};

const AnimatedMenuItem: React.FC<AnimatedMenuItemProps> = ({ item, index, scrollProgress }) => {
    const y = useTransform(scrollProgress,
        [index * 0.15, index * 0.15 + 0.3],
        ["50%", "0%"]
    );

    const opacity = useTransform(scrollProgress,
        [index * 0.15, index * 0.15 + 0.3],
        [0, 1]
    );

    return (
        <motion.div style={{ y, opacity }}>
            <MenuItem {...item} />
        </motion.div>
    );
};

export default AnimatedMenuItem;