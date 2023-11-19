import { calcFreight } from '@/redux/useSlicer'
import { useDispatch } from 'react-redux'
import { handleInputChangeCep } from '@/utils/form';
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import { resetFreight } from '../../../redux/useSlicer';
import { useEffect } from 'react';
import './Freight.css'

const Freight = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const user = useSelector(state => state.user)
    let freight = user.freight.payload > 1 ? user.freight.payload : 0;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetFreight());
    
        return () => {
        };
      }, []);

    const onSubmit = () => {
        dispatch(calcFreight((Math.random() * 15 + 15).toFixed(2)))
    }

    return (
        <div>
            <div className='payment-freight'>
                <h2 className='calc-freight'>Calcular frete</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        CEP
                        <input type='text' {...register("cep", { required: true, minLength: 8, maxLength: 9, onChange: handleInputChangeCep })} />
                        {freight > 14 && <p className='freight-value'>Valor do frete: R$ {freight}</p>}
                        <div className='form-error'>
                            {errors?.cep?.type == 'required' && <p >Campo obrigatório</p>}
                            {errors?.cep?.type == 'minLength' && <p >CEP inválido</p>}
                            {errors?.cep?.type == 'maxLength' && <p >CEP inválido</p>}
                        </div>
                    </label>
                    <button className='btn-freight' type="submit">Calcular</button>
                </form>

            </div>
        </div>
    )
}

export default Freight