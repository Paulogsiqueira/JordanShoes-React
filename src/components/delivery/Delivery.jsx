import { useState, useContext} from 'react';
import AddressDetails from './AddressDetails/AddressDetails';
import { OrderDetailsContext } from '../../context/OrderDetailsContext';
import FindCep from './FindCep/FindCep';
import truck from '../../img/icon/truck.png'
import check from '../../img/icon/check.png'
import './Delivery.css'

const Address = () => {
    const [completedDetails, setCompletedDetails] = useState(false)
    const { orderDetails, setOrderDetails } = useContext(OrderDetailsContext)

    return (
        <div className='delivery-page'>
            <div className='delivery-title'>
                <img src={truck} />
                <h2>Preencha os dados para entrega</h2>
            </div>
            <div className='delivery-page__itens'>
                <div className='delivery-type'>
                    <div >
                        <div className={orderDetails == true ? 'delivery-option__checked': 'delivery-option'}>
                            <p>Dados para Entrega</p>
                            {orderDetails == true && <img src={check}/>}
                        </div>
                        <div style={{ display: orderDetails ? 'none' : 'block' }}>
                            <FindCep />
                            <AddressDetails />
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Address