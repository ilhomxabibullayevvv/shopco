import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router';
import './index.css';

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

const Arivvals: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/products')
            .then(response => response.json())
            .then(data => {
                const filteredProducts = data.products.filter((product: Product) => product.type === 'T-shirts');
                setProducts(filteredProducts.slice(0, 4));
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const renderStars = (rank: number) => {
        const fullStars = Math.floor(rank);
        const halfStar = rank % 1 !== 0;
        const emptyStars = 5 - Math.ceil(rank);

        return (
            <>
                {"⭐".repeat(fullStars)}
                {halfStar && "✨"}
                {"☆".repeat(emptyStars)}
            </>
        );
    };

    const handleProductClick = (id: string) => {
        navigate(`/productDetails/${id}`);
    };

    return (
        <div className='arivvals'>
            <div className='container arivvals__container'>
                <h2 className='arivvals__title'>NEW ARRIVALS</h2>
                <div className='arivvals__content'>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div
                                key={product._id}
                                className='arivvals__item'
                                onClick={() => handleProductClick(product._id)}
                            >
                                <img
                                    className='arivvals__pictures'
                                    src={product.pictures[0]}
                                    alt={product.name}
                                />
                                <h3 className='arivvals__name'>{product.name}</h3>
                                <div className='arivvals__rank'>
                                    {renderStars(product.rank)}
                                    <span className="arivvals__rank-number">{product.rank}</span>
                                </div>
                                <p className='arivvals__price'>${product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
                <NavLink to='/category'><button className='arivvals__btn'>View All</button></NavLink>
            </div>
        </div>
    );
};

export default Arivvals;
