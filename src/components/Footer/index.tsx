import { NavLink } from 'react-router'
import './index.css'
import Logo from '../../assets/icon/logo.svg'
import Twitter from '../../assets/icon/twitter.svg'
import Facebook from '../../assets/icon/facebook.svg'
import Instagram from '../../assets/icon/instagram.svg'
import Github from '../../assets/icon/github.svg'
import Visa from '../../assets/icon/visa.svg'
import MasterGard from '../../assets/icon/mastercard.svg'
import Paypal from '../../assets/icon/paypal.svg'
import Pay from '../../assets/icon/pay.svg'
import Pay2 from '../../assets/icon/pay2.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className='footer__block'>
          <div className='footer__content'>
            <img src={Logo} alt="" />
            <p className='footer__text'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className='footer__icon'>
              <button className='footer__btn'><img src={Twitter} alt="" /></button>
              <button className='footer__btn'><img src={Facebook} alt="" /></button>
              <button className='footer__btn'><img src={Instagram} alt="" /></button>
              <button className='footer__btn'><img src={Github} alt="" /></button>
            </div>
          </div>
          <div className='footer__content2'>
            <ul className='footer__list'>
              <p className='footer__name'>Company</p>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>About</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Features</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Works</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Career</NavLink>
              </li>
            </ul>
            <ul className='footer__list'>
              <p className='footer__name'>Help</p>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Customer Support</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Delivery Details</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Terms & Conditions</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Privacy Policy</NavLink>
              </li>
            </ul>
            <ul className='footer__list'>
              <p className='footer__name'>FAQ</p>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Account</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Manage Deliveries</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Orders</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Payments</NavLink>
              </li>
            </ul>
            <ul className='footer__list'>
              <p className='footer__name'>Resources</p>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Free eBooks</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Development Tutorial</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>How to - Blog</NavLink>
              </li>
              <li className='footer__item'>
                <NavLink className='footer__link' to=''>Youtube Playlist</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <span className='footer__span'></span>
        <div className='footer__content3'>
          <h2 className='footer__title'>Shop.co © 2000-2023, All Rights Reserved</h2>
          <div className='footer__icon2'>
            <img src={Visa} alt="" />
            <img src={MasterGard} alt="" />
            <img src={Paypal} alt="" />
            <img src={Pay} alt="" />
            <img src={Pay2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
