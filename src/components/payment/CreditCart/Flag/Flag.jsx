import visa from '../../../../img/payment/visa.png'
import paypal from '../../../../img/payment/paypal.png'
import amex from '../../../../img/payment/amex.png'
import discover from '../../../../img/payment/discover.png'
import mastercard from '../../../../img/payment/mastercard.png'
import './Flag.css'

const Flag = ({selected}) => {
    return (
        <div className='creditcard-inputs'>
            <fieldset className="radio-image">
                <label htmlFor="Visa">
                    <input type="radio" name="flag" id="Visa" value="Visa" required/>
                    <img  src={visa} className={selected === "Visa" ? "input-checked" : "input-unchecked"} alt="Visa" />
                </label>
                <label htmlFor="Mastercard">
                    <input type="radio" name="flag" id="Mastercard" value="Mastercard" required/>
                    <img src={mastercard} className={selected === "Mastercard" ? "input-checked" : "input-unchecked"} alt="Mastercard" />
                </label>
                <label htmlFor="Amex">
                    <input type="radio" name="flag" id="Amex" value="Amex" required/>
                    <img src={amex} className={selected === "Amex" ? "input-checked" : "input-unchecked"} alt="Amex" />
                </label>
                <label htmlFor="Discover">
                    <input type="radio" name="flag" id="Discover" value="Discover" required/>
                    <img src={discover} className={selected === "Discover" ? "input-checked" : "input-unchecked"} alt="Discover" />
                </label>
            </fieldset>
        </div>
    )
}

export default Flag