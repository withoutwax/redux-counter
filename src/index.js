import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducers';

const store = createStore(counter);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root'));
