import { CartContext } from '@/context/CartContext';
import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '@/pages/home/Home'
import Register from '@/pages/register/Register'
import FinishOrder from '@/pages/finishOrder/FinishOrder'
import Login from '@/pages/login/Login'
import Product from '@/pages/product/Product'
import Cart from '@/pages/cart/Cart'
import PaymentComplete from '@/pages/paymentComplete/PaymentComplete'


const PageRoutes = () => {
    const { cart } = useContext(CartContext)
    const user = useSelector(state => state.user)
    const login = user.isLogged

    return (
        <Routes>
            <Route path='/product/:id' element={<Product />} />
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={login ? <Cart /> : <Navigate to="/" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/payment' element={(login && cart.length > 0) ? <FinishOrder /> : <Navigate to="/" />} />
            <Route path='/paymentComplete' element={login ? <PaymentComplete /> : <Navigate to="/" />} />
        </Routes>
    )
}

export default PageRoutes