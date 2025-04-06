import { useContext } from 'react';
import { LayoutScrollContext, LayoutScrollContextType } from '../contexts/LayoutScroll.context';

export const useLayoutScroll = (): LayoutScrollContextType => {
    const context = useContext(LayoutScrollContext);

    if (context === undefined) { // Check might need to be === null depending on default/usage
        console.warn("useLayoutScroll must be used within a LayoutScrollProvider component.");
    }
    return context;
}