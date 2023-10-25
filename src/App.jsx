import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navbar/NavBar.jsx'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'


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
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
