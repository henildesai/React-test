import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/bootstrap.min.css'
import './assets/css/LineIcons.css'
import './assets/css/magnific-popup.css'
import './assets/css/default.css'
import './assets/css/style.css'
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import rootReducer from './service/reducers/index'
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

