import { useContext } from 'react';
import { LayoutScrollContext, LayoutScrollContextType } from '../contexts/LayoutScroll.context';

export const useLayoutScroll = (): LayoutScrollContextType => {
    const context = useContext(LayoutScrollContext);

    if (!context) {
        console.warn("useLayoutScroll must be used within a LayoutScrollProvider component.");
    }

    return context;
}
