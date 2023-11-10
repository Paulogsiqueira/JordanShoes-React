import { useState } from 'react'
import payment from '@/img/icon/payment.png'
import CreditCard from './CreditCard/CreditCard';
import Pix from '@/components/payment/Pix/Pix';
import './Payment.css'

const Payment = () => {
    const [paymentOption, setPaymentOption] = useState("")

    return (
            <div className='payment-page'>
                <div className='payment-title'>
                    <img src={payment} />
                    <h2>Escolha a forma de pagamento</h2>
                </div>
                <div className='payment-page__itens'>
                    <div className='payment-type'>
                        <div >
                            <div className='payment-option'>
                                <input type="radio" id="cartao" name="pagamento" value="cartao" onClick={() => (setPaymentOption("cart"))} />
                                <label htmlFor="cartao">Cartão de Crédito</label>
                            </div>
                            <div style={{ display: paymentOption == "cart" ? 'block' : 'none' }}>
                                <CreditCard />
                            </div>

                            <div className='payment-option'>
                                <input type="radio" id="pix" name="pagamento" value="pix" onClick={() => (setPaymentOption("pix"))} />
                                <label htmlFor="pix">Pix</label>
                            </div>
                            <div style={{ display: paymentOption == "pix" ? 'block' : 'none' }}>
                                <Pix />
                            </div>
                        </div>
                    </div>
                    <div className='order-resume'>
                        
                    </div>
                </div>
            </div>
    )
}

export default Payment