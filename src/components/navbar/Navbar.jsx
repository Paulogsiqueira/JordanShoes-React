import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { calcPrice2 } from '@/utils/price';
import { logout } from '@/redux/useSlicer'
import { useDispatch } from 'react-redux'
import logo from '@/img/logo/shoes.png';
import cartIcon from '@/img/icon/cart.png';
import './Navbar.css'

const NavBar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const login = (user.isLogged)
    const cart = user.cart

    const endSession = () => {
        setLogin("")
        dispatch(logout())

    }

    const { totalPrice, qtd } = calcPrice2(cart);


    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt="Logo Nike Shoes" />
                <Link to="/" className='logo-title'>
                    <h2>Nike Shoes</h2>
                </Link>

            </div>
            <div className='navbar-links'>
                <ul className='navbar-list'>
                    <li>
                        <NavLink to="/" className='navbar-link home-btn'>
                            Home
                        </NavLink>
                    </li>
                    {login == true &&
                        <li >
                            <NavLink to='/cart' className='navbar-cart'>
                                <div className='cart'>
                                    <img src={cartIcon} alt="Ícone carrinho de compras" />
                                    <p>{cart == undefined ? 0 : qtd} Itens</p>
                                    <p>R$ {cart == undefined ? Number(0).toFixed(2) : totalPrice.toFixed(2)}</p>
                                </div>
                            </NavLink>
                        </li>
                    }
                    {login != true && <li><NavLink className='navbar-link' to="/login">Entrar</NavLink></li>}
                    {login != true && <li><NavLink className='navbar-link' to="/register">Cadastrar</NavLink></li>}
                    {login == true && <li><Link className='navbar-link' to="/" onClick={endSession}>Sair</Link> </li>}
                </ul>
            </div>

        </nav >
    )
}

export default NavBar