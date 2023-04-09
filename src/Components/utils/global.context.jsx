import { createContext, useMemo, useReducer } from "react";

export const initialScreen = {screen: "", data: []}

export const ContextGlobal = createContext(initialScreen);

const contextReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_screen":
      return {...state, screen: state.screen === "light" ? "dark" : "light"};
    case "UPDATE_FAVORITES":
      return {...state, favorites: action.payload};
    case "INCREMENT_COUNTER":
      return {...state, counter: state.counter + 1};
    default:
      return state;
  }
};

const initContextReducer = () => ({
  screen: "light",
  data: localStorage.getItem("favoritesDentists") ? JSON.parse(localStorage.getItem("favoritesDentists")) : []
})

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [currentContext, dispatchContextUpdate] = useReducer(contextReducer, initialScreen, initContextReducer)

  const contextMemo = useMemo(()=>{
    localStorage.setItem('favoritesDentists', JSON.stringify(currentContext.data))
    return {currentContext, dispatchContextUpdate}
  }, [currentContext])

  
  return (
    <ContextGlobal.Provider value={contextMemo}>
      {children}
    </ContextGlobal.Provider>
  );
};
