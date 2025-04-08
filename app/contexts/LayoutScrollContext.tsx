import { LayoutScrollContext } from './LayoutScroll.context';
/**
 * @component LayoutScrollProvider
 * @description A React Context Provider component for the LayoutScrollContext.
 * It makes the scroll ref available to consuming components.
 * @example
 * <LayoutScrollProvider value={scrollRef}>
 * {children}
 * </LayoutScrollProvider>
 */
export const LayoutScrollProvider = LayoutScrollContext.Provider;