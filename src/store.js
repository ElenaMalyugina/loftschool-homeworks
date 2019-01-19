import React from 'react'
import { createStore, compose, applyMiddleware } from 'redux';
import combineReducers from "./reducers";
import {searchMiddleware} from "./middlewares/searchMiddleware";

export default function getStore(){
    return createStore ( combineReducers, 
                            compose(
                                applyMiddleware(searchMiddleware)
                            )
                        );
}