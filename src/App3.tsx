// https://qiita.com/zaburo/items/ce46e4a53e23ef210df1
// この記事をTypescript化してみる

import * as React from 'react';

const RootContext = React.createContext<IValue | null>(null);

const Counter = () => (
    <RootContext.Consumer>
        {context=> context && (
            <div>
                <span>{context.state.count}</span>
                <button onClick={context.actions.increment}>+1</button>
                <button onClick={context.actions.decrement}>-1</button>
            </div>
        )
        }
    </RootContext.Consumer>
)

export class App3 extends React.Component<{}, {count : number}>{
    constructor(props : any){
        super(props);
        this.state = {count: 0};
        // ES2016 function bind syntax
        // this. increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
        
        // この表記も行けるらしいがVersionが足りないのかエラー
        // this.increment = ::this.increment;

    }

    // cannnot read property 'count' of undefined
    // のエラーはアロー関数にすることで防ぐ
    
    // public increment() {
    //     this.setState({count: this.state.count + 1});
    // }
    public increment = () => this.setState({count: this.state.count + 1});

    public decrement = () => this.setState({count: this.state.count -1});

    public render(){
        const Value : IValue = {
            
            actions: {
                decrement : this.decrement,
                increment : this.increment
            },
            state: this.state
        }

        return(
            <RootContext.Provider value = {Value}>
                <Counter/>
            </RootContext.Provider>
        )
    }
}

// interface IAppContext
// {
//     count : number,

// }

// tslint:disable-next-line:no-empty-interface
interface IValue
{
    state: any,
    actions : any
}