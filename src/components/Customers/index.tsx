import { useEffect, useState } from 'react'
import './index.css'
import Left from '../../assets/icon/left.svg'
import Right from '../../assets/icon/right.svg'
import Icon from '../../assets/icon/icon.svg'

type Review = {
    reviewerName: string;
    stars: number;
    comment: string;
    productId: {
        name: string;
        pictures: string[];
    };
};

const Customers = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [visibleReviews, setVisibleReviews] = useState<Review[]>([]);

    useEffect(() => {
        fetch('https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/reviews')
            .then((response) => response.json())
            .then((data) => {
                setReviews(data.reviews);
                setVisibleReviews(data.reviews.slice(0, 3));
            })
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? Math.max(0, reviews.length - 3) : prevIndex - 3;
            setVisibleReviews(reviews.slice(newIndex, newIndex + 3));
            return newIndex;
        });
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + 3 < reviews.length ? prevIndex + 3 : 0;
            setVisibleReviews(reviews.slice(newIndex, newIndex + 3));
            return newIndex;
        });
    };

    return (
        <div className="customers">
            <div className="container customers__container">
                <div className="customers__content">
                    <h2 className="customers__title">OUR HAPPY CUSTOMERS</h2>
                    <div className="customers__button">
                        <button className="customers__btn" onClick={handlePrevClick}>
                            <img src={Left} alt="Previous" />
                        </button>
                        <button className="customers__btn" onClick={handleNextClick}>
                            <img src={Right} alt="Next" />
                        </button>
                    </div>
                </div>
                <div className="customers__content2">
                    {visibleReviews.length > 0 &&
                        visibleReviews.map((review, index) => (
                            <div key={index} className="customers__card">
                                <p className="customers__stars">{"⭐".repeat(review.stars)}</p>
                                <div className='customers__block'>
                                <h3 className="customers__reviewer-name">{review.reviewerName}</h3>
                                <img src={Icon} alt="" />
                                </div>
                                <p className="customers__comment">{review.comment}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Customers;
