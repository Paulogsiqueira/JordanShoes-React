import { useState, createContext } from "react";

export const FreightContext = createContext();

export const FreightContextProvider = ({ children }) => {

    const [freight, setFreight] = useState(0)

  return (
    <FreightContext.Provider value={{ freight, setFreight }}>
      {children}
    </FreightContext.Provider>
  )

}
