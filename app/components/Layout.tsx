import React, { useState, useRef, ReactNode, isValidElement, Children } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useSwipeable } from 'react-swipeable';
import Menu from './Menu/Menu';

interface LayoutProps {
    children: ReactNode;
    navColor?: string;
}

const defaultNavColor = 'text-white-500';

const Layout: React.FC<LayoutProps> = ({ children, navColor = defaultNavColor }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navHover, setNavHover] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        onSwipedRight: () => setIsOpen(true),
        preventScrollOnSwipe: true,
        trackTouch: true,
    })

    return (
        <div {...swipeHandlers} className="relative h-dvh overflow-hidden scroll-smooth">
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            <div
                ref={scrollRef}
                className={`absolute inset-0 transition-transform duration-500 overflow-hidden
                ${ isOpen ? 'translate-x-full' : '' }
                overflow-y-auto scroll-smooth`}
                style={{ contain: 'strict' }}
            >
                <div className='relative pointer-events-none'>
                    <nav className={`absolute z-10 top-0 left-0 flex gap-8 p-4 sm:p-8 ${navColor} transition-colors pointer-events-auto`}>
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
                    </nav>
                    <div className='pointer-events-auto'>
                        {Children.map(children, child => {
                            if (isValidElement(child) && child.type === Menu) {
                                return React.cloneElement(child, { scrollRef: scrollRef });
                            }
                            return child;
                        })}
                        <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-500"></div> {/* Line */}
                    </div>
                </div>
                <footer className='sticky bottom-0 left-0 w-full -z-10 pointer-events-auto'>
                    <Footer />
                </footer>
            </div>
        </div>
    )
}

export default Layout;