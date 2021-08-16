import React,{createContext} from 'react'

export const GlobalContext=createContext() //store props data
const GlobalContextProvider = (props) => {
    return (
        <>
          <GlobalContext.Provider value={"React"}>
              {props.children}
              
              </GlobalContext.Provider>  
        </>
    )
}

export default GlobalContextProvider
