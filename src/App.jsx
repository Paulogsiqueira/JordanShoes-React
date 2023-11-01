import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import FinishOrder from './pages/finishOrder/FinishOrder'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import PaymentComplete from './pages/paymentComplete/PaymentComplete'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            <Route path='/payment' element={<FinishOrder/>} />
            <Route path='/paymentComplete' element={<PaymentComplete/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
