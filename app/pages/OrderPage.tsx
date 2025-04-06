import Headline from "../components/Headline";
import AnimatedText from "../components/AnimatedText";
import ButtonTopRight from "../components/ButtonTopRight";
import { useTranslation } from '../utils/translation';
import icon_justeat from '../assets/icon-justeat.svg';
import icon_ubereats from '../assets/icon-ubereats.svg';

type OrderPageProps = {
    scrollRef: React.RefObject<HTMLDivElement>;
};

const OrderPage: React.FC<OrderPageProps> = ({ scrollRef }) => {
    useTranslation();
    return (
        <div className='relative h-dvh flex flex-col bg-white-500 text-black-500 pointer-events-auto'>
            <header className='flex flex-col px-4 pt-16 md:px-8 md:pt-16 lg:px-16 gap-4'>
                <h1 className="text-9xl circula-black break-normal" data-en="Order" data-de="Bestellen" />
            </header>
            <main>
                <Headline>
                   <AnimatedText scrollRef={scrollRef}
                        data-en="Order your favorite Banh Mi takeaway or have it delivered right to your doorstep."
                        data-de="Bestell dein Banh Mi takeaway oder lass es direkt nach Hause liefern."
                   /> 
                </Headline>
                <div className="flex flex-col gap-4 md:gap-8 lg:gap-16">
                    <div className="flex justify-center gap-4 md:gap-8 lg:gap-16">
                        <a href="https://www.just-eat.ch/en/menu/banh-mi-bros" target="_blank">
                            <ButtonTopRight>
                                <div className="flex gap-6">
                                    <img src={icon_justeat} alt="Order Just Eat" />
                                    Just Eat
                                </div>
                            </ButtonTopRight>
                        </a>
                        <a href="https://www.ubereats.com/ch/store/banh-mi-bros/hE1gOaEwTQqXArbe8VL7lg" target="_blank">
                            <ButtonTopRight>
                                <div className="flex gap-6">
                                    <img src={icon_ubereats} alt="Order Uber Eats" />
                                    Uber Eats
                                </div>
                            </ButtonTopRight>
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <a href="https://www.just-eat.ch/en/menu/banh-mi-bros?shipping=pickup" target="_blank">
                            <ButtonTopRight>
                                <div className="flex gap-6">
                                    <img src={icon_justeat} alt="Takeaway Just Eat" />
                                    Takeaway
                                </div>
                            </ButtonTopRight>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default OrderPage;