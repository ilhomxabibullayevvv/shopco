import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router';
import About from '../../components/About';
import './index.css';
import Vector from '../../assets/icon/vector.svg';

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

const Category = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(200);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://www.e-commerce-api-v2.nt.azimumarov.uz/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data.products))
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

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const filteredProducts = products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
    );

    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredProducts.length / productsPerPage)) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        if (event.target.name === "minPrice") {
            setMinPrice(value);
        } else {
            setMaxPrice(value);
        }
    };

    return (
        <div className='category'>
            <div className='container category__container'>
                <span className='category__span'></span>
                <div className='category__content'>
                    <NavLink className='category__link' to='/'>Home</NavLink>
                    <NavLink className='category__link' to='/casual'>Casual</NavLink>
                </div>
                <div className='category__content2'>
                    <div className='category__content3'>
                        <h3 className='category__sub-title'>Filters</h3>
                        <span className='category__span2'></span>
                        <ul className='category__list'>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>T-shirts</h4>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>Shorts</h4>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>Shirts</h4>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>Hoodie</h4>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>Jeans</h4>
                            </li>
                        </ul>
                        <ul className='category__list'>
                            <li className='category__item'>
                                <h3 className='category__sub2-title'>Price</h3>
                                <input
                                    type="range"
                                    name="minPrice"
                                    min="0"
                                    max="200"
                                    value={minPrice}
                                    onChange={handlePriceChange}
                                    className="category__range"
                                />
                                <div className="category__number">
                                    <p className="category__prices">${minPrice}</p>
                                    <p className="category__prices">${maxPrice}</p>
                                </div>
                            </li>
                        </ul>
                        <span className='category__span2'></span>
                        <ul className='category__list'>
                            <li className='category__item'>
                                <h3 className='category__sub2-title'>Colors</h3>
                                <div className='category__colors'>
                                    <button className='category__color-btn'></button>
                                    <button className='category__color2-btn'></button>
                                    <button className='category__color3-btn'></button>
                                    <button className='category__color4-btn'></button>
                                    <button className='category__color5-btn'></button>
                                    <button className='category__color6-btn'></button>
                                    <button className='category__color7-btn'></button>
                                    <button className='category__color8-btn'></button>
                                    <button className='category__color9-btn'></button>
                                    <button className='category__color10-btn'></button>
                                </div>
                            </li>
                        </ul>
                        <span className='category__span2'></span>
                        <ul className='category__list'>
                            <li className='category__item'>
                                <h3 className='category__sub2-title'>Sizes</h3>
                                <div className='category__size'>
                                    <button className='category__size-btn'>XX-Small</button>
                                    <button className='category__size-btn'>X-Small</button>
                                    <button className='category__size-btn'>Small</button>
                                    <button className='category__size-btn'>Medium</button>
                                    <button className='category__size-btn'>Large</button>
                                    <button className='category__size-btn'>X-Large</button>
                                    <button className='category__size-btn'>XX-Large</button>
                                    <button className='category__size-btn'>3X-Large</button>
                                    <button className='category__size-btn'>4X-Large</button>
                                </div>
                            </li>
                        </ul>
                        <span className='category__span2'></span>
                        <ul className='category__list'>
                            <li className='category__item'>
                                <h3 className='category__sub2-title'>Types</h3>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>T-shirts</h4>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>Shorts</h4>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>Shirts</h4>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>Hoodie</h4>
                            </li>
                            <li className='category__item'>
                                <h4 className='category__sub3-title'>Jeans</h4>
                            </li>
                        </ul>
                        <button className='category__filter-btn'>Apply Filter</button>
                    </div>
                    <div className='category__content4'>
                        <div className='category__content5'>
                            <h2 className='category__title'>Casual</h2>
                            <div className='category__block'>
                                <p className='category__showing'>Showing {currentProducts.length} Products</p>
                                <button className='category__btn'>
                                    <p className='category__showing'>Sort by:</p> <span className='category__popular'>Most Popular</span> <img src={Vector} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className='category__card'>
                            {currentProducts.length > 0 ? (
                                currentProducts.map((product) => (
                                    <div
                                        key={product._id}
                                        className='category__product'
                                        onClick={() => handleProductClick(product._id)}
                                    >
                                        <img className='category__pictures' src={product.pictures[0]} alt={product.name} />
                                        <h3 className='category__name'>{product.name}</h3>
                                        <div className='category__block2'>
                                            <p className='category__star'>{renderStars(product.rank)}</p>
                                            <p className='category__rank'>{product.rank}</p>
                                        </div>
                                        <p className='category__price'>${product.price}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Loading products...</p>
                            )}
                        </div>
                        <span className='category__span'></span>
                        <div className='category__button'>
                            <button className='category__left-btn' onClick={handlePrevPage}>Previous</button>
                            <div className='category__button2'>
                                {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, index) => (
                                    <button
                                        key={index}
                                        className='category__number-btn'
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                            <button className='category__right-btn' onClick={handleNextPage}>Next</button>
                        </div>
                    </div>
                </div>
                <About />
            </div>
        </div>
    );
};

export default Category;
