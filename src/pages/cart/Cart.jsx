import './Cart.css'
import { CartContext } from '../../context/CartContext';
import { FreightContext } from '../../context/FreightContext';
import { useState, useContext, useEffect } from 'react'
import bin from '../../img/icon/bin.png'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  const { freight, setFreight } = useContext(FreightContext)
  const [total, setTotal] = useState(0);
  const [cep, setCep] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    setTotal(totalPrice)
  }, [cart])

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

  const changeCep = (e) => {
    let value = e.target.value
    if ((/^\d+$/.test(value) && value.length <= 8) || value == "") {
      setCep(value)
    } else {
      console.log("Nao numerico")
    }
  }
  const calcFreight = () => {
    if (cep.length == 8) {
      setError("")
      setFreight(Math.random() * (30 - 15) + 15)
    } else {
      setError("CEP informado é inválido")
    }
  }

  const finalizeOrder = () => {
    if(freight > 1){
      navigate('/payment')
    }else{
      alert("Calcule o valor do frete antes de finalizar a compra")
    }
  }

  return (
    <div>
      {cart.length > 0 ? <div className='cart-body'>
        <h2 className='cart-title'>Carrinho de Compras</h2>
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
                      <p><strong>Marca: </strong>Nike</p>
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
                          <p>R$ {(product.quantity * product.price).toFixed(2)}</p>
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
          <div className='payment-itens'>
            <div className='payment-cart'>
              <h2 className='payment-resume'>Resumo</h2>
              <div className='payment-subtotal'>
                <p>Subtotal</p>
                <p className='subtotal-value'>R$ {(total).toFixed(2)}</p>
              </div>
              {freight != 0 && <div className='freight'>
                <p>Frete</p>
                <p >R$ {(freight).toFixed(2)}</p>
              </div>
              }
              {freight != 0 && <div className='payment-total'>
                <p>Total</p>
                <p className='payment-value'>R$ {(total+ freight).toFixed(2) }</p>
              </div>}
              <div className='payment-pix'>
                <p className='pix-method'>à vista</p>
                <h2>R$ {((total+ freight) * 0.9).toFixed(2)}</h2>
                <p className='pix-discount'>no PIX com 10% de desconto</p>
              </div>
              <div className='card-method'>
                <h2>R$ {(total+ freight).toFixed(2)}</h2>
                <p>em até 6x de R$ {((total + freight)/6).toFixed(2)} sem juros no cartão</p>
              </div>
              <button className='btn-cart' onClick={finalizeOrder}>Finalizar Pedido</button>
            </div>
            <div className='payment-freight'>
              <h2 className='payment-resume'>Calcular frete</h2>
              <label>
                CEP
                <input type='text' value={cep} onChange={(e) => { changeCep(e) }}></input>
              </label>
              {freight != 0 && <h4 className='freight-value'>Valor do frete: R$ {freight.toFixed(2)}</h4>}
              {error != "" && <h4 className='freight-erro'>{error}</h4>}
              <button className='btn-cart' onClick={calcFreight}>Calcular</button>
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