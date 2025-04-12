import Contact from "../components/Contact/Contact";

const ContactPage: React.FC = () => {
    return (
        <div className="relative flex flex-col bg-white-500 text-black-500 pointer-events-auto">
            <header className='flex flex-col gap-4 px-4 pt-16 md:px-8 md:pt-16 lg:px-16'>
                <h1
                    className="text-9xl circula-black break-normal"
                    data-en="Contact" data-de="Kontakt"
                />
            </header>
            <main>
                <Contact />
            </main>
        </div>
    )
}

export default ContactPage;