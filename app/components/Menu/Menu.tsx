import { useScroll, useTransform } from "framer-motion";
import MenuSection from "./MenuSection";

type MenuProps = {
    scrollRef: React.RefObject<HTMLDivElement>;
};

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
                <MenuSection
                    title="Banh Mi"
                    description="Experience the traditional flavors of our signature Banh Mi sandwiches."
                    items={[
                        { typeId: 1, title: "Tofu", vietnameseName: "Banh Mi Chay", is_vegetarian: true, price: 9.95 },
                        { typeId: 2, title: "Pork", vietnameseName: "Banh Mi Thit", is_vegetarian: false, price: 11.95 }
                    ]}
                    imgSrc="./BanhMi.png"
                    motionProps={{ style: { opacity: section1Opacity } }}
                />
                <MenuSection
                    title="Pho"
                    description="Lorem ipsum dolor sit amet."
                    items={[
                        { typeId: 3, title: "Chicken", vietnameseName: "Banh Mi Ga", is_vegetarian: false, price: 10.95 },
                        { typeId: 4, title: "Beef", vietnameseName: "Banh Mi Bo", is_vegetarian: false, price: 12.95 }
                    ]}
                    imgSrc="./BanhMi.png"
                    motionProps={{ style: { y: section2Y, opacity: section2Opacity } }}
                />
                <MenuSection
                    title="Pho"
                    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam, praesentium!"
                    items={[
                        { typeId: 5, title: "Mushroom", vietnameseName: "Banh Mi Nam", is_vegetarian: true, price: 9.95 }
                    ]}
                    imgSrc="./BanhMi.png"
                    motionProps={{ style: { y: section3Y, opacity: section3Opacity } }}
                />
            </div>
            <div className="h-[400dvh]"></div>
        </div>
    );
};

export default Menu;
