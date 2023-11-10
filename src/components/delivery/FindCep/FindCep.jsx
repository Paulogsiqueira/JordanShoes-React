import { handleInputChangeCep } from '@/utils/form';
import { AddressContext } from '@/context/AddressContext';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react'
import Modal from 'react-modal';
import close from '@/img/icon/close.png';
import error from '@/img/icon/error.png';
import './FindCep.css'


const FindCep = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { address, setAddress } = useContext(AddressContext)
    const { cepError, setCepError } = useState("")
    const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false)

    const onSubmit = (data) => {
        queryCEP(data.cepNumber)
    }

    const openModalError = () => {
        setModalErrorIsOpen(true)
    }

    const closeModal = () => {
        setModalErrorIsOpen(false)
    }

    const queryCEP = (cep) => {

        const url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    openModalError();
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
            <Modal
                isOpen={modalErrorIsOpen}
                onRequestClose={closeModal}
                className='modal-content'>
                <div className='modal'>
                    <div className='modal-close'>
                        <button onClick={() => { closeModal() }}><img src={close} /></button>
                    </div>
                    <div className='modalError-title'>
                        <img src={error} />
                        <p>O CEP digitado não foi encontrado, favor inserir um valor válido</p>
                    </div>
                    <div className='modal-btn'>
                        <button onClick={() => closeModal()} className='modal-btn__cart'>OK</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default FindCep