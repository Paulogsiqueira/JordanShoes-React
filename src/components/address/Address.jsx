import './Address.css'
import truck from '../../img/icon/truck.png'
import { useState } from 'react'

const Address = () => {
    const [cep,setCep] = useState("")

    return (
        <div className='address-page'>
            <div className='address-title'>
                <img src={truck} />
                <h2>Escolha a forma de pagamento</h2>
            </div>
            <div className='address-page__itens'>
                <div className='address-type'>
                    <div >
                        <div className='address-option'>
                            <p>Dados para Entrega</p>
                        </div>
                        <div>
                            <div className='cep-input'>
                                <p>CEP</p>
                                <input type="text" placeholder='Digite o CEP' value={cep} onChange={(e) => setCep(e.target.value)}/>
                                <button className='btn'>Buscar</button>
                            </div>
                            <form className='address-form'>
                                <label className='address-label'>
                                    <div className='address-input'>
                                        <p>Logradouro</p>
                                        <input type="text" placeholder='Digite o logradouro' disabled />
                                    </div>
                                    <div className='address-input'>
                                        <p>Nº</p>
                                        <input type="text" placeholder='Digite o Nº' disabled />
                                    </div>
                                </label>
                                <label className='address-label'>
                                    <div className='address-input'>
                                        <p>Complemento</p>
                                        <input type="text" placeholder='Digite o nome do complemento' disabled />
                                    </div>
                                    <div className='address-input'>
                                        <p>Bairro</p>
                                        <input type="text" placeholder='Digite o nome do bairro' disabled />
                                    </div>
                                </label>
                                <label className='address-label'>
                                    <div className='address-input'>
                                        <p>Cidade</p>
                                        <input type="text" placeholder='Digite o nome da cidade' disabled />
                                    </div>
                                    <div className='address-input'>
                                        <p>Estado</p>
                                        <input type="text" placeholder='Digite o nome do estado' disabled />
                                    </div>
                                </label>

                            </form >
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}

export default Address