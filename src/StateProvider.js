import React,{ createContext, useContext, useReducer } from "react";

//Prepares the datalayer
export const StateContext = createContext();

// wrap our app and provide it to datalayer
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//PULL INFO FROM datalayer
export const UseStateValue = () =>useContext(StateContext);