import AddressDetails from './AddressDetails/AddressDetails';
import FindCep from './FindCep/FindCep';
import truck from '../../img/icon/truck.png'
import check from '../../img/icon/check.png'
import './Delivery.css'

const Address = ({ completeAddress, setCompleteAddress }) => {

    return (
        <div className='delivery-page'>
            <div className='delivery-title'>
                <img src={truck} />
                <h2>Preencha os dados para entrega</h2>
            </div>
            <div className='delivery-type'>
                <div >
                    <div className={completeAddress == true ? 'delivery-option__checked' : 'delivery-option'}>
                        <p>Dados para Entrega</p>
                        {completeAddress == true && <img src={check} />}
                    </div>
                    <div style={{ display: completeAddress ? 'none' : 'block' }}>
                        <FindCep />
                        <AddressDetails setCompleteAddress={setCompleteAddress} />
                    </div >
                </div >

            </div >
        </div >
    )
}

export default Address