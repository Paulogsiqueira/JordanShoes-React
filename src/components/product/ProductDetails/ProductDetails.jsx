import { CartContext } from '@/context/CartContext';
import { LoginContext } from '@/context/LoginContext'
import { products } from '@/data/products.jsx';
import { useContext, useEffect, useState } from 'react'
import money from '@/img/icon/money.png';
import card from '@/img/icon/card.png';
import './ProductDetails.css'

const ProductDetails = (props) => {
  const id = props.item;
    const { cart, setCart } = useContext(CartContext)
    const { login, setLogin } = useContext(LoginContext)

    const handleClick = () => {
        if (login == "true") {
          props.openModalFunc()
          let found = false;
          let pos;
          cart.forEach((product) => {
            if (product.name === products[id].name) {
              found = true;
            }
          })
          if (found == false) {
            const updatedCart = [...cart]
            const productToAdd = products[id];
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
          props.openModalErrorFunc()
        }
      }

  return (
    <div className='product-details'>
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
            <li>1x R${products[id].price} <span>(sem juros)</span></li>
            <li>2x R${Number(products[id].price / 2).toFixed(2)} <span>(sem juros)</span></li>
            <li>3x R${Number(products[id].price / 3).toFixed(2)} <span>(sem juros)</span></li>
            <li>4x R${Number(products[id].price / 4).toFixed(2)} <span>(sem juros)</span></li>
            <li>5x R${Number(products[id].price / 5).toFixed(2)} <span>(sem juros)</span></li>
            <li>6x R${Number(products[id].price / 6).toFixed(2)} <span>(sem juros)</span></li>
            <li>7x R${Number(products[id].price / 7 * 1.04).toFixed(2)} <span>(4% de juros)</span></li>
            <li>8x R${Number(products[id].price / 8 * 1.08).toFixed(2)} <span>(8% de juros)</span></li>
            <li>9x R${Number(products[id].price / 9 * 1.12).toFixed(2)} <span>(12% de juros)</span></li>
            <li>10x R${Number(products[id].price / 10 * 1.16).toFixed(2)} <span>(16% de juros)</span></li>
          </ul>
        </section>
    </div>
  )
}

export default ProductDetails