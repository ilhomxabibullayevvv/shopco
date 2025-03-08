import './index.css'
import Browses from '../../assets/image/browse.png'
import Browses2 from '../../assets/image/browse2.png'
import Browses3 from '../../assets/image/browse3.png'
import Browses4 from '../../assets/image/browse4.png'

const Browse = () => {
    return (
        <div className='browse'>
            <div className='container browse__container'>
                <h2 className='browse__title'>BROWSE BY DRESS STYLE</h2>
                <div className='browse__content'>
                    <img className='browse__image' src={Browses} alt="" />
                    <img className='browse__image2' src={Browses2} alt="" />
                </div>
                <div className='browse__content'>
                    <img className='browse__image2' src={Browses3} alt="" />
                    <img className='browse__image' src={Browses4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Browse
