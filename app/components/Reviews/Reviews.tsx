import ReviewItem from "./ReviewItem";
import AnimatedText from "../../AnimatedText";
import ReviewHeadline from "./ReviewHeadline";
import ButtonTopRight from "../ButtonTopRight";

interface AnimatedTextProp {
    scrollRef: React.RefObject<HTMLElement>;
}

const Reviews: React.FC<AnimatedTextProp> = ({ scrollRef }) => {

    return (
        <div className='relative bg-black-500'>
            <ReviewHeadline className="pt-8 md:pt-16 lg:pt-32">
                <AnimatedText transitionColor='#FFF8EE' scrollRef={scrollRef} data-en="St.Gallen loves Banh Mis! Here's what our customers say." data-de="St.Gallen liebt Banh Mis! Was unsere Kunden über uns sagen." />
            </ReviewHeadline>
            <div className="relative grid md:grid-cols-2 justify-center place-items-center gap-4 lg:gap-12 px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-32">
                <ReviewItem author="Ghazaleh Eghlima" date="August 24">Probably the best Banh mi I've ever tasted! Normally I leave some bread out but this was literally the first time I devoured the entire thing so you can imagine how tasty it was!</ReviewItem>
                <ReviewItem author="Maia Zethoven" date="December 24">The food was great! I came here with my girlfriend (who grew up in Vietnam) and we both loved it. The banh mi filling was tasty and fresh, and the bread was very good. The spring rolls were nice and crispy (freshly cooked). We spoke with the owner who was very friendly.</ReviewItem>
                <ReviewItem author="Tereza Pokorna" date="November 24">Oh my god, this is definitely the best Banh Mi I have ever had! The prices are very good and the place is so cozy and looks very modern. Plus the owners and staff are all so nice and helpful. I can't wait to come back.</ReviewItem>
                <ReviewItem author="Salvatore Saitta" date="October 24">Truly one of the best restaurants in st.gallen, the food is extremely good, the portions are generous and the pricing is nearly unbeatable. If you wish to have a reminding taste of Vietnam or explore your taste buds, definitely come here 🙌🙌</ReviewItem>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row items-baseline gap-8 px-4 md:px-8 lg:px-16'>
                    <p className='text-7xl lg:text-8xl font-semibold text-bmb-orange'>4.8</p>
                    <div className='flex flex-row gap-2 text-bmb-orange'>
                        <AnimatedText scrollRef={scrollRef}>
                            <svg className='h-8 lg:h-10 w-8 lg:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z"
                                fill="currentColor"/>
                            </svg>
                            <svg className='h-8 lg:h-10 w-8 lg:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z"
                                fill="currentColor"/>
                            </svg>
                            <svg className='h-8 lg:h-10 w-8 lg:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z"
                                fill="currentColor"/>
                            </svg>
                            <svg className='h-8 lg:h-10 w-8 lg:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z"
                                fill="currentColor"/>
                            </svg>
                            <svg className='h-8 lg:h-10 w-8 lg:w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z"
                                fill="currentColor"/>
                            </svg>
                        </AnimatedText>
                    </div>
                </div>
                <div>
                    <ReviewHeadline>
                        <AnimatedText transitionColor='#FFF8EE' scrollRef={scrollRef} data-de="auf Google Reviews von über 110 Nutzern." data-en="on Google Reviews by over 110 users."></AnimatedText>
                    </ReviewHeadline>
                </div>
                <div className='flex px-4 py-4 md:px-8 md:py-8 lg:px-16 lg:py-16'>
                    <a target="_blank" href="https://www.google.com/maps/place/Banh+Mi+Bros/@47.4273363,9.3744299,386m/data=!3m1!1e3!4m18!1m9!3m8!1s0x479b1fb7cc166b77:0x648aa610c21baf71!2sBanh+Mi+Bros!8m2!3d47.4268735!4d9.3752029!9m1!1b1!16s%2Fg%2F11h818c1wc!3m7!1s0x479b1fb7cc166b77:0x648aa610c21baf71!8m2!3d47.4268735!4d9.3752029!9m1!1b1!16s%2Fg%2F11h818c1wc?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D">
                        <ButtonTopRight width='w-48' color='white-500'>Leave a Review</ButtonTopRight>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Reviews;