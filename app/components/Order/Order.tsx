import Headline from "../Headline";
import AnimatedText from "../AnimatedText";
import OrderButtons from "./OrderButtons";

const Order: React.FC = () => {

    return (
        <main>
            <Headline>
                <AnimatedText
                    data-en="Order your favorite Banh Mi takeaway or have it delivered right to your doorstep."
                    data-de="Bestell dein Banh Mi takeaway oder lass es direkt nach Hause liefern."
                /> 
            </Headline>
            <div className='px-4 pb-16 md:px-8 md:pb-16 lg:px-16 lg:pb-32'>
                <OrderButtons />
            </div>
        </main>
    )
}

export default Order;