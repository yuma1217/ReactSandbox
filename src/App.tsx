import * as React from 'react';
import {AppContextProvider,IAppContextInterface} from './Context';
import { PostInfo } from './PostInfo';

const sampleAppContext : IAppContextInterface = {
  name : 'Using React Context in a Typescript App',
  // tslint:disable-next-line:object-literal-sort-keys
  author: 'yuma1217...',
  url: 'https://www.google.com'
};

const AppFunction = () => (
  <AppContextProvider value={sampleAppContext}>
    <PostInfo />
  </AppContextProvider>
);

class App extends React.Component {
  public render() {
    return (
      <>
      <div>test</div>
      <AppFunction />
      </>
    );
  }
}

export default App;
