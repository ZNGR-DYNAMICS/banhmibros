import React from 'react';
import AnimatedText, { AnimatedTextProps } from './AnimatedText';
import { useTranslation } from '../hooks/useTranslation';

interface HeadlineProps {
    children: React.ReactNode;
}

type Language = 'en' | 'de';
type DataAttribute = `data-${Language}`;

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