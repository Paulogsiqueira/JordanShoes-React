import { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '@/redux/useSlicer'
import { useDispatch } from 'react-redux'
import './Login.css'

const Login = () => {
  const email = useRef('')
  const password = useRef('')
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("")
    
    const user = localStorage.getItem('usuario');
    const userInfo = user.split(",")
    const emailUser = userInfo[0];
    const passwordUser = userInfo[1];

    if (email.current.value != emailUser) {
      setError("Email não cadastrado")
      return
    }

    if (password.current.value != passwordUser) {
      setError("Senha inválida")
      return
    }

    dispatch(login())
    setTimeout(() => {
      navigate("/")
    }, 100);

  }
  return (
    <div className='login'>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit} >
        <label>
          <span>E-mail:</span>
          <input type="text" name="email" required placeholder='E-mail do usuário' ref={email}/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder='Insira sua senha' ref={password}/>
        </label>
        {error && <p className='erro'>{error}</p>}
        <button className='btn'>Entrar</button>

      </form>
    </div>
  )
}

export default Login