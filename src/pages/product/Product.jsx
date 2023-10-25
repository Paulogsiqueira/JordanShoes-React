import './Product.css'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../../data/products.jsx';
import { useState, useContext, useEffect } from 'react'
import money from '../../img/icon/money.png';
import card from '../../img/icon/card.png';
import { LoginContext } from '../../context/LoginContext'
import { CartContext } from '../../context/CartContext';


const Product = () => {
  const { id } = useParams();
  const { login, setLogin } = useContext(LoginContext)
  const { cart, setCart } = useContext(CartContext)

  const navigate = useNavigate()

  const handleClick = () => {
    if (login == "true") {
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
      }else{
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].name === products[id].name) {
            pos = i;
          }
        }
        const updatedCart = [...cart]
        updatedCart[pos].quantity +=1;
        setCart(updatedCart);
      }





    } else {
      alert("Para adicionar itens ao carrinho, você precisa realizar o login")
      navigate("/login")
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
            <li>4x R${Number(products[id].price / 4 * 1.02).toFixed(2)} <span>(2% de juros)</span></li>
            <li>5x R${Number(products[id].price / 5 * 1.04).toFixed(2)} <span>(4% de juros)</span></li>
            <li>6x R${Number(products[id].price / 6 * 1.06).toFixed(2)} <span>(6% de juros)</span></li>
            <li>7x R${Number(products[id].price / 7 * 1.08).toFixed(2)} <span>(8% de juros)</span></li>
            <li>8x R${Number(products[id].price / 8 * 1.10).toFixed(2)} <span>(10% de juros)</span></li>
            <li>9x R${Number(products[id].price / 9 * 1.12).toFixed(2)} <span>(12% de juros)</span></li>
            <li>10x R${Number(products[id].price / 10 * 1.15).toFixed(2)} <span>(15% de juros)</span></li>
          </ul>
        </section>
      </section>
    </div>
  )
}

export default Product