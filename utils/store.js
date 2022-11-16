import { createContext, useReducer } from "react";

export const Store = createContext();

const iniitalState = {};

function reducer(state, action) {}

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, iniitalState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
