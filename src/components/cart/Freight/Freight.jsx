import { FreightContext } from '../../../context/FreightContext';
import { useState, useContext, useEffect } from 'react'
import './Freight.css'

const Freight = () => {
    const { freight, setFreight } = useContext(FreightContext)
    const [cep, setCep] = useState("");
    const [error, setError] = useState("")

    const changeCep = (e) => {
        let value = e.target.value
        if ((/^\d+$/.test(value) && value.length <= 8) || value == "") {
            if(value.length == 8){
                value = value.slice(0, 5) + '-' + value.slice(5);
            }
            setCep(value)
        } else {
            console.log("Nao numerico")
        }
    }

    const calcFreight = () => {
        if (cep.length == 8) {
            setError("")
            setFreight(Math.random() * (30 - 15) + 15)
        } else {
            setError("CEP informado é inválido")
        }
    }

    return (
        <div>
            <div className='payment-freight'>
                <h2 className='calc-freight'>Calcular frete</h2>
                <label>
                    CEP
                    <input type='text' value={cep} onChange={(e) => { changeCep(e) }}></input>
                </label>
                {freight != 0 && <h4 className='freight-value'>Valor do frete: R$ {freight.toFixed(2)}</h4>}
                {error != "" && <h4 className='freight-erro'>{error}</h4>}
                <button className='btn-freight' onClick={calcFreight}>Calcular</button>
            </div>
        </div>
    )
}

export default Freight