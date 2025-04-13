import { useState, useEffect } from 'react';

type Language = 'en' | 'de';

export const getBrowserLanguage = (): Language => navigator.language.startsWith('de') ? 'de' : 'en';

export const applyTranslations = (language: Language) => {
    const translatableElements = document.querySelectorAll<HTMLElement>('[data-en], [data-de]');

    translatableElements.forEach(element => {
        const text = element.getAttribute(`data-${language}`);
        if (text) element.textContent = text;
    });
};

export const useTranslation = () => {
    const [language] = useState<Language>(getBrowserLanguage);

    useEffect(() => {
        applyTranslations(language);
    }, [language]);

    return { language };
};