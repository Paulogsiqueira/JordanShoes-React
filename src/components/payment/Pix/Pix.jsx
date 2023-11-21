import { resetFreight,resetCart } from '@/redux/useSlicer'
import { useDispatch,useSelector } from 'react-redux'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { calcPrice2 } from '@/utils/price';
import Modal from 'react-modal';
import close from '@/img/icon/close.png';
import complete from '@/img/icon/complete.png';
import pix from '@/img/payment/pix.png'
import './Pix.css'

const Pix = () => {
    const user = useSelector(state => state.user)
    let freight = Number(user.freight.payload)
    const cart = user.cart
    const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false)
    const { totalPrice } = calcPrice2(cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handlePayment = () => {
        dispatch(resetFreight())
        dispatch(resetCart())
        openModalError()
    }

    const openModalError = () => {
        setModalErrorIsOpen(true)
    }

    const closeModal = () => {
        setModalErrorIsOpen(false)
        navigate("/")

    }

    return (
        <div>
            <div className="payment-pix">
                <div className='pix-img'>
                    <img src={pix} alt="Código pix" />
                </div>
                <div>
                    <h2>Valor: R${((totalPrice + freight) * 0.9).toFixed(2)}</h2>
                </div>
                <div className='pix-data'>
                    <h3>Dados para PIX manual</h3>
                    <p><strong>Nome:</strong> Paulo Gustavo Siqueira</p>
                    <p><strong>CNPJ:</strong> 94.688.382/0001-31</p>
                    <p><strong>Banco:</strong> Bradesco S.A</p>
                    <p><strong>Agência:</strong> 1799</p>
                    <p><strong>Conta: </strong>5703 4128 1759 2321</p>
                </div>
                <p>Após realizar o pagamento, clique no botão abaixo</p>
                <button className='btn-pix' onClick={handlePayment}>Pagamento realizado!</button>
            </div>
            <Modal
                isOpen={modalErrorIsOpen}
                onRequestClose={closeModal}
                className='modal-content'>
                <div className='modal'>
                    <div className='modal-close'>
                        <button onClick={closeModal}><img src={close} /></button>
                    </div>
                    <div className='modalPix'>
                        <img src={complete} />
                        <h3>Agredecemos pela preferência</h3>
                        <p>Assim que o pedido for aprovado você será notificado por e-mail</p>
                    </div>
                    <div className='modal-btn'>
                        <button onClick={closeModal} className='modal-btn__cart'>OK</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Pix