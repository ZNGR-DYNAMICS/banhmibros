interface MenuItemProps {
    typeId: number;
    title: { en: string, de: string };
    vietnameseName: string;
    is_vegetarian?: boolean;
    is_hot?: boolean;   
    price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, vietnameseName, is_vegetarian = false, is_hot = false, price }) => {
    console.log(is_vegetarian);
    return (
        <div className="relative">
            <div className='min-w-full lg:min-w-[320px] xl:min-w-[480px] flex py-4 font-poppins'>
                <div className='flex flex-col flex-1'>
                    <div className='inline-flex gap-2 font-medium text-lg md:text-xl' >
                        {vietnameseName}
                        <div className='inline-flex'>
                            {is_vegetarian == true
                                ? <svg width="20" height="20" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3C5.99564 2.998 6.58018 2.8811 7.5 2.5C8.40135 2.12656 9.17263 1.41237 9.61135 0.946268C9.76294 0.785218 10.0425 0.865537 10.0599 1.08603C10.1969 2.83119 10.2988 8.02588 7 10.5C6.29436 10.8876 5.80503 11.0099 5 11C2.79103 10.9727 1 9.20914 1 7C1 4.79086 2.79086 3 5 3Z" fill="#498467"/>
                                    <path d="M2.43555 10.0586L1.70669 9.26348L0.672486 10.3232C0.576886 10.4212 0.577842 10.5778 0.674631 10.6746L1.07279 11.0728C1.17059 11.1706 1.32922 11.1704 1.42678 11.0724L2.43555 10.0586Z" fill="#498467"/>
                                </svg>
                                : ''
                            }
                            {is_hot == true
                                ? <svg width="20" height="20" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.40611 9.08451C5.4482 11.3259 2.18729 13.7764 0.197918 15.1826C-0.1962 15.4612 0.0443733 16.0843 0.51515 15.9905C3.79554 15.3365 10.2717 13.7547 13.9697 10.9014C16.3245 9.08451 17.2163 7.26758 17.2163 4.54218C17.2163 3.74893 16.5919 3.01452 16.3245 2.72542C15.7895 2.14714 14.8416 1.89041 13.9697 1.89041C13.1634 1.89041 12.4494 2.1367 11.9234 2.63096C11.5962 2.93848 10.8267 4.36745 10.0816 5.45064C9.08231 6.90339 9.06337 7.18732 7.40611 9.08451Z" fill="#B3001B"/>
                                    <path d="M15.4326 3.63386C14.9018 3.09733 14.5408 1.90778 14.5408 1.90778L16.3245 1.81693L18.1082 0L19 0.908466L17.2163 2.7254V4.54218C17.2163 4.54218 15.9855 4.19264 15.4326 3.63386Z" fill="#498467"/>
                                </svg>
                                : ''
                            }
                        </div>
                    </div>
                    <div className='font-light text-base md:text-lg' data-en={title.en} data-de={title.de}>
                        {title.en}
                    </div>
                </div>
                <div className='flex items-end text-base md:text-lg'>
                    {price.toFixed(2)}
                </div>
            </div>
            <div className=''>
                <svg width="100%" height="1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H2400.001" stroke="currentColor" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    )
}

export default MenuItem;