import Link from './Link';

export default function Footer(){

    return (
        <section className="relative flex flex-col p-8 md:p-16 bg-black-300 text-white-500">
            <div className="absolute top-0 left-0 h-0.5 w-full bg-gray-500"></div>
            <div className="flex flex-row justify-between md:justify-normal md:gap-16 lg:gap-32">
                <div className="hidden md:flex flex-col gap-1">
                    <p>Banh Mi Bros</p>
                    <p>Metzgergasse 15</p>
                    <p>9000 St.Gallen</p>
                    <a href="mailto:hello@banh-mi-bros.ch">hello@banh-mi-bros.ch</a>
                    <a href="tel:0784809223">078 480 92 23</a>
                </div>
                <div className="flex flex-col gap-1">
                    <Link href="/menu">Menu</Link>
                    <Link href="/order">Order</Link>
                    <Link href="/process">Process</Link>
                    <Link href="/location">Location</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="flex flex-col gap-1 items-end md:items-start">
                    <Link href="/instagram">Instagram</Link>
                    <Link href="/tiktok">TikTok</Link>
                    <Link href="/facebook">FaceBook</Link>
                </div>
                <div className='hidden md:flex ml-auto text-gray-500'>
                    <a href="https://zngr-dynamics.ch">Site by <span className="font-medium text-white-500">ZNGR</span></a>
                </div>
            </div>
            <div className="flex flex-row py-16 gap-16 justify-between md:justify-normal">
                <Link href="/legal" data-en="Imprint" data-de="Impressum">Imprint</Link>
                <Link href="/legal" data-en="Privacy Policy" data-de="Datenschutz">Privacy Policy</Link>
            </div>
            <div className='flex flex-row justify-between text-gray-500'>
                <p className='text-sm md:text-base'>Banh Mi Bros © 2024</p>
                <a className='md:hidden' href="https://zngr-dynamics.ch">Site by <span className="font-medium text-white-500">ZNGR</span></a>
            </div>
            <div>
                <h1 className='pt-8 text-6xl md:text-9xl xl:text-10xl circula-bold sm:circula-extrabold xl:circula-black text-black-900 drop-shadow-lg'>
                    Banh Mi Bros
                </h1>
            </div>
        </section>
    )
}