import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// tslint:disable-next-line:ordered-imports
import { App3 } from './App3';

ReactDOM.render(
  <App3 />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
