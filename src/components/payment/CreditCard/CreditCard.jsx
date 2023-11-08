import { FreightContext } from '../../../context/FreightContext';
import { CartContext } from '../../../context/CartContext';
import { OrderDetailsContext } from '../../../context/OrderDetailsContext';
import { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { handleInputChange, handleInputChangeCpf, handleInputChangeNumber, handleInputChangeValidity, validarCPF, validarCartao } from '../../../methods/form';
import Flag from './Flag/Flag.jsx'
import './CreditCard.css'
import { useNavigate } from 'react-router-dom';


const CreditCard = () => {
    const { freight, setFreight } = useContext(FreightContext)
    const { cart, setCart } = useContext(CartContext)
    const { orderDetails, setOrderDetails } = useContext(OrderDetailsContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [total, setTotal] = useState(0);
    const [flag, setFlag] = useState("")
    const navigate = useNavigate()


    useEffect(() => {
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            totalPrice += cart[i].price * cart[i].quantity;
        }
        setTotal(totalPrice)
    }, []);

    const onSubmit = () => {
        setCart([])
        setFreight(0)
        setOrderDetails(false)
        navigate('/paymentComplete')
    }

    const selectCardFlag = (e) => {
        let number = e.target.value
        number = number.replace(/\D/g, '');
        if (number[0] == 3 && number.length == 15) {
            setFlag("Amex")
        } else if ((number[0] > 3 && number[0] < 7) && number.length == 16) {
            if (number[0] == 4) {
                setFlag("Visa")
            } else if (number[0] == 5) {
                setFlag("Mastercard")
            } else if (number[0] == 6) {
                setFlag("Discover")
            }
        } else {
            setFlag("")
        }
    }
    return (
        <div>
            <form className='payment-creditcard'>
                <Flag selected={flag} />
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Titular</p>
                        <input type="text" placeholder='Digite o nome do titular' {...register("name", { required: true, minLength: 10, pattern: /^[a-zA-Z\s]*$/ })} />
                    </div>
                    <div className='form-error'>
                        {errors?.name?.type == 'required' && <p >Preenchimento do campo obrigatório</p>}
                        {errors?.name?.type == 'minLength' && <p >Nome do titular inválido</p>}
                        {errors?.name?.type == 'pattern' && <p >Nome do titular inválido</p>}
                    </div>
                </label>
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>CPF</p>
                        <input type="text" placeholder='Digite o CPF do titular' {...register("cpf", { required: true, length: 11, validate: (value) => validarCPF(value), onChange: handleInputChangeCpf })} />
                    </div>
                    <div className='form-error'>
                        {errors?.cpf?.type == 'required' && <p >Preenchimento do campo obrigatório</p>}
                        {errors?.cpf?.type == 'length' && <p >Documento inválido</p>}
                        {errors?.cpf?.type == 'validate' && <p >Documento inválido</p>}
                    </div>
                </label>
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Número do cartão</p>
                        <input type="text" placeholder='Digite o número do cartão' {...register("number", { required: true, validate: (value) => validarCartao(value), onChange: handleInputChangeNumber })} onInput={(e) => selectCardFlag(e)} />
                    </div>
                    <div className='form-error'>
                        {errors?.number?.type == 'required' && <p >Preenchimento do campo obrigatório</p>}
                        {errors?.number?.type == 'minLength' && <p >Número inválido</p>}
                        {errors?.number?.type == 'maxLength' && <p >Número inválido</p>}
                        {errors?.number?.type == 'validate' && <p >O número informado não pertence a nenhuma bandeira que trabalhamos</p>}
                    </div>
                </label>
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Validade</p>
                        <input type="text" placeholder='(MM/AAAA)' {...register("validity", { required: true, minLength: 6, maxLength: 8, pattern: /^(?=(?:\D*\d){1,6}\D*$)/, onChange: handleInputChangeValidity })} />
                    </div>
                    <div className='form-error'>
                        {errors?.validity?.type == 'required' && <p >Preenchimento do campo obrigatório</p>}
                        {errors?.validity?.type == 'minLength' && <p >Data inválida</p>}
                        {errors?.validity?.type == 'maxLength' && <p >Data inválida</p>}
                        {errors?.validity?.type == 'pattern' && <p >Data inválida</p>}
                    </div>
                </label>
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Código (CVV)</p>
                        <input type="password" {...register("cvv", { required: true, minLength: 3, maxLength: 3, pattern: /^\d+$/, onChange: handleInputChange })} />
                    </div>
                    <div className='form-error'>
                        {errors?.cvv?.type == 'required' && <p >Preenchimento do campo obrigatório</p>}
                        {errors?.cvv?.type == 'minLength' && <p >Código inválido</p>}
                        {errors?.cvv?.type == 'maxLength' && <p >Código inválido</p>}
                    </div>
                </label>
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Parcela</p>
                        <select>
                            <option>1x de R${((total + freight)).toFixed(2)} (sem juros)</option>
                            <option>2x de R${((total + freight) / 2).toFixed(2)} (sem juros)</option>
                            <option>3x de R${((total + freight) / 3).toFixed(2)} (sem juros)</option>
                            <option>4x de R${((total + freight) / 4).toFixed(2)} (sem juros)</option>
                            <option>5x de R${((total + freight) / 5).toFixed(2)} (sem juros)</option>
                            <option>6x de R${((total + freight) / 6).toFixed(2)} (sem juros)</option>
                            <option>7x de R${((total + freight) / 7 * 1.04).toFixed(2)} (4% de juros)</option>
                            <option>8x de R${((total + freight) / 8 * 1.08).toFixed(2)} (8% de juros)</option>
                            <option>9x de R${((total + freight) / 9 * 1.12).toFixed(2)} (12% de juros)</option>
                            <option>10x de R${((total + freight) / 10 * 1.16).toFixed(2)} (16% de juros)</option>
                        </select>
                    </div>
                    <div className='credicard-error'>

                    </div>
                </label>
                <div className='btn-payment__div'>
                    <button className='btn-payment' onClick={() => handleSubmit(onSubmit)()}>Concluir Pagamento</button>
                </div>
            </form>
        </div>
    )
}
export default CreditCard