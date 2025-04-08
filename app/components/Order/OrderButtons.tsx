import ButtonTopRight from "../ButtonTopRight";
import icon_justeat from '../../assets/icon-justeat.svg';
import icon_ubereats from '../../assets/icon-ubereats.svg';

const OrderButtons: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-16">
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-16">
                <a href="https://www.just-eat.ch/en/menu/banh-mi-bros" target="_blank">
                    <ButtonTopRight>
                        <div className="flex gap-4 lg:gap-6">
                            <img src={icon_justeat} alt="Order Just Eat" />
                            Just Eat
                        </div>
                    </ButtonTopRight>
                </a>
                <a href="https://www.ubereats.com/ch/store/banh-mi-bros/hE1gOaEwTQqXArbe8VL7lg" target="_blank">
                    <ButtonTopRight>
                        <div className="flex gap-4 lg:gap-6">
                            <img src={icon_ubereats} alt="Order Uber Eats" />
                            Uber Eats
                        </div>
                    </ButtonTopRight>
                </a>
            </div>
            <div className="flex flex-col md:flex-row justify-center">
                <a href="https://www.just-eat.ch/en/menu/banh-mi-bros?shipping=pickup" target="_blank">
                    <ButtonTopRight>
                        <div className="flex gap-4 lg:gap-6">
                            <img src={icon_justeat} alt="Takeaway Just Eat" />
                            Takeaway
                        </div>
                    </ButtonTopRight>
                </a>
            </div>
        </div>
    )
}

export default OrderButtons;