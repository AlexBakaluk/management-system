import React from 'react';
import ReactDOM from 'react-dom';
import './fonts.css'
import {compose, createStore, applyMiddleware} from 'redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from "./redux/reducers/rootReducer";
import thunkMiddleware from 'redux-thunk';
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Router} from "react-router-dom";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
