import React, { createContext } from 'react';

export type LayoutScrollContextType = React.RefObject<HTMLDivElement> | null;

export const LayoutScrollContext = createContext<LayoutScrollContextType>(null);