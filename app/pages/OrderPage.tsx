import Order from '../components/Order/Order';
import Reviews from '../components/Reviews/Reviews';
import { useTranslation } from '../utils/translation';

const OrderPage: React.FC = () => {
    useTranslation();

    return (
        <div className='relative flex flex-col bg-white-500 text-black-500 pointer-events-auto'>
            <header className='flex flex-col gap-4 px-4 pt-16 md:px-8 md:pt-16 lg:px-16'>
                <h1 className="text-9xl circula-black break-normal" data-en="Order" data-de="Bestellen" />
            </header>
            <main>
                <Order />
                <Reviews />
            </main>
        </div>
    )
}

export default OrderPage;