import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Importez le Provider
import store from './store/store'; // Importez votre store Redux
import App from './App';
import './index.css'

ReactDOM.render(
  <Provider store={store}> {/* Enveloppez votre application avec le Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
