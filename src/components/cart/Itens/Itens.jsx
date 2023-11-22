import { useDispatch,useSelector } from 'react-redux'
import { addCart,removeCart,deleteCart } from '@/redux/useSlicer'
import fallBackImage from '@/img/icon/no-image.png'
import bin from '@/img/icon/bin.png'
import './Itens.css'

const Itens = () => {
    const user = useSelector(state => state.user)
    const cart = user.cart
    const dispatch = useDispatch()

    return (
        <div className='cart-itens'>
            <ul >
                {cart.map((product, index) => (
                    <li key={index} >
                        <div className='cart-item'>
                            <section className='item-img'>
                                <img src={product.payload.img} alt="Foto do tenis selecionado" onError={(e) => { e.target.onerror = null; e.target.src=fallBackImage; }} />
                            </section>
                            <section className='item-desc'>
                                <h3>{product.payload.name}</h3>
                                <p className='text-desc'>{product.payload.description}</p>
                                <p className='item-brand'><strong>Marca: </strong>Nike</p>
                            </section>
                            <section className='item-options'>
                                <div className='item-options__quantity'>
                                    <div className='quantity-title'>
                                        Qtd
                                    </div>
                                    <div className='item-options__btn'>
                                        <p className='btn-quantity' onClick={() => (dispatch(removeCart(product.payload)))}>-</p>
                                        <p className='item-quantity'>{product.quantity}</p>
                                        <p className='btn-quantity' onClick={() => (dispatch(addCart(product.payload)))}>+</p>
                                    </div>
                                </div>
                                <div className='item-options__price'>
                                    <div className='price-title' >
                                        Preço
                                    </div>
                                    <div className='item-price'>
                                        <p>R$ {(product.quantity * product.payload.price).toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className='delete-item'>
                                    <img src={bin} alt="Lixeira" onClick={() => (dispatch(deleteCart(product)))} />
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