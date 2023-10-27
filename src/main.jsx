import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LoginContextProvider } from './context/LoginContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { FreightContextProvider } from './context/FreightContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginContextProvider>
      <CartContextProvider>
        <FreightContextProvider>
          <App />
        </FreightContextProvider>
      </CartContextProvider>
    </LoginContextProvider>
  </React.StrictMode>,
)
