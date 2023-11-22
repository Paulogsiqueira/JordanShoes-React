import { useSelector } from 'react-redux'
import { calcPrice2 } from '@/utils/price';
import './Resume.css'

const Resume = () => {
    const user = useSelector(state => state.user)
    let freight = user.freight.payload > 1 ? Number(user.freight.payload) : 0;
    const cart = user.cart
    const { totalPrice } = calcPrice2(cart);

    const finalPrice = (freight + totalPrice).toFixed(2)

    return (
        <div>
            <div className='payment-itens-order'>
                <div className='payment-cart-order'>
                    <h2 className='payment-resume'>Resumo</h2>
                    <div className='payment-subtotal'>
                        <p>Subtotal</p>
                        <p>R$ {totalPrice.toFixed(2)}</p>
                    </div>
                    {freight > 2 && <div className='freight'>
                        <p>Frete</p>
                        <p >R$ {freight.toFixed(2)}</p>
                    </div>
                    }
                    {freight != 0 && <div className='payment-total'>
                        <p>Total</p>
                        <p className='payment-value'>R$ {finalPrice}</p>
                    </div>}
                    <div className='payment-pix'>
                        <p className='pix-method'>à vista</p>
                        <h2>R$ {((finalPrice) * 0.9).toFixed(2)}</h2>
                        <p className='pix-discount'>no PIX com 10% de desconto</p>
                    </div>
                    <div className='card-method'>
                        <h2>R$ {finalPrice}</h2>
                        <p>em até 6x de R$ {((finalPrice) / 6).toFixed(2)} sem juros no cartão</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume