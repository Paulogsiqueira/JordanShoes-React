import { CartContextProvider } from './context/CartContext.jsx'
import { AddressContextProvider } from './context/AddressContext.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CartContextProvider>
        <AddressContextProvider>
          <App />
        </AddressContextProvider>
      </CartContextProvider>
    </Provider>
  </React.StrictMode>,
)
