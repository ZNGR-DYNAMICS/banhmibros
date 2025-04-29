import { useScroll, useTransform } from "framer-motion";
import MenuSection from "./MenuSection";
import { useLayoutScroll } from "../../hooks/useLayoutScroll";
import { useTranslation } from "../../hooks/useTranslation";


const Menu: React.FC = () => {
    useTranslation();

    const scrollRef = useLayoutScroll();
    if (!scrollRef) {
        console.warn("Menu component: scrollRef not found in LayoutScrollContext. Is it rendered within Layout?");
        return null;
    }
    const { scrollYProgress } = useScroll({ container: scrollRef, layoutEffect: false });

    const section1Y = useTransform(scrollYProgress, [0, 0.8], ["0vh", "0vh"]);
    const section1Opacity = useTransform(scrollYProgress, [0, 0.8], [1, 1]);

    const section2Y = useTransform(scrollYProgress, [0.16, 0.24], ["100vh", "0vh"]);
    const section2Opacity = useTransform(scrollYProgress, [0.16, 0.24], [1, 1]);

    const section3Y = useTransform(scrollYProgress, [0.32, 0.40], ["100vh", "0vh"]);
    const section3Opacity = useTransform(scrollYProgress, [0.32, 0.40], [1, 1]);

    const section4Y = useTransform(scrollYProgress, [0.48, 0.56], ["100vh", "0vh"]);
    const section4Opacity = useTransform(scrollYProgress, [0.48, 0.56], [1, 1]);

    const section5Y = useTransform(scrollYProgress, [0.64, 0.72], ["100vh", "0vh"]);
    const section5Opacity = useTransform(scrollYProgress, [0.64, 0.72], [1, 1]);

    return (
        <div className="relative">
            <div className="sticky top-0 h-screen w-full overflow-y-hidden">
                <MenuSection
                    title={{ en: 'Appetizer', de: 'Vorspeise' }}
                    description={{ en: 'Whether spring-rolls, fried shrimps or crab balls. Vietnamese appetizers to get you going.', de: 'Ob panierte Frühlingsrollen, frittierte Crevetten oder Krabbenbällchen. Vietnamesische Vorspeisen, um dich in Stimmung zu bringen.'
                    }}
                    items={[
                        { typeId: 1, title: { en: 'Spring rolls with chicken', de: 'Frühlingsrollen mit Poulet' }, vietnameseName: "Cha Gio", is_vegetarian: false, price: 9.90 },
                        { typeId: 2, title: { en: 'Vietnamese summer rolls', de: 'Vietnamesische Sommerrollen' }, vietnameseName: "Goi Cuon", is_vegetarian: true, price: 8.90 },
                        { typeId: 3, title: { en: 'Fried vegetarian spring rolls', de: 'Vegetarische Frühlingsrollen' }, vietnameseName: "Cha Gio Chay", is_vegetarian: true, price: 6.90 },
                        { typeId: 4, title: { en: 'Batter-fried shrimps', de: 'Frittierte Crevetten' }, vietnameseName: "Tom Chien Bot", is_vegetarian: false, price: 9.90 },
                        { typeId: 5, title: { en: 'Batter-fried crab balls', de: 'Frittierte Krabbenbällchen' }, vietnameseName: "Cang Cua Chien", is_vegetarian: false, price: 9.90 },
                        { typeId: 6, title: { en: 'Vietnamese mango salad (Tofu or Shrimps)', de: 'Vietnamesischer Mangosalat (Tofu oder Crevetten)' }, vietnameseName: "Goi xoai Viet Nam", is_vegetarian: true, price: 8.90 },
                    ]}
                    imgSrc="./food/SpringRolls.png"
                    motionProps={{ style: { y: section1Y, opacity: section1Opacity } }}
                    mainScrollYProgress={scrollYProgress}
                    animationRange={[0.8, 0.16]}
                />
                <MenuSection
                    title={{ en: 'Banh Mi', de: 'Banh Mi' }}
                    description={{ 
                        en: 'Handmade sandwich featuring a crispy baguette filled with Vietnamese vegetarian pate, cucumber, pickled vegetable, coriander, a splash of Asian mayo, and your featured filling.', 
                        de: 'Handgemachtes Sandwich mit einem knusprigem Baguette, gefüllt mit Vietnamesischer Paste, Gurken, Koriander, ein Spritzer Asiatische Mayo und deiner lieblings Füllung.'
                    }}
                    items={[
                        { typeId: 7, title: { en: 'Tofu', de: 'Tofu' }, vietnameseName: "Banh Mi Chay", is_vegetarian: true, price: 11.90 },
                        { typeId: 8, title: { en: 'Oyster mushrooms', de: 'Austernpilze' }, vietnameseName: "Banh Mi Nam", is_vegetarian: true, price: 12.90 },
                        { typeId: 9, title: { en: 'Sautéed lemongrass-chili chicken breast', de: 'Gebratene Pouletbrust, Zitronengrass, Chili' }, vietnameseName: "Banh Mi Ga", is_vegetarian: false, is_hot: true, price: 11.90 },
                        { typeId: 10, title: { en: 'Black pepper sauce beef', de: 'Rindfleisch mit schwarzer Pfeffersauce' }, vietnameseName: "Banh Mi Bo", is_vegetarian: false, price: 13.90 },
                        { typeId: 11, title: { en: 'Grilled Char-siu pork', de: 'Gegrilltes Char siu Schweinefleisch' }, vietnameseName: "Banh Mi Xa Xiu", is_vegetarian: false, price: 12.90 },
                        { typeId: 12, title: { en: 'Grilled pork belly with sesame', de: 'Gegrillter Schweinebauch mit Sesam' }, vietnameseName: "Banh Mi Thit Nuong", is_vegetarian: false, price: 13.90 },
                        { typeId: 13, title: { en: 'Char-siu pork, grilled pork belly, beef', de: 'Char siu Schweinefleisch, gegrillter Schweinebauch, Rindfleisch' }, vietnameseName: "Banh Mi Special", is_vegetarian: false, price: 15.90 },
                    ]}
                    imgSrc="./food/EditedMovieBanhMi.png"
                    motionProps={{ style: { y: section2Y, opacity: section2Opacity } }}
                    mainScrollYProgress={scrollYProgress}
                    animationRange={[0.24, 0.32]}
                />
                <MenuSection
                    title={{ en: 'Pho', de: 'Pho' }}
                    description={{ 
                        en: 'The perfect dish for cold weather has arrived. A beloved traditional Vietnamese served with rice noodles, fresh herbs, and your featured ingredient.', 
                        de: 'Das perfekte Gericht für kaltes Wetter ist angekommen. Ein geliebtes traditionelles vietnamesisches Gericht mit Reisnudeln, frischen Kräutern und deiner gewählten Zutat.'}}
                    items={[
                        { typeId: 14, title: { en: 'Chicken', de: 'Poulet' }, vietnameseName: "Pho Ga", is_vegetarian: false, price: 19.90 },
                        { typeId: 15, title: { en: 'Tofu', de: 'Tofu' }, vietnameseName: "Pho Chay", is_vegetarian: true, price: 19.90 },
                        { typeId: 16, title: { en: 'Beef', de: 'Rindfleisch' }, vietnameseName: "Pho Bo", is_vegetarian: false, price: 21.90 },
                        { typeId: 17, title: { en: 'Beef & Chicken', de: 'Rindfleisch und Poulet' }, vietnameseName: "Pho Bo & Ga", is_vegetarian: false, price: 22.90 },
                    ]}
                    imgSrc="./food/MoviePho.png"
                    motionProps={{ style: { y: section3Y, opacity: section3Opacity } }}
                    mainScrollYProgress={scrollYProgress}
                    animationRange={[0.40, 0.48]}
                />
                <MenuSection
                    title={{ en: 'Bun', de: 'Bun' }}
                    description={{ 
                        en: 'Vietnamese rice noodles served with salad, cucumber, carrots, peanuts, fish sauce and your favorite addition.', 
                        de: 'Vietnamesische Reisnudeln serviert mit Salat, Gurke, Karotte, Erdnuss, Fischsauce und deiner lieblings Zutat.'}}
                    items={[
                        { typeId: 18, title: { en: 'Grilled pork strips', de: 'Gegrillte Schweinebauchstreifen'}, vietnameseName: "Bun Thit Nuong", is_vegetarian: false, price: 21.90 },
                        { typeId: 19, title: { en: 'Sautéed beef', de: 'Gebratenes Rindfleisch'}, vietnameseName: "Bu Bo Nam Bo", is_vegetarian: false, price: 23.90 },
                        { typeId: 20, title: { en: 'Vietnamese spring rolls', de: 'Vietnamesische Frühlingsrollen'}, vietnameseName: "Bun Nem 3 Pcs.", is_vegetarian: true, price: 20.90 },
                        { typeId: 21, title: { en: 'Rice noodles with tofu', de: 'Reisnudeln mit Tofu'}, vietnameseName: "Bun Dau", is_vegetarian: true, price: 19.90 },
                    ]}
                    imgSrc="./food/MovieBun.png"
                    motionProps={{ style: { y: section4Y, opacity: section4Opacity } }}
                    mainScrollYProgress={scrollYProgress}
                    animationRange={[0.56, 0.64]}
                />
                <MenuSection
                    title={{ en: 'Drinks', de: 'Drinks' }}
                    description={{ 
                        en: 'A set of fresh, self-made drinks from lemonade to iced coffee.', 
                        de: 'Hausgemachte Getränke, von Limonaden bis hin zu Kaffee.' }}
                    items={[
                        { typeId: 22, title: { en: 'Homemade lemonade from limes and mint', de: 'Hausgemachte Limo aus Limetten und Minze' }, vietnameseName: "Nuoc Chanh", is_vegetarian: false, price: 5.90 },
                        { typeId: 23, title: { en: 'Homemade lemonade from passion fruit, limes, mint', de: 'Hausgemachte Limo aus Passionsfrucht, Limetten, Minze' }, vietnameseName: "Nuoc Chanh Leo", is_vegetarian: false, price: 5.90 },
                        { typeId: 24, title: { en: 'Vietnamese drip coffee fropm Trung Nguyen with condensed milk', de: 'Vietnamesischer Filterkaffee von Trung Nguyen mit kondensierter Milch' }, vietnameseName: "Bro's Iced Coffee", is_vegetarian: false, price: 5.90 },
                    ]}
                    imgSrc="./food/BanhMiWithDrink.png"
                    motionProps={{ style: { y: section5Y, opacity: section5Opacity } }}
                    mainScrollYProgress={scrollYProgress}
                    animationRange={[0.72, 0.80]}
                />
            </div>
            <div className="h-[1200dvh]"></div>
        </div>
    );
};

export default Menu;
