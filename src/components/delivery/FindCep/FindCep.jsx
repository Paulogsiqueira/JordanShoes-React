import { handleInputChangeCep } from '../../../methods/form';
import { AddressContext } from '../../../context/AddressContext';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react'
import './FindCep.css'


const FindCep = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { address, setAddress } = useContext(AddressContext)
    const { cepError, setCepError } = useState("")

    const onSubmit = (data) => {
        queryCEP(data.cepNumber)
    }

    const queryCEP = (cep) => {

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert("CEP não encontrado");
                } else {
                    setAddress(data)
                }
            })
            .catch(error => {
                console.error("Ocorreu um erro na consulta de CEP:");
            });
    }

    return (
        <div>
            <form className='cep-form' onSubmit={handleSubmit(onSubmit)}>
                <label className='cep-label'>
                    <div className='cep-input'>
                        <p>CEP</p>
                        <input type='text' {...register("cepNumber", { required: true, minLength: 8, maxLength: 9, onChange: handleInputChangeCep })} />
                    </div>
                    <div className='cep-error'>
                        {cepError != "" && <p>{cepError}</p>}
                        {errors?.cepNumber?.type == 'required' && <p >Campo obrigatório</p>}
                        {errors?.cepNumber?.type == 'minLength' && <p >CEP inválido</p>}
                        {errors?.cepNumber?.type == 'maxLength' && <p >CEP inválido</p>}
                    </div>
                </label>
                <button className='btn-cep' type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default FindCep