import React from 'react';
import AnimatedText, { AnimatedTextProps } from './AnimatedText';
import { useTranslation } from '../hooks/useTranslation';

interface HeadlineProps {
    children: React.ReactNode;
}

type Language = 'en' | 'de';
type DataAttribute = `data-${Language}`;

/**
 * A headline component that displays a multilingual headline with optional animation.
 *
 * @remarks
 * Uses the `useTranslation` hook to dynamically render text based on the browser's language.
 * Supports `AnimatedText` child components for animated text effects and standard HTML heading elements (like `h2`) for static translated text.
 * The translations are provided as `data-en` and `data-de` props on the child elements.
 *
 * @example
 * ```tsx
 * <Headline>
 * <AnimatedText data-en="Welcome" data-de="Willkommen" />
 * <h2 data-en="Our Mission" data-de="Unsere Mission">Our Mission</h2>
 * </Headline>
 * ```
 *
 * @param children - React nodes to be rendered within the headline. These can be `AnimatedText` components or other HTML elements that support `data-en` and `data-de` attributes for translation.
 *
 * @returns A `div` element containing the translated child components.
 */
const Headline: React.FC<HeadlineProps> = ({ children }) => {
    const { language } = useTranslation();

    return (
        <div className="font-poppins font-semibold text-4xl md:text-5xl lg:text-7xl text-black-500">
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) return child;
                
                if (child.type === AnimatedText) {
                    const props = child.props as AnimatedTextProps;
                    const dataAttribute = `data-${language}` as DataAttribute;
                    const translatedText = props[dataAttribute] || '';
                    
                    return React.cloneElement(child, {
                        children: translatedText
                    } as Partial<AnimatedTextProps>);
                }

                if (child.type === 'h2') {
                    const dataAttribute = `data-${language}` as DataAttribute;
                    const translatedText = child.props[dataAttribute];
                    
                    return React.cloneElement(child, { 
                        children: translatedText 
                    } as React.HTMLProps<HTMLHeadingElement>);
                }

                return child;
            })}
        </div>
    );
}

export default Headline;