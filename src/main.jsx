import { Provider } from 'react-redux' 
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import store from './redux/store.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
  </React.StrictMode>,
)
