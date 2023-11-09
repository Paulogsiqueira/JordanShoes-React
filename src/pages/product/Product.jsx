import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from 'react-modal';
import close from '../../img/icon/close.png';
import error from '../../img/icon/error.png';
import cartIcon from '../../img/icon/cart.png';
import complete from '../../img/icon/complete.png';
import leftArrow from '../../img/icon/left-arrow.png';
import ProductDetails from '../../components/product/ProductDetails/ProductDetails';
import ProductImg from '../../components/product/ProductImg/ProductImg.jsx';
import './Product.css'

Modal.setAppElement("#root")

const Product = () => {
  const { id } = useParams();
  const [modalIsOpen, setIsOpen] = useState(false)
  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false)
  const navigate = useNavigate()

  const openModal = () => {
    setIsOpen(true)
  }
  const openModalError = () => {
    setModalErrorIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalErrorIsOpen(false)
  }

  return (
    <div className='product'>
      <ProductImg item={id} />
      <ProductDetails item={id} openModalFunc={openModal} openModalErrorFunc={openModalError} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal-content'>
        <div className='modal'>
          <div className='modal-close'>
            <button onClick={() => { closeModal() }}><img src={close} /></button>
          </div>
          <div className='modal-title'>
            <img src={complete}  />
            <p>Produto adicionado com sucesso!</p>
          </div>
          <div className='modal-btn'>
            <button onClick={() => { navigate('/') }} className='modal-btn__buy'><img src={leftArrow} />Continuar comprando</button>
            <button onClick={() => { navigate('/cart') }} className='modal-btn__cart'><img src={cartIcon} />Ver carrinho</button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modalErrorIsOpen}
        onRequestClose={closeModal}
        className='modal-content'>
        <div className='modal'>
          <div className='modal-close'>
            <button onClick={closeModal}><img src={close} /></button>
          </div>
          <div className='modalError-title'>
            <img src={error} />
            <p>Para adicionar itens ao carrinho voce precisa entrar na sua conta primeiro</p>
          </div>
          <div className='modal-btn'>
            <button onClick={() => { navigate('/login') }} className='modal-btn__cart'>OK</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Product