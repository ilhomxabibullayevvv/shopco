import { NavLink } from 'react-router';
import About from '../../components/About';
import './index.css';
import Delete from '../../assets/icon/delete.svg';
import Indecator from '../../assets/icon/indecator.svg';
import { useEffect, useState } from 'react';

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart);
    }, []);

    const handleQuantityChange = (id: string, change: number) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + change } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleRemoveItem = (id: string) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <div className="cart">
            <div className="container cart__container">
                <span className="cart__span"></span>
                <div className="cart__content3">
                    <NavLink className="cart__link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="cart__link" to="/cart">
                        Cart
                    </NavLink>
                </div>
                <h2 className="cart__title">YOUR CART</h2>
                <div className="cart__content">
                    <div className='cart__items-list'>
                        {cartItems.map((item) => (
                            <div className="cart__cards" key={item.id}>
                                <div className="cart__card">
                                    <img className="cart__pictures" src={item.picture} alt="" />
                                    <div className="cart__block">
                                        <h3 className="cart__name">{item.name}</h3>
                                        <p className="cart__size">Size: {item.size}</p>
                                        <p className="cart__color">Color: {item.color}</p>
                                        <p className="cart__price3">${item.price}</p>
                                    </div>
                                    <div className="cart__block2">
                                        <img
                                            className="cart__image2"
                                            src={Delete}
                                            alt="delete"
                                            onClick={() => handleRemoveItem(item.id)}
                                        />
                                        <button className="cart__btn">
                                            <span className="cart__span2" onClick={() => handleQuantityChange(item.id, -1)}>
                                                -
                                            </span>
                                            <span className="cart__span2">{item.quantity}</span>
                                            <span className="cart__span2" onClick={() => handleQuantityChange(item.id, 1)}>
                                                +
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <span className="cart__span4"></span>
                            </div>
                        ))}
                    </div>
                    <div className="cart__card2">
                        <h3 className="cart__sub-title">Order Summary</h3>
                        <div className="cart__content2">
                            <h4 className="cart__sub2-title">Subtotal</h4>
                            <p className="cart__price">
                                $
                                {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
                            </p>
                        </div>
                        <div className="cart__content2">
                            <h4 className="cart__sub2-title">Discount (-20%)</h4>
                            <p className="cart__price2">-$113</p>
                        </div>
                        <div className="cart__content2">
                            <h4 className="cart__sub2-title">Delivery Fee</h4>
                            <p className="cart__price">$15</p>
                        </div>
                        <span className="cart__span3"></span>
                        <div className="cart__content2">
                            <h4 className="cart__sub2-title">Total</h4>
                            <p className="cart__price">
                                $
                                {cartItems.reduce((total, item) => total + item.price * item.quantity, 0) - 113 + 15}
                            </p>
                        </div>
                        <div className="cart__content2">
                            <form className="cart__form">
                                <input className="cart__input" type="text" placeholder="Add promo code" />
                            </form>
                            <button className="cart__btn3">Apply</button>
                        </div>
                        <button className="cart__btn4">
                            Go to Checkout <img src={Indecator} alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <About />
        </div>
    );
};

export default Cart;
