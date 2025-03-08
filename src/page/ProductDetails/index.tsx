import { NavLink, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './index.css';
import About from '../../components/About';

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    colors: string[];
    type: string;
    size: string;
    dressStyle: string;
    pictures: string[];
    __v: number;
    rank: number;
};

type Review = {
    reviewerName: string;
    stars: number;
    comment: string;
    productId: {
        name: string;
        pictures: string[];
    };
};

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        if (id) {
            fetch(`https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/products/${id}`)
                .then(response => response.json())
                .then(data => setProduct(data))
                .catch(error => console.error('Error fetching product details:', error));

            fetch(`https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/reviews?productId=${id}`)
                .then(response => response.json())
                .then(data => setReviews(data.reviews))
                .catch(error => console.error('Error fetching reviews:', error));
        }
    }, [id]);

    const renderStars = (rank: number) => {
        const fullStars = Math.floor(rank);
        const halfStar = rank % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rank);

        return (
            <>
                {'⭐'.repeat(fullStars)}
                {halfStar && '✨'}
                {'☆'.repeat(emptyStars)}
            </>
        );
    };

    const addToCart = () => {
        if (product && selectedColor && selectedSize) {
            const cartItem = {
                id: product._id,
                name: product.name,
                price: product.price,
                color: selectedColor,
                size: selectedSize,
                quantity,
                picture: product.pictures[0],
            };

            const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
            storedCart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(storedCart));
            alert('Product added to cart!');
        } else {
            alert('Please select a color and size before adding to cart.');
        }
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product">
            <div className="container product__container">
                <span className="product__span"></span>
                <div className="product__content">
                    <NavLink className="product__link" to="/">
                        Home
                    </NavLink>
                    <NavLink className="product__link" to="/shop">
                        Shop
                    </NavLink>
                    <NavLink className="product__link" to="">
                        Men
                    </NavLink>
                    <NavLink className="product__link" to="">
                        T-shirts
                    </NavLink>
                </div>
                <div className="product__item">
                    <img
                        className="product__image"
                        src={product.pictures[0]}
                        alt={product.name}
                    />
                    <div className="product__blocks">
                        <h2 className="product__name">{product.name}</h2>
                        <div className="product__rank">
                            {renderStars(product.rank)}
                            <span className="product__rank-number">{product.rank}</span>
                        </div>
                        <p className="product__price">${product.price}</p>
                        <p className="product__description">{product.description}</p>
                        <span className="product__span2"></span>
                        <p className="product__color">Select Colors</p>
                        <div className="product__colors">
                            {product.colors.map(color => (
                                <button
                                    key={color}
                                    className="product__color-btn"
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></button>
                            ))}
                        </div>
                        <span className="product__span2"></span>
                        <p className="product__color">Choose Size</p>
                        <div className="product__button">
                            {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                                <button
                                    key={size}
                                    className="product__btn"
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <span className="product__span2"></span>
                        <div className="product__block">
                            <button className="product__btn5">
                                <span className="product__cart__span2" onClick={() => setQuantity(quantity - 1)}>
                                    -
                                </span>
                                <span className="product__cart__span2">{quantity}</span>
                                <span className="product__cart__span2" onClick={() => setQuantity(quantity + 1)}>
                                    +
                                </span>
                            </button>
                            <button className="product__cart" onClick={addToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className="product__content2">
                    <h3 className="product__sub-title">
                        Product Details <span className="product__span4"></span>
                    </h3>
                    <h3 className="product__sub-title">Rating & Reviews</h3>
                    <h3 className="product__sub-title">FAQs</h3>
                </div>
                <span className="product__span"></span>

                <div className="product__content3">
                    <div className="product__block">
                        <h4 className="product__sub2-title">All Reviews</h4>
                        <p className="product__number">({reviews.length})</p>
                    </div>
                    <button className="product__btn3">Write a Review</button>
                </div>
                <div className="product__content4">
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index} className="product__review">
                                <p className="product__review-stars">{"⭐".repeat(review.stars)}</p>
                                <h4 className="product__reviewer-name">{review.reviewerName}</h4>
                                <p className="product__review-comment">{review.comment}</p>
                                <p className="product__review-date">Posted on August 14, 2023</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
                <button className="product__btn4">Load More Reviews</button>
                <h2 className="product__title">YOU MIGHT ALSO LIKE</h2>
                <div className="product__content5"></div>
                <About />
            </div>
        </div>
    );
};

export default ProductDetails;
