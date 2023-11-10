import Delivery from "@/components/delivery/Delivery"
import Payment from "@/components/payment/Payment"
import Resume from "@/components/payment/Resume/Resume"
import './FinishOrder.css'

const finishOrder = () => {
    return (
        <div className="finishOrder-page">
            <div className="payment-component">
                <Delivery/>
                <Payment />
            </div>
            <div className="resume-component">
                <Resume />
            </div>
        </div>

    )
}

export default finishOrder