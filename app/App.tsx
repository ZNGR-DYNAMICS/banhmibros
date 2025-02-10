import { useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './App.css';
import Headline from './components/Headline';
import Menu from './components/Menu';
import DatabaseViewer from './DatabaseViewer';
import Navigation from './components/Navigation';
import AnimatedText from './AnimatedText';
import Button from './components/Button';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer';
import NavLink from './components/NavLink';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [navHover, setNavHover] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        onSwipedRight: () => setIsOpen(true),
        preventScrollOnSwipe: true,
        trackTouch: true,
    });

    return (
        <div {...swipeHandlers} className="relative h-dvh overflow-hidden">
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            <div
                ref={scrollRef}
                className={`absolute inset-0 transition-transform duration-500 overflow-hidden
                ${ isOpen ? 'translate-x-full' : '' }
                overflow-y-auto scroll-smooth`}
                style={{ contain: 'strict' }}
            >
                <header className='flex flex-col min-h-dvh bg-cover bg-center gap-8 p-4 sm:p-8 text-white-500 transition-colors'
                    style={{ backgroundImage: "url('./BanhMi.png')" }}>
                    <div className='flex'>
                        <button
                            className="block mt-4 sm:mt-0 transition duration-200 hover:text-bmb-orange"
                            onClick={() => setIsOpen((prev) => !prev)}
                            onMouseEnter={() => setNavHover(true)}
                            onMouseLeave={() => setNavHover(false)}
                            onFocus={() => setNavHover(true)}
                            >
                            <svg
                                width="32"
                                height="12"
                                viewBox="0 0 32 12"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 0H32V2H0V0Z" />
                                <path
                                    d="M0 10H24V12H0V10Z"
                                    className={`transition-transform duration-300 origin-left ${
                                        navHover ? 'scale-x-133' : 'scale-x-100'
                                    }`}
                                />
                            </svg>
                        </button>
                    </div>
                    <nav className='flex flex-col xl:gap-4 text-8xl xl:text-9xl font-circula circula-bold sm:circula-extrabold xl:circula-black'>
                        <NavLink href="/menu">Menu</NavLink>
                        <NavLink href="/banhmi">Banh Mi</NavLink>
                        <NavLink href="/order">Order</NavLink>
                        <NavLink href="/socials">Socials</NavLink>
                    </nav>
                    <div className='flex flex-wrap items-center hover:text-bmb-orange transition-colors duration-300 my-0 sm:my-4 xl:my-8'>
                        <a className="inline-flex items-center gap-4 sm:gap-8" href="#test">
                            <h2 className="flex flex-wrap flex-1 font-extrabold text-3xl sm:text-4xl xl:text-5xl">
                                AUTHENTIC VIETNAMESE STREETFOOD
                            </h2>
                            <svg className='flex-shrink-0 animate-arrow-down mr-8' width="32" height="48" viewBox="0 0 32 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M31.0102 29.9551C31.6835 30.6614 31.6835 31.8064 31.0102 32.5127L17.219 46.9805C16.5458 47.6868 15.4542 47.6868 14.781 46.9805L0.989768 32.5127C0.316542 31.8064 0.316542 30.6614 0.989768 29.9551C1.663 29.2489 2.75451 29.2489 3.42774 29.9551L14.2761 41.3357V2.29827C14.2761 1.29948 15.0479 0.489796 16 0.489796C16.9521 0.489796 17.7239 1.29948 17.7239 2.29827V41.3357L28.5723 29.9551C29.2455 29.2489 30.337 29.2489 31.0102 29.9551Z"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.7912 2.29827C13.7912 1.04656 14.7631 0 16 0C17.2369 0 18.2088 1.04656 18.2088 2.29827V40.1209L28.223 29.6154C29.087 28.7091 30.4955 28.7091 31.3595 29.6154C32.2135 30.5113 32.2135 31.9565 31.3595 32.8524L17.5682 47.3203C16.7043 48.2266 15.2957 48.2266 14.4318 47.3203L0.640521 32.8524C-0.213507 31.9565 -0.213508 30.5113 0.640522 29.6154C1.50447 28.7091 2.91304 28.7091 3.77699 29.6154L13.7912 40.1209V2.29827ZM16 0.979592C15.3328 0.979592 14.7609 1.5524 14.7609 2.29827V41.3357C14.7609 41.5355 14.6408 41.7152 14.4574 41.7899C14.274 41.8646 14.064 41.8193 13.9268 41.6754L3.07849 30.2949C2.59598 29.7887 1.82153 29.7887 1.33901 30.2949C0.846592 30.8114 0.84659 31.6564 1.33902 32.173L15.1303 46.6408C15.6128 47.147 16.3872 47.147 16.8697 46.6408L30.661 32.173C31.1534 31.6564 31.1534 30.8114 30.661 30.2949C30.1785 29.7887 29.404 29.7887 28.9215 30.2949L18.0732 41.6754C17.936 41.8193 17.726 41.8646 17.5426 41.7899C17.3592 41.7152 17.2391 41.5355 17.2391 41.3357V2.29827C17.2391 1.5524 16.6672 0.979592 16 0.979592Z"
                                />
                            </svg>
                        </a>
                    </div>
                </header>
                <main className='bg-white-500 flex flex-col gap-16 lg:gap-16' id='test'>
                    <Headline>
                        <AnimatedText scrollRef={scrollRef}
                            data-en="Authentic Vietnamese Streetfood has come to St.Gallen. Pick up your Banh Mi in store or order right to your doorstep."
                            data-de="Banh Mis gibts nun auch in St.Gallen. Hol's dir im Store, oder lass es direkt nach Hause liefern."
                        />
                        {/*<h2 data-en="Authentic Vietnamese Streetfood has come to St.Gallen." data-de="Banh Mis gibts nun auch in St.Gallen." />
                        <h2 data-en="Pick up your Banh Mi in store or order right to your doorstep." data-de="Hol's dir im Store, oder lass es direkt nach Hause liefern." />*/}
                    </Headline>
                    <section>
                        <Menu />
                    </section>
                    <div className='px-4 md:px-8 lg:px-16 font-poppins font-semibold text-5xl md:text-6xl lg:text-7xl text-black-500'>
                        <h2>
                            Quality before quantity. 
                        </h2>
                        <Button width='w-24'>
                            Small
                        </Button>
                        <h2>
                            We hand-craft your Banh Mi only with the best ingredients. 
                        </h2>
                    </div>
                    <DatabaseViewer />
                    <div>
                        <Reviews scrollRef={scrollRef}/>
                    </div>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </div>
    );
}

export default App;