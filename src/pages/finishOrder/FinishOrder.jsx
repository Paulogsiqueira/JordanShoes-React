import Address from "../../components/address/Address"
import Payment from "../../components/payment/Payment"
import Resume from "../../components/payment/Resume/Resume"
import './finishOrder.css'


const finishOrder = () => {
    return (
        <div className="finishOrder-page">
            <div className="payment-component">
                <Address/>
                <Payment />
            </div>
            <div className="resume-component">
                <Resume />
            </div>
        </div>

    )
}

export default finishOrder