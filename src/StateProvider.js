import React,{createContext,useContext,useReducer} from "react"


//Prepares the dataLayer
export const StateContext=createContext();


//wrap our app and provides the datalayer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


//Pull information from the dataLayer
export const useStateValue=()=>useContext(StateContext);