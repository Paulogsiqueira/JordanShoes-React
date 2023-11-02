import { CartContext } from '../../../context/CartContext';
import { FreightContext } from '../../../context/FreightContext';
import { useState, useContext, useEffect } from 'react'
import bin from '../../../img/icon/bin.png'
import './Itens.css'

const Itens = () => {
    const { cart, setCart } = useContext(CartContext)
    const { freight, setFreight } = useContext(FreightContext)
    const [total, setTotal] = useState(0);

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

    return (
        <div className='cart-itens'>
            <ul >
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
    )
}

export default Itens