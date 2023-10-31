import { FreightContext } from '../../../context/FreightContext';
import { useState, useContext, useEffect } from 'react'
import { handleInputChangeCep } from '../../../methods/form';
import { useForm } from 'react-hook-form';
import './Freight.css'

const Freight = () => {
    const { freight, setFreight } = useContext(FreightContext)
    const { register, handleSubmit, formState: { errors } } = useForm()



    const onSubmit = () => {
       setFreight(Math.random() * 15 + 15)
    }

    return (
        <div>
            <div className='payment-freight'>
                <h2 className='calc-freight'>Calcular frete</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        CEP
                        <input type='text' {...register("cep", { required: true, minLength: 8, onChange:handleInputChangeCep })} />
                        {freight >14 && <p className='freight-value'>Valor do frete: R$ {(freight).toFixed(2)}</p>}
                        <div className='form-error'>
                            {errors?.cep?.type == 'required' && <p >Campo obrigatório</p>}
                            {errors?.cep?.type == 'minLength' && <p >CEP inválido</p>}
                        </div>
                    </label>
                    <button className='btn-freight' type="submit">Calcular</button>
                </form>

            </div>
        </div>
    )
}

export default Freight