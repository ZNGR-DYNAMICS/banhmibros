import React, { createContext } from 'react';

export type LayoutScrollContextType = React.RefObject<HTMLElement> | undefined;

export const LayoutScrollContext = createContext<LayoutScrollContextType>(undefined);