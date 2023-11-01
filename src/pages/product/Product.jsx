import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { CartContext } from '../../context/CartContext';
import { products } from '../../data/products.jsx';
import Modal from 'react-modal';
import close from '../../img/icon/close.png';
import error from '../../img/icon/error.png';
import money from '../../img/icon/money.png';
import card from '../../img/icon/card.png';
import cartIcon from '../../img/icon/cart.png';
import checked from '../../img/icon/checked.png';
import leftArrow from '../../img/icon/left-arrow.png';
import './Product.css'

Modal.setAppElement("#root")

const Product = () => {
  const { id } = useParams();
  const { login, setLogin } = useContext(LoginContext)
  const { cart, setCart } = useContext(CartContext)
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

  const handleClick = () => {
    if (login == "true") {
      openModal()
      let found = false;
      let pos;
      cart.forEach((product) => {
        if (product.name === products[id].name) {
          found = true;
        }
      })
      if (found == false) {
        const updatedCart = [...cart]
        let productToAdd = products[id];
        productToAdd.quantity = 1;
        updatedCart.push(productToAdd);
        setCart(updatedCart);
      } else {
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].name === products[id].name) {
            pos = i;
          }
        }
        const updatedCart = [...cart]
        updatedCart[pos].quantity += 1;
        setCart(updatedCart);
      }
    } else {
      openModalError()
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className='product'>
      <section className='product-img'>
        <img src={products[id].img} alt="Imagem do modelo selecionado" />
      </section>
      <section>
        <div className='product-description'>
          <h2>{products[id].name}</h2>
          <h3>R$ {Number(products[id].price).toFixed(2)}</h3>
          <p><strong>Marca:</strong> Nike</p>
          <p><strong>Garantia:</strong> 12 meses</p>
          <p className='product-desc'>{products[id].description}</p>
        </div>
        <section className='payment'>
          <div >
            <div className='payment-cash'>
              <img src={money} alt="Ícone de dinheiro" />
              <p>R$ {Number(products[id].price * 0.9).toFixed(2)} <span>(no PIX )</span></p>
            </div>
            <div className='payment-card'>
              <img src={card} alt="Ícone de cartão de crédito" />
              <p>R$ {Number(products[id].price).toFixed(2)}</p>
            </div>
          </div>
          <button className='btn add-cart' onClick={handleClick}>Adicionar ao carrinho</button>
        </section>
        <section className="product-parcels">
          <h3>Parcelamento</h3>
          <ul>
            <li>1x R${products[id].price}</li>
            <li>2x R${Number(products[id].price / 2).toFixed(2)}</li>
            <li>3x R${Number(products[id].price / 3).toFixed(2)}</li>
            <li>4x R${Number(products[id].price / 4).toFixed(2)}</li>
            <li>5x R${Number(products[id].price / 5).toFixed(2)}</li>
            <li>6x R${Number(products[id].price / 6).toFixed(2)}</li>
            <li>7x R${Number(products[id].price / 7 * 1.04).toFixed(2)} <span>(4% de juros)</span></li>
            <li>8x R${Number(products[id].price / 8 * 1.08).toFixed(2)} <span>(8% de juros)</span></li>
            <li>9x R${Number(products[id].price / 9 * 1.12).toFixed(2)} <span>(12% de juros)</span></li>
            <li>10x R${Number(products[id].price / 10 * 1.16).toFixed(2)} <span>(16% de juros)</span></li>
          </ul>
        </section>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='modal-content'>
        <div className='modal'>
          <div className='modal-close'>
            <button onClick={() => {closeModal()}}><img src={close} /></button>
          </div>
          <div className='modal-title'>
            <img src={checked} />
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
            <button onClick={() => {closeModal()}}><img src={close} /></button>
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