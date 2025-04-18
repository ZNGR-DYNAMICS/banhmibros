import Link from './Link';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer(){
    useTranslation();
    return (
        <section className="relative flex flex-col p-8 md:p-16 gap-16 bg-black-300 text-white-500">
            <div className="flex flex-row justify-between md:justify-normal md:gap-16 lg:gap-32">
                <div className="hidden md:flex flex-col gap-1">
                    <p>Banh Mi Bros</p>
                    <Link href='https://maps.app.goo.gl/AUqCkvhFoQK2G1iX7' className='hover:text-bmb-orange'>Metzgergasse 15</Link>
                    <p>9000 St.Gallen</p>
                    <Link href="mailto:hello@banh-mi-bros.ch" className='hover:text-bmb-orange'>hello[at]banh-mi-bros.ch</Link>
                    <Link href="tel:0784809223" className='hover:text-bmb-orange'>078 480 92 23</Link>
                </div>
                <div className="flex flex-col gap-1">
                    <Link href="/menu">Menu</Link>
                    <Link href="/order" data-en='Order' data-de='Bestellen'>Order</Link>
                    <Link href="/contact" data-en='Contact' data-de='Kontakt'>Contact</Link>
                </div>
                <div className="flex flex-col gap-1 items-end md:items-start">
                    <Link href="/instagram">Instagram</Link>
                    <Link href="/tiktok">TikTok</Link>
                    <Link href="/facebook">FaceBook</Link>
                </div>
                <div className='hidden md:flex ml-auto text-gray-500'>
                    <div className='flex h-fit w-fit'>
                        <a className='hover:[text-shadow:_0_1px_2px_#FFF8EE] transition-all duration-300 hover:text-white-500' href="https://zngr-dynamics.ch">Site by <span className='font-medium text-white-500'>ZNGR</span></a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col max-w-[320px] border-white-500'>
                <p className='pb-4 font-semibold' data-en="Opening Hours" data-de="Öffnungszeiten"></p>
                <div className='flex justify-between pb-1 border-b'>
                    <p data-en="Monday - Thursday" data-de="Montag - Donnerstag" />
                    <p>11.00 - 21.00</p>
                </div>
                <div className='flex justify-between py-1 border-b'>
                <p data-en="Friday" data-de="Freitag" />
                    <p>11.00 - 21.30</p>
                </div>
                <div className='flex justify-between py-1 border-b'>
                    <p data-en="Saturday" data-de="Samstag" />
                    <p>11.30 - 21.30</p>
                </div>
                <div className='flex justify-between pt-1'>
                    <p data-en="Sunday" data-de="Sonntag" />
                    <p data-en="Closed" data-de="Geschlossen" />
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between gap-8 md:gap-16 lg:gap-32'>
                <div className="flex gap-16 justify-between md:justify-normal">
                    <Link href="/legal" data-en="Imprint" data-de="Impressum">Imprint</Link>
                    <Link href="/legal#privacy" data-en="Privacy Policy" data-de="Datenschutz">Privacy Policy</Link>
                </div>
                <div className='flex justify-between text-gray-500'>
                    <p className='pt-[0.125rem] text-sm md:text-base'>Banh Mi Bros © 2025</p>
                    <a className='md:hidden hover:[text-shadow:_0_1px_2px_#FFF8EE] transition-all duration-300 hover:text-white-500' href="https://zngr-dynamics.ch">Site by <span className='font-medium text-white-500'>ZNGR</span></a>
                </div>
            </div>
            <div>
                <h1 className='text-6xl md:text-9xl xl:text-10xl circula-bold sm:circula-extrabold xl:circula-black text-black-900'>
                    Banh Mi Bros
                </h1>
            </div>
        </section>
    )
}