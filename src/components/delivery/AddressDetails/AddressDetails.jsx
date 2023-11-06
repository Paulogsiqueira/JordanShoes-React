import { handleInputChangeCell } from '../../../methods/form';
import { AddressContext } from '../../../context/AddressContext';
import { OrderDetailsContext } from '../../../context/OrderDetailsContext';
import { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import './AddressDetails.css'

const AddressDetails = () => {
    const { address, setAddress } = useContext(AddressContext)
    const { orderDetails, setOrderDetails } = useContext(OrderDetailsContext)
 
    const { register, handleSubmit, formState: { errors },setValue } = useForm()

    const onSubmit = (data) => {
        setOrderDetails(true)
    }

    useEffect(() => {
        if (address.logradouro) {
            setValue('street', address.logradouro)
        }
        if (address.localidade) {
            setValue('city',address.localidade);
        }
        if (address.uf) {
            setValue('state',address.uf);
        }
        if (address.bairro) {
            setValue('district',address.bairro);
        }
    }, [address])

    return (
        <div>
            <form className='address-form' onSubmit={handleSubmit(onSubmit)}>
                <label className='address-label'>
                    <div className='address-input'>
                        <div className='details-input'>
                            <p>Logradouro</p>
                            <input type="text" placeholder='Digite o logradouro' {...register("street", { required: true})} readOnly />
                        </div>
                        <div className='details-error'>
                            {errors?.street?.type == 'required' && <p >Campo obrigatório</p>}
                        </div>
                    </div>
                    <div className='address-input'>
                        <div className='details-input'>
                            <p>Número</p>
                            <input type="text" placeholder='Digite o Número' {...register("number", { required: true, pattern: /^[0-9]+$/ })} />
                        </div>
                        <div className='details-error'>
                            {errors?.number?.type == 'required' && <p >Campo obrigatório</p>}
                            {errors?.number?.type == 'pattern' && <p >Número inválido</p>}
                        </div>
                    </div>
                </label>
                <label className='address-label'>
                    <div className='address-input'>
                        <div className='details-input'>
                            <p>Bairro</p>
                            <input type="text" placeholder='Digite o nome do bairro' {...register("district", { required: true})} readOnly />
                        </div>
                        <div className='details-error'>
                            {errors?.district?.type == 'required' && <p >Campo obrigatório</p>}
                        </div>
                    </div>
                    <div className='address-input'>
                        <div className='details-input'>
                            <p>Complemento</p>
                            <input type="text" placeholder='Digite o nome do complemento' />
                        </div>
                    </div>
                </label>
                <label className='address-label'>
                    <div className='address-input'>
                        <div className='details-input'>
                            <p>Cidade</p>
                            <input type="text" placeholder='Digite o nome da cidade' {...register("city", { required: true})} readOnly />
                        </div>
                        <div className='details-error'>
                            {errors?.city?.type == 'required' && <p >Campo obrigatório</p>}
                        </div>
                    </div>
                    <div className='address-input'>
                        <div className='details-input'>
                            <p>Estado</p>
                            <input type="text" placeholder='Digite o nome do estado' {...register("state", { required: true})} readOnly />
                        </div>
                        <div className='details-error'>
                            {errors?.state?.type == 'required' && <p >Campo obrigatório</p>}
                        </div>
                    </div>
                </label>
                <label className='address-label'>
                    <div className='address-input'>
                        <div className='details-input'>
                            <p>Celular</p>
                            <input type="text" placeholder='(XX) XXXXX-XXXX' {...register("cell", { required: true, pattern: /^\(\d{2}\) \d{5}-\d{4}$/, onChange: handleInputChangeCell })} />
                        </div>
                        <div className='details-error'>
                            {errors?.cell?.type == 'required' && <p >Campo obrigatório</p>}
                            {errors?.cell?.type == 'pattern' && <p >Celular inválido</p>}
                        </div>
                    </div>
                    <div className='address-input'>
                        <div className='details-input'>
                            <p>Telefone</p>
                            <input type="text" placeholder='(XX) XXXX-XXXX' />
                        </div>
                    </div>
                </label>
                <button className='btn-cep' type="submit">Confirmar dados</button>
            </form >
        </div>
    )
}

export default AddressDetails