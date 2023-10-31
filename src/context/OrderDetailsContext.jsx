import { useState, createContext } from "react";

export const OrderDetailsContext = createContext();

export const OrderDetailsContextProvider = ({ children }) => {

    const [orderDetails, setOrderDetails] = useState(false)

  return (
    <OrderDetailsContext.Provider value={{ orderDetails, setOrderDetails }}>
      {children}
    </OrderDetailsContext.Provider>
  )

}

