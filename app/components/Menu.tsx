export default function Menu() {

    return (
        <section className="relative w-full min-h-dvh text-white-500 bg-black-500">
            {/* Sticky container for the background image */}
            <div className="sticky top-0 w-full h-screen">
                <img
                    src="./BanhMi.png"
                    alt="Banh Mi"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Text content that scrolls over the image */}
            <div className="relative -mt-[100dvh] flex flex-col md:flex-row">
                <div className="flex flex-col gap-4 p-4 md:p-8 lg:p-16">
                    <h1 className="font-circula text-8xl lg:text-9xl circula-extrabold">
                        Banh Mi
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                        Quisque euismod orci in ligula hendrerit, in fermentum libero suscipit.
                    </p>
                </div>
                <div>
                    <div className='flex bg-[#ffffff00] backdrop-blur-[20px]'>
                        <div>
                            title
                            <svg />
                        </div>
                        <div>
                            Vietnamese Name
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}