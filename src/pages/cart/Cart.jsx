import './Cart.css'
import { CartContext } from '../../context/CartContext';
import { useState, useContext, useEffect } from 'react'
import bin from '../../img/icon/bin.png'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)

  const addQuantity = (index) => {
    const updatedCart = [...cart]
    updatedCart[index].quantity += 1
    setCart(updatedCart);
  }

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart]
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1
      setCart(updatedCart);
    } else {
      updatedCart.splice(index, 1)
      setCart(updatedCart);
    }
  }

  const deleteItem = (index) => {
    const updatedCart = [...cart]
    updatedCart.splice(index, 1)
    setCart(updatedCart);
  }

  return (
    <div>
      <h2>Meu carrinho</h2>
      <div className='cart-page'>
        <div className='cart-itens'>
          <ul>
            {cart.map((product, index) => (
              <li key={index} >
                <div className='cart-item'>
                  <section className='item-img'>
                    <img src={product.img} alt="Foto do tenis selecionado" />
                  </section>
                  <section className='item-desc'>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p><strong>Marca:</strong>Nike</p>
                  </section>
                  <section className='item-options'>
                    <div className='item-options__quantity'>
                      <div className='quantity-title'>
                        Qtd
                      </div>
                      <div className='item-options__btn'>
                        <p className='btn-quantity' onClick={() => (decreaseQuantity(index))}>-</p>
                        <p className='item-quantity'>{product.quantity}</p>
                        <p className='btn-quantity' onClick={() => (addQuantity(index))}>+</p>
                      </div>
                    </div>
                    <div className='item-options__price'>
                      <div className='price-title' >
                        Preço
                      </div>
                      <div className='item-price'>
                        <p>R$ {product.quantity * product.price}</p>
                      </div>
                    </div>
                    <div className='delete-item'>
                      <img src={bin} alt="Lixeira" onClick={() => (deleteItem(index))} />
                    </div>
                  </section>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='payment-cart'>
          <h2 className='payment-resume'>Resumo</h2>
          <div className='payment-total'>
            <p>Total</p>
            <p>R$ 2500.00</p>
          </div>
          <div className='payment-pix'>
            <p className='pix-method'>à vista</p>
            <h2>R$ 2250.00</h2>
            <p className='pix-discount'>no PIX com 10% de desconto</p>
          </div>
          <div className='card-method'>
            <h2>R$ 2250.00</h2>
            <p>em até 6x de R$ 200 sem juros no cartão</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart