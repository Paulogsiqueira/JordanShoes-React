import Delivery from "@/components/delivery/Delivery"
import Payment from "@/components/payment/Payment"
import Resume from "@/components/payment/Resume/Resume"
import { useState } from "react"
import './FinishOrder.css'

const finishOrder = () => {
    const [ completeAddress,setCompleteAddress] = useState(false)
    return (
        <div className="finishOrder-page">
            <div className="payment-component">
                <Delivery completeAddress={completeAddress} setCompleteAddress={setCompleteAddress}/>
                {completeAddress == true && <Payment />}
            </div>
            <div className="resume-component">
                <Resume />
            </div>
        </div>

    )
}

export default finishOrder