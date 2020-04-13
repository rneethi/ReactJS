import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { counterReducer } from './Reducer/CounterReducer';
import { createStore } from 'redux';

const store = createStore(counterReducer);
console.log(store);
console.log(store.getState());
ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));

