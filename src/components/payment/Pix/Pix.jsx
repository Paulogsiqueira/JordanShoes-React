import './Pix.css'
import { FreightContext } from '../../../context/FreightContext';
import { CartContext } from '../../../context/CartContext';
import { useState, useContext, useEffect } from 'react'
import pix from '../../../img/payment/pix.png'

const Pix = () => {
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
        <div>
            <div className="payment-pix">
                <div className='pix-img'>
                    <img src={pix} alt="Código pix" />
                </div>
                <div>
                    <h2>Valor: R${((total + freight) * 0.9).toFixed(2)}</h2>
                </div>
                <div className='pix-data'>
                    <h3>Dados para PIX manual</h3>
                    <p><strong>Nome:</strong> Paulo Gustavo Siqueira</p>
                    <p><strong>CNPJ:</strong> 94.688.382/0001-31</p>
                    <p><strong>Banco:</strong> Bradesco S.A</p>
                    <p><strong>Agência:</strong> 1799</p>
                    <p><strong>Conta: </strong>5703 4128 1759 2321</p>
                </div>
            </div>
        </div>
    )
}

export default Pix