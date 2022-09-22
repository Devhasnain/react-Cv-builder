import React, {createContext} from 'react';
export const Context=createContext();
export const DataProvider=(props)=>{
    return (
        <Context.Provider value={'hasnain'}>
            {props.children}
        </Context.Provider>
    );
};
