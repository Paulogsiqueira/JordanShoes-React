import './Resume.css'
import { FreightContext } from '../../../context/FreightContext';
import { CartContext } from '../../../context/CartContext';
import { useState, useContext, useEffect } from 'react'
import { calcPrice } from '../../../methods/price';

const Resume = () => {
    const { freight, setFreight } = useContext(FreightContext)
    const { cart, setCart } = useContext(CartContext)
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = calcPrice(cart);
        setTotal(totalPrice)
    }, [cart]);

    return (
        <div>
            <div className='payment-itens-order'>
                <div className='payment-cart-order'>
                    <h2 className='payment-resume'>Resumo</h2>
                    <div className='payment-subtotal'>
                        <p>Subtotal</p>
                        <p>R$ {(total).toFixed(2)}</p>
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
    )
}

export default Resume