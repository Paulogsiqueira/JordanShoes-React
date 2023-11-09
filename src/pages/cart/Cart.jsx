import { CartContext } from '../../context/CartContext';
import { FreightContext } from '../../context/FreightContext';
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import Resume from '../../components/payment/Resume/Resume';
import Freight from '../../components/cart/Freight/Freight';
import Itens from '../../components/cart/Itens/Itens';
import close from '../../img/icon/close.png';
import './Cart.css'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  const { freight, setFreight } = useContext(FreightContext)
  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false)

  const navigate = useNavigate()

  const finalizeOrder = () => {
    if (freight > 1) {
      navigate('/payment')
    } else {
      openModalError()
    }
  }

  const openModalError = () => {
    setModalErrorIsOpen(true)
  }

  const closeModal = () => {
    setModalErrorIsOpen(false)
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
      <Modal
        isOpen={modalErrorIsOpen}
        onRequestClose={closeModal}
        className='modal-content'>
        <div className='modal'>
          <div className='modal-close'>
            <button onClick={closeModal}><img src={close} /></button>
          </div>
          <div className='modalError-title'>
            <p>Por favor calcule o valor do frete antes de finalizar a compra</p>
          </div>
          <div className='modal-btn'>
            <button onClick={closeModal} className='modal-btn__cart'>OK</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Cart