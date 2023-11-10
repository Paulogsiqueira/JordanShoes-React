import { LoginContextProvider } from './context/LoginContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { FreightContextProvider } from './context/FreightContext.jsx'
import { AddressContextProvider } from './context/AddressContext.jsx'
import { OrderDetailsContextProvider } from './context/OrderDetailsContext.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      <CartContextProvider>
        <FreightContextProvider>
          <AddressContextProvider>
            <OrderDetailsContextProvider>
              <App />
            </OrderDetailsContextProvider>
          </AddressContextProvider>
        </FreightContextProvider>
      </CartContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
)
