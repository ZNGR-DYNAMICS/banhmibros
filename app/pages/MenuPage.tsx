import Menu from "../components/Menu/Menu";
import ButtonTopRight from "../components/ButtonTopRight";
import Headline from "../components/Headline";

const MenuPage: React.FC = () => {

    return (
        <div className="bg-white-500 pt-12 md:pt-12 lg:pt-12">
            <div>
                <Menu />
            </div>
            <div className="w-full flex flex-col p-4 md:p-8 lg:p-16 py-8 md:py-16 lg:py-32">
                <div className="flex justify-center pb-4 md:pb-8 lg:pb-0">
                    <Headline>
                        <h2 className="font-poppins font-semibold text-4xl md:text-5xl lg:text-7xl text-black-500" data-en="View the full menu as pdf below." data-de="Das gesamte Menu findest du unten als pdf."></h2>
                    </Headline>
                </div>
                <div className="flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 lg:gap-16 pt-4 md:pt-8 lg:pt-16">
                    <a href="/order" target="_blank">
                        <ButtonTopRight>Order Online</ButtonTopRight>
                    </a>
                    <a href="/BMB-MenuCombined.pdf" target="_blank">
                        <ButtonTopRight>Open Menu Pdf</ButtonTopRight>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MenuPage;