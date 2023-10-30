import { FreightContext } from '../../../context/FreightContext';
import { CartContext } from '../../../context/CartContext';
import { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import './CreditCart.css'
import Flag from './Flag/Flag';

const CreditCart = () => {
    const { freight, setFreight } = useContext(FreightContext)
    const { cart, setCart } = useContext(CartContext)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [titular, setTitular] = useState("")
    const [cpf, setCpf] = useState("")
    const [cpfError, setCpfError] = useState("")
    const [number, setNumber] = useState("")
    const [validity, setValidity] = useState("")
    const [cvv, setCvv] = useState("")
    const [total, setTotal] = useState(0);


    console.log(errors)
    const onSubmit = () => {
        console.log(data)
    }


    const handleCpf = (e) => {
        let cpfValue = e.target.value;
        if ((/^\d+$/.test(cpfValue) && cpfValue.length <= 11) || cpfValue == "" || (cpfValue.length === 12 || cpfValue.length === 13 || cpfValue.length === 14)) {
            if (cpfValue.length == 11) {
                let cpfFormat = cpfValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
                setCpf(cpfFormat)
                if (validarCPF(cpfFormat)) {
                    setCpfError("")
                } else {
                    setCpfError("CPF inválido")
                }
            } else {
                cpfValue = cpfValue.replace(/\D/g, '');
                setCpf(cpfValue)
            }
        } else {
            console.log("Nao numerico")
        }
    }

    const handleNumber = (e) => {
        let numero = e.target.value
        console.log(numero.length)
        if ((/^\d+$/.test(numero) && numero.length <= 16) || numero.length == "" || (numero.length == 17 || numero.length == 18 || numero.length == 16)) {
            if (numero.length == 16) {
                let numberFormat = numero.toString().replace(/(\d{4})/g, '$1 ')
                numberFormat = numberFormat.trim()
                console.log(numberFormat)
                setNumber(numberFormat)
            } else {
                numero = numero.replace(/\s/g, '');
                setNumber(numero)
            }
        } else {
            console.log("Numero invalido")
        }
    }

    const handleValidity = (e) => {
        let validade = e.target.value;
        console.log(validade.length)
        if ((/^\d+$/.test(validade) && validade.length <= 5) || validade.length == 6 || validade == "") {
            if ((validade.replace('/', '')).length == 6) {
                let validityFormat = validade.toString().replace(/^(.{2})(.*)$/, '$1/$2');
                setValidity(validityFormat)
            } else {
                validade = validade.replace('/', '');
                setValidity(validade)
            }
        } else {
            console.log("Data inválida")
        }
    }

    const handleCvv = (e) => {
        let value = e.target.value;
        if (/^\d+$/.test(value) || value == "") {
            setCvv(value)
        } else {
            console.log("Cvv inválida")
        }

    }

    function validarCPF(cpf) {
        cpf = cpf.replace(/\D/g, '');

        if (cpf.length !== 11) {
            return false;
        }
        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let primeiroDigito = 11 - (soma % 11);

        primeiroDigito = primeiroDigito > 9 ? 0 : primeiroDigito;

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let segundoDigito = 11 - (soma % 11);

        segundoDigito = segundoDigito > 9 ? 0 : segundoDigito;

        if (parseInt(cpf.charAt(9)) === primeiroDigito && parseInt(cpf.charAt(10)) === segundoDigito) {
            return true;
        } else {
            return false;
        }
    }

    useEffect(() => {
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            totalPrice += cart[i].price * cart[i].quantity;
        }
        setTotal(totalPrice)
    }, []);

    return (
        <div>
            <form className='payment-creditcard'>
                <Flag />
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Titular</p>
                        <input type="text" placeholder='Digite o nome do titular' {...register("name", { required: true, minLength: 10, pattern: /^[a-zA-Z\s]*$/ })} />
                    </div>
                    <div className='creditcard-error'>
                        {errors?.name?.type == 'required' && <p >Preenchimento do campo obrigatório</p>}
                        {errors?.name?.type == 'minLength' && <p >Nome do titular inválido</p>}
                        {errors?.name?.type == 'pattern' && <p >Nome do titular inválido</p>}
                    </div>
                </label>
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>CPF</p>
                        <input type="text" placeholder='Digite o CPF do titular' required value={cpf} onChange={(e) => { handleCpf(e) }} />
                    </div>
                    <div className='credicard-error'>

                    </div>
                </label>
                {cpfError != "" && <p className="error">{cpfError}</p>}
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Número do cartão</p>
                        <input type="text" placeholder='Digite o número do cartão' required value={number} onChange={(e) => { handleNumber(e) }} />
                    </div>
                    <div className='credicard-error'>

                    </div>
                </label>
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Validade (MM/AAAA)</p>
                        <input type="text" required value={validity} onChange={(e) => { handleValidity(e) }} />
                    </div>
                    <div className='credicard-error'>

                    </div>
                </label>
                <label className='creditcard-label'>
                    <div className='creditcard-input'>
                        <p>Código (CVV)</p>
                        <input type="password" maxLength="3" required value={cvv} onChange={(e) => { handleCvv(e) }} />
                    </div>
                    <div className='credicard-error'>

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

export default CreditCart