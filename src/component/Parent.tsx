// import * as React from 'react';

// class Parent extends React.Component {
//     public state = {
//         count
//     }

//     constructor(props: any){
//         super(props);
//         this.state({count: 10});
//     }
//     public render() {
//       return (
//         <div className="parents">
//             {this.state.count}
//             <Child count={this.state.count} />
//         </div>
//       );
//     }
//   }
// const Child = (props : any) => (
//   <div className="child">
//     {props.count}
//     <GrandChildren count={props.count}/>
//   </div>
// )

// const GrandChildren = (props : any) => (
//   <div className="grandChildren">{props.count}</div>
// )

// export default Parent;