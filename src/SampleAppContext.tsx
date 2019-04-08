import * as React from 'react';

// tslint:disable-next-line:ordered-imports
import {IAppContextInterface,AppContextProvider} from './Context';


const sampleAppContext : IAppContextInterface = {
    name: 'Using React',
    // tslint:disable-next-line:object-literal-sort-keys
    author: 'happy bug',
    url: 'http://',
}

export const App = () => (
    <AppContextProvider value={sampleAppContext} >
        ...
    </AppContextProvider>
);