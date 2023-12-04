import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store.js';

ReactDOM.render(
  
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
    
  document.getElementById('root')
);
