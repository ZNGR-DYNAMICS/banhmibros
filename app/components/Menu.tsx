import BanhMi from '../../public/BanhMi.png';

export default function Menu() {

    return (
        <section className="relative w-full min-h-dvh text-white bg-black-500">
            {/* Sticky container for the background image */}
            <div className="sticky top-0 w-full h-screen">
                <img
                    src={BanhMi}
                    alt="Banh Mi"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Text content that scrolls over the image */}
            <div className="relative -mt-[100dvh]">
                <div className="flex flex-col justify-center items-center p-4 md:p-8 lg:p-16 text-center">
                    <h1 className="font-circula text-3xl md:text-5xl lg:text-9xl mb-8">
                        Banh Mi
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                        Quisque euismod orci in ligula hendrerit, in fermentum libero suscipit.
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl mt-8">
                        More text goes here... Keep adding content to make it long enough to scroll.
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus doloribus eaque, 
                        magni debitis eveniet aliquam doloremque expedita nam laboriosam sit ea officia laborum 
                        vel sed sunt veritatis? Modi suscipit officia, eum velit aut dolores consequatur earum 
                        enim animi. Saepe vel perferendis exercitationem perspiciatis veritatis velit aspernatur 
                        beatae consectetur est nihil. Similique odio cumque, laboriosam ea neque nesciunt natus? 
                        Excepturi sequi, architecto praesentium ad rerum molestiae doloribus earum necessitatibus 
                        officiis reiciendis aliquid id explicabo debitis quos assumenda dignissimos.
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nisi aliquid rerum quisquam, 
                        neque nam delectus, harum aperiam quod laudantium ea similique. Eveniet officiis illum rem 
                        iure praesentium omnis modi obcaecati eligendi est quae error tempora deserunt maxime, et 
                        doloribus blanditiis repellat cumque culpa minus. Alias non beatae consectetur totam rem 
                        adipisci, praesentium quidem, explicabo quod ducimus illo omnis, doloribus assumenda. 
                        Harum, vel voluptatibus. Dolores at est architecto consequuntur. Voluptatibus, omnis. 
                        Dolorem adipisci veritatis rerum voluptates exercitationem, iste aliquam ea illum enim 
                        consectetur cumque? Iusto deserunt alias sequi, quae reiciendis quisquam cupiditate 
                        nesciunt quis molestias? Voluptatem laborum quod explicabo iure?
                        <br /><br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non consequatur neque vero rerum 
                        obcaecati corrupti a sit velit aspernatur! Quo ipsa corrupti velit quisquam necessitatibus 
                        inventore eos atque magni molestiae cum provident, accusantium nihil ipsam omnis et, sed ea, 
                        dolores eligendi laborum nemo. Nam autem sed soluta necessitatibus debitis velit molestiae 
                        ad sapiente facilis culpa, eaque beatae magnam error! Ea velit reprehenderit repellat sit 
                        optio pariatur nemo eum magni officiis dolor praesentium consectetur recusandae doloribus 
                        blanditiis corporis libero minima porro hic dolorem id consequatur est sequi, dolores 
                        voluptate. Fugiat porro voluptas ut amet facilis minus, quas pariatur ipsam voluptates nesciunt.
                    </p>
                </div>
            </div>
        </section>
    );
}