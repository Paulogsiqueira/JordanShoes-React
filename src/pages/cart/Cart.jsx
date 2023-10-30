import './Cart.css'
import { CartContext } from '../../context/CartContext';
import { FreightContext } from '../../context/FreightContext';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Resume from '../../components/payment/Resume/Resume';
import Freight from '../../components/cart/Freight/Freight';
import Itens from '../../components/cart/Itens/Itens';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  const { freight, setFreight } = useContext(FreightContext)

  const navigate = useNavigate()

  const finalizeOrder = () => {
    if (freight > 1) {
      navigate('/payment')
    } else {
      alert("Calcule o valor do frete antes de finalizar a compra")
    }
  }

  return (
    <div>
      {cart.length > 0 ? <div className='cart-body'>
        <h2 className='cart-title'>Carrinho de Compras</h2>
        <div className='cart-page'>
          <Itens />
          <div className='payment-itens'>
            <Resume />
            <Freight />
            <div>
              <button className='btn-cart' onClick={finalizeOrder}>Finalizar compra</button>
            </div>
          </div>
        </div>
      </div> : <div className='empity-cart'>
        <h2>Carrinho vazio</h2>
        <p> Volte a nossa página incial e escolha os produtos que mais combinam com você!</p>
      </div>}
    </div>
  )
}

export default Cart