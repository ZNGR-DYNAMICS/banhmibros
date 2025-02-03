interface LinkProps {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export default function NavLink({ href, className = '', children }: LinkProps) {

    return (
        <a
            href={href}
            className={`${className} flex flex-row gap-4 items-center hover:text-bmb-orange text-nowrap transition-colors duration-300 cursor-pointer`}
        >
            <h1>
                {children}
            </h1>
            <svg className='animate-nav-left-arrow' width="50" height="34" viewBox="0 0 50 34" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                    d="M31.0792 1.5207C31.8002 0.826434 32.9691 0.826434 33.69 1.5207L48.4593 15.7429C49.1802 16.4372 49.1802 17.5628 48.4593 18.2571L33.69 32.4793C32.9691 33.1736 31.8002 33.1736 31.0792 32.4793C30.3582 31.785 30.3582 30.6594 31.0792 29.9651L42.6968 18.7778H2.84615C1.82655 18.7778 1 17.9818 1 17C1 16.0182 1.82655 15.2222 2.84615 15.2222H42.6968L31.0792 4.03486C30.3582 3.34059 30.3582 2.21496 31.0792 1.5207Z"
                    fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                />
            </svg>
        </a>
    );
}