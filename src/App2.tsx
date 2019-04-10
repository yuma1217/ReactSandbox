import * as React from 'react';

const RootContext = React.createContext<IAppContext | null>(null);

const Grandson = () => (
    <RootContext.Consumer>
        {context=> context && (
            <div>{context.name}</div>
        )
        }
    </RootContext.Consumer>
)

const Son = () => (
    <Grandson />
)
const appContext : IAppContext = {
    name : 'kaba'
}

export class App2 extends React.Component{
    public render(){
        return(
            <RootContext.Provider value = {appContext}>
                <Son />
            </RootContext.Provider>
        )
    }
}

interface IAppContext
{
    name : string
}