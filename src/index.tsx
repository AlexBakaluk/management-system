import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from "./redux/reducers/rootReducer";
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const store = createStore(rootReducer, compose(
    applyMiddleware(

    )
))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
