import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("");

        /*  Validação de E-mail  */
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!re.test(email)){
            setError("Favor digitar um e-mail válido")
            return
        };

        if(password != confirmPassword){
            setError("Senha e confirmação de senha precisam ser iguais")
            return
        }

        const usuario = [email, password];
        localStorage.setItem("usuario", usuario);

        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("")

        alert("Usuário cadastrado com sucesso!!")
        navigate("/login")
    }

    return (
        <div className='register'>
            <h1>Cadastre-se para comprar produtos</h1>
            <p>Aproveite várias opções disponíveis no site</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder='Nome do usuário' value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" required placeholder='E-mail do usuário' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder='Insira sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password" name="confirmPassword" required placeholder='Confirme sua senha' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {error && <p className='erro'>{error}</p>}
                <button className='btn'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Register