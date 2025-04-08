import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Legal from '../app/components/Legal/Legal';

describe('Legal Component Translation Tests', () => {
    const mockNavigatorLanguage = (language: string) => {
        Object.defineProperty(navigator, 'language', {
            value: language,
            writable: true,
        });
    };
  
    it('should render German text when browser language is German', () => {
        mockNavigatorLanguage('de');
        render(<Legal />);
    
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('Rechtliches');
    });
  
    it('should render English text when browser language is English', () => {
        mockNavigatorLanguage('en');
        render(<Legal />);
    
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('Legal');
    });
  
    it('should render English text when browser language is Italian (fallback to English)', () => {
        mockNavigatorLanguage('it');
        render(<Legal />);
    
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toHaveTextContent('Legal');
    });
});