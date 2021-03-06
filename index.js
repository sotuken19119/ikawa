import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../css/index.css';
import * as serviceWorker from '../serviceWorker';
import End from './End';
import Game from './TableTest';
import Start from './Start';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
          <Route exact path="/"  component={Start} />
          <Route path="/TableTest"  component={Game} />
      </div>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();