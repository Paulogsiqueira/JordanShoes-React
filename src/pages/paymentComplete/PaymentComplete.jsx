import { useNavigate } from 'react-router-dom';
import checked from '../../img/icon/checked.png';
import './PaymentComplete.css'

const PaymentComplete = () => {
    const navigate = useNavigate()

    return (
        <div className='paymentComplete'>
            <img src={checked} />
            <h1>Pedido Confirmado</h1>
            <p>O pagamento foi aprovado e seu pedido foi realizado com sucesso!</p>
            <div className='paymentComplete-button'>
                <button className='btn-cep' onClick={() => {navigate('/')}}>Tela Inicial</button>
            </div>
        </div>
    )
}

export default PaymentComplete