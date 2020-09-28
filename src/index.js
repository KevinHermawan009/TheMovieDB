import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  // <React.StrictMode>

  // </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
