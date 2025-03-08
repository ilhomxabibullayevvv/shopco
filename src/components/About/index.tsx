import './index.css'
import Message from '../../assets/icon/message.svg'

const About = () => {
    return (
        <div className='about'>
            <div className='container about__container'>
                <h2 className='about__title'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                <div className='about__content'>
                    <form className='about__form'>
                        <img src={Message} alt="" />
                        <input className='about__input' type="text" placeholder='Enter your email address'/>
                    </form>
                    <button className='about__btn'>Subscribe to Newsletter</button>
                </div>
            </div>
        </div>
    )
}

export default About
