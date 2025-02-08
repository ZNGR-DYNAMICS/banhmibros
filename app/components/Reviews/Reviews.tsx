import { useRef } from 'react';
import ReviewItem from "./ReviewItem";
import Headline from "../Headline";
import AnimatedText from "../../AnimatedText";
import Button from '../Button';

export default function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <div>
            <Headline>
                <AnimatedText scrollRef={scrollRef} data-en="Here's what our customers say." data-de="Was unsere Kunden über uns sagen." />
            </Headline>
            <div className="grid grid-cols-2 px-8 md:px-16 lg:px-32 2xl:px-64 py-16 md:py-32 lg:py-64 2xl:py-96 gap-12">
                <ReviewItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius!</ReviewItem>
                <ReviewItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius!</ReviewItem>
                <ReviewItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius!</ReviewItem>
                <ReviewItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius!</ReviewItem>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row items-baseline gap-8'>
                    <p className='text-8xl font-semibold text-bmb-orange'>4.8</p>
                    <div className='flex flex-row gap-2 text-bmb-orange'>
                        <svg className='h-10 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z" fill="currentColor"/>
                        </svg>
                        <svg className='h-10 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z" fill="currentColor"/>
                        </svg>
                        <svg className='h-10 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z" fill="currentColor"/>
                        </svg>
                        <svg className='h-10 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z" fill="currentColor"/>
                        </svg>
                        <svg className='h-10 w-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.93723 1.56116C10.5865 -0.52039 13.4135 -0.520387 14.0628 1.56117L15.4087 5.87612C15.699 6.80702 16.5318 7.43729 17.4715 7.43729H21.8269C23.928 7.43729 24.8016 10.238 23.1018 11.5245L19.5781 14.1913C18.8179 14.7666 18.4999 15.7864 18.7902 16.7173L20.1361 21.0322C20.7854 23.1138 18.4983 24.8447 16.7985 23.5583L13.2749 20.8915C12.5147 20.3161 11.4853 20.3161 10.7251 20.8915L7.20149 23.5583C5.50167 24.8447 3.21459 23.1138 3.86386 21.0322L5.20977 16.7173C5.50013 15.7864 5.18204 14.7666 4.42186 14.1913L0.898221 11.5245C-0.801598 10.238 0.0719963 7.43729 2.17309 7.43729H6.52854C7.46818 7.43729 8.30095 6.80702 8.59131 5.87612L9.93723 1.56116Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <p className='text-8xl text-white-500 font-semibold'>on Google Reviews by over 110 users.</p>
                </div>
                <div className='flex'>
                    <Button width='w-48' color='white-500'>Leave a Review</Button>
                </div>
            </div>
        </div>
    );
}