import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';

import calcReducer from './Reducer/CalcReducer';

import { Provider } from 'react-redux';
const store = createStore(calcReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

