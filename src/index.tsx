import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// tslint:disable-next-line:ordered-imports
import { App2 } from './App2';

ReactDOM.render(
  <App2 />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
