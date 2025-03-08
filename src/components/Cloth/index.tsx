import './index.css'
import Cloth2 from '../../assets/image/cloth2.png'

const Cloth = () => {
    return (
        <div className='cloth'>
            <div className='container cloth__container'>
                <div className='cloth__content'>
                    <h2 className='cloth__title'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                    <p className='cloth__text'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className='cloth__btn'>Shop Now</button>
                    <div className='cloth__content2'>
                        <div className='cloth__block'>
                            <p className='cloth__number'>200+</p>
                            <p className='cloth__name'>International Brands</p>
                        </div>
                        <div className='cloth__block'>
                            <p className='cloth__number'>2,000+</p>
                            <p className='cloth__name'>High-Quality Products</p>
                        </div>
                        <div className='cloth__block'>
                            <p className='cloth__number'>30,00+</p>
                            <p className='cloth__name'>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <img className='cloth__image' src={Cloth2} alt="" />
        </div>
    )
}

export default Cloth
