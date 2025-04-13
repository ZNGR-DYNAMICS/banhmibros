import { useState } from "react";
import Headline from "../Headline";
import AnimatedText from "../AnimatedText";
import ButtonTopRight from "../ButtonTopRight";
import Link from "../Link";
import { useTranslation } from "../../utils/translation";

const Contact: React.FC = () => {
    const [showMap, setShowMap] = useState(false);

    useTranslation();
    return (
        <div className="flex flex-col">
            <header className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 lg:gap-16 px-4 pt-16 md:px-8 md:pt-16 lg:px-16">
                { showMap ? (
                    <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=9.3750,47.4265,9.3755,47.4270&layer=mapnik&marker=47.426828,9.375273"
                        width="100%"
                        height="600px"
                        allowFullScreen
                    />
                ) : (
                    <div className="relative h-[600px] w-full">
                        <img
                            src="/business/Image-Map.png"
                            alt="Map preview"
                            className="w-full h-full object-cover"
                        />
                        <button className="absolute bottom-0 w-full flex gap-8 px-4 py-2 bg-white-500 border-y border-black-500 hover:bg-bmb-orange transition-colors duration-300"
                            onClick={() => setShowMap(true)}
                        >
                            <p>Open Interactive Map</p>
                            <p>By clicking this button, you agree to OpenStreetMap's cookie usage.</p>
                        </button>
                    </div>
                )}

                <div className="flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-1 md:items-end">
                        <h2 className="font-circula circula-bold text-3xl pb-2">Banh Mi Bros</h2>
                        <Link href='https://maps.app.goo.gl/AUqCkvhFoQK2G1iX7' className='hover:text-bmb-orange'>Metzgergasse 15</Link>
                        <p>9000 St.Gallen</p>
                        <Link href="mailto:hello@banh-mi-bros.ch" className='hover:text-bmb-orange'>hello@banh-mi-bros.ch</Link>
                        <Link href="tel:0784809223" className='hover:text-bmb-orange'>078 480 92 23</Link>
                    </div>
                    <div className="flex flex-col gap-1 md:items-end">
                        <h2 className='font-circula circula-bold text-3xl pb-2' data-en="Opening Hours" data-de="Öffnungszeiten"></h2>
                        <div className='flex justify-between gap-8 pb-1 border-b border-black-500 text-nowrap'>
                            <p data-en="Monday - Thursday" data-de="Montag - Donnerstag" />
                            <p>11.00 - 21.00</p>
                        </div>
                        <div className='w-full flex justify-between gap-4 py-1 border-b border-black-500'>
                        <p data-en="Friday" data-de="Freitag" />
                            <p>11.00 - 21.30</p>
                        </div>
                        <div className='w-full flex justify-between gap-4 py-1 border-b border-black-500'>
                            <p data-en="Saturday" data-de="Samstag" />
                            <p>11.30 - 21.30</p>
                        </div>
                        <div className='w-full flex justify-between gap-4 pt-1'>
                            <p data-en="Sunday" data-de="Sonntag" />
                            <p data-en="Closed" data-de="Geschlossen" />
                        </div>
                    </div>
                </div>
                
            </header>
            <div className="px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-32">
                <Headline>
                    <AnimatedText data-en="Only one minute from the Marktplatz bus stop." data-de="Nur eine Minute von der Marktplatz Bushaltestelle entfernt." />
                </Headline>
            </div>
            <div className="flex flex-col bg-black-500 gap-8 lg:gap-16 px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-32">
                <Headline>
                    <AnimatedText transitionColor="#FFF8EE" data-en="Or simply order online and enjoy at home." data-de="Oder bestell einfach online und geniess Banh Mis von Zuhause aus." />
                </Headline>
                <div className="w-fit flex">
                    <ButtonTopRight color="white-500">
                        Order Online
                    </ButtonTopRight>
                </div>
            </div>
        </div>
    )
}

export default Contact;