import './Login.css'
import { useState,useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {login, setLogin} = useContext(LoginContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("")

    let user = localStorage.getItem('usuario');
    let userInfo = user.split(",")
    let emailUser = userInfo[0];
    let passwordUser = userInfo[1];

    if (email != emailUser) {
      setError("Email não cadastrado")
      return
    }

    if (password != passwordUser) {
      setError("Senha inválida")
      return
    }

    setLogin('true')
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
          <input type="text" name="email" required placeholder='E-mail do usuário' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder='Insira sua senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className='erro'>{error}</p>}
        <button className='btn'>Entrar</button>

      </form>
    </div>
  )
}

export default Login