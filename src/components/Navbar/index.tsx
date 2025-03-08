import { NavLink } from "react-router"
import './index.css'
import Logo from '../../assets/icon/logo.svg'
import Search from '../../assets/icon/search.svg'
import Cart from '../../assets/icon/cart.svg'
import Avatar from '../../assets/icon/avatar.svg'
import Menu from '../../assets/icon/menu.svg'

const Navbar = () => {
    return (
        <div className="navbar">
            <h2 className="navbar__title">Sign up and get 20% off to your first order. <span className="navbar__span">Sign Up Now</span></h2>
            <div className="container navbar__container">
                <div className="navbar__block">
                    <button className="navbar__menu"><img src={Menu} alt="" /></button>
                    <img src={Logo} alt="" />
                </div>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <NavLink className='navbar__link' to=''>Shop</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className='navbar__link' to=''>On Sale</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className='navbar__link' to=''>New Arrivals</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink className='navbar__link' to=''>Brands</NavLink>
                    </li>
                </ul>
                <form className="navbar__form">
                    <img src={Search} alt="" />
                    <input className="navbar__input" type="text" placeholder="Search for products..." />
                </form>
                <div className="navbar__icon">
                    <NavLink to='/cart'><img src={Cart} alt="" /></NavLink>
                    <NavLink to='/login'><img src={Avatar} alt="" /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
