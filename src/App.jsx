import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import { LoginContext } from './context/LoginContext.jsx'
import { CartContext } from './context/CartContext'; 
import { useState,useContext } from 'react'
import NavBar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import FinishOrder from './pages/finishOrder/FinishOrder'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import PaymentComplete from './pages/paymentComplete/PaymentComplete'
import './App.css'



function App() {
  const {login, setLogin} = useContext(LoginContext)
  const { cart, setCart } = useContext(CartContext)

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={login ? <Cart/> : <Navigate to="/" />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/payment' element={ (login && cart.length >0) ? <FinishOrder/> : <Navigate to="/" />} />
            <Route path='/paymentComplete' element={login ? <PaymentComplete/> : <Navigate to="/" />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
