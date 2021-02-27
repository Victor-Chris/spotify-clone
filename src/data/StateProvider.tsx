import React, { createContext, useContext, useReducer } from 'react';

//@ts-ignore
export const StateContext = createContext();

//@ts-ignore
export const StateProvider = ({ initialState, reducer, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}> 
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);