import * as React from 'react';

export interface IAppContextInterface
{
    name: string,
    author: string,
    url: string
}



const ctxt = React.createContext<IAppContextInterface | null>(null);

export const AppContextProvider = ctxt.Provider;

export const AppContextConsumer = ctxt.Consumer;