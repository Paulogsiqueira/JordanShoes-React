import visa from '../../../../img/payment/visa.png'
import paypal from '../../../../img/payment/paypal.png'
import amex from '../../../../img/payment/amex.png'
import discover from '../../../../img/payment/discover.png'
import mastercard from '../../../../img/payment/mastercard.png'
import './Flag.css'

const Flag = () => {
    return (
        <div className='creditcard-inputs'>
            <p>Seleciona a bandeira</p>
            <fieldset className="radio-image">
                <label htmlFor="Visa">
                    <input type="radio" name="flag" id="Visa" value="Visa" required />
                    <img src={visa} alt="Visa" />
                </label>
                <label htmlFor="Mastercard">
                    <input type="radio" name="flag" id="Mastercard" value="Mastercard" required />
                    <img src={mastercard} alt="Mastercard" />
                </label>
                <label htmlFor="Paypal">
                    <input type="radio" name="flag" id="Paypal" value="Paypal" required />
                    <img src={paypal} alt="Paypal" />
                </label>
                <label htmlFor="Amex">
                    <input type="radio" name="flag" id="Amex" value="Amex" required />
                    <img src={amex} alt="Amex" />
                </label>
                <label htmlFor="Discover">
                    <input type="radio" name="flag" id="Discover" value="Discover" required />
                    <img src={discover} alt="Discover" />
                </label>
            </fieldset>
        </div>
    )
}

export default Flag