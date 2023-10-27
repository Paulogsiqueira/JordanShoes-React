import './Payment.css'
import payment from '../../img/icon/payment.png'
import { FreightContext } from '../../context/FreightContext';
import { CartContext } from '../../context/CartContext';
import { useState, useContext, useEffect } from 'react'


const Payment = () => {
    const { freight, setFreight } = useContext(FreightContext)
    const { cart, setCart } = useContext(CartContext)
    const [total, setTotal] = useState(0);


    useEffect(() => {
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            totalPrice += cart[i].price * cart[i].quantity;
        }
        setTotal(totalPrice)
    }, []);



    return (
        <div className='payment-page'>
            <div className='payment-title'>
                <img src={payment} />
                <h2>Escolha a forma de pagamento</h2>
            </div>
            <div className='payment-page__itens'>
                <div className='payment-type'>
                    <form >
                        <div className='payment-option'>
                            <input type="radio" id="cartao" name="pagamento" value="cartao" />
                            <label for="cartao">Cartão de Crédito</label>
                        </div>
                        <div>
                            <form className='payment-creditcard'>
                                <label className='creditcard-label'>
                                    <p>Titular</p>
                                    <input type="text" placeholder='Digite o nome do titular' />
                                </label>
                                <label className='creditcard-label'>
                                    <p>CPF</p>
                                    <input type="text" placeholder='Digite o CPF do titular' />
                                </label>
                                <label className='creditcard-label'>
                                    <p>Número do cartão</p>
                                    <input type="text" placeholder='Digite o número do cartão' />
                                </label>
                                <label className='creditcard-label'>
                                    <p>Validade (MM/AAAA)</p>
                                    <input type="text" />
                                </label>
                                <label className='creditcard-label'>
                                    <p>Código (CVV)</p>
                                    <input type="password" maxlength="3" />
                                </label>
                                <label className='creditcard-label'>
                                    <p>Parcela</p>
                                    <select>
                                        <option>1x de R${((total + freight)).toFixed(2)} (sem juros)</option>
                                        <option>2x de R${((total + freight) / 2).toFixed(2)} (sem juros)</option>
                                        <option>3x de R${((total + freight) / 3).toFixed(2)} (sem juros)</option>
                                        <option>4x de R${((total + freight) / 4).toFixed(2)} (sem juros)</option>
                                        <option>5x de R${((total + freight) / 5).toFixed(2)} (sem juros)</option>
                                        <option>6x de R${((total + freight) / 6).toFixed(2)} (sem juros)</option>
                                    </select>
                                </label>
                                <div className='btn-payment__div'>
                                    <button className='btn-payment'>Concluir Pagamento</button>
                                </div>
                            </form>
                        </div>

                        <div className='payment-option'>
                            <input type="radio" id="pix" name="pagamento" value="pix" />
                            <label for="pix">Pix</label>
                        </div>
                        <div className='payment-option'>
                            <input type="radio" id="boleto" name="pagamento" value="boleto" />
                            <label for="boleto">Boleto</label>
                        </div>
                    </form>
                </div>
                <div className='payment-itens-order'>
                    <div className='payment-cart-order'>
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
                            <p className='payment-value'>R$ {(total + freight).toFixed(2)}</p>
                        </div>}
                        <div className='payment-pix'>
                            <p className='pix-method'>à vista</p>
                            <h2>R$ {((total + freight) * 0.9).toFixed(2)}</h2>
                            <p className='pix-discount'>no PIX com 10% de desconto</p>
                        </div>
                        <div className='card-method'>
                            <h2>R$ {(total + freight).toFixed(2)}</h2>
                            <p>em até 6x de R$ {((total + freight) / 6).toFixed(2)} sem juros no cartão</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment