import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Card.css';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div key={id}>
            
                <Link to={`/product/${id}`}>
                
                <div className="card" >
                            <div className="card-image">
                                <img className="image" src={image} alt={title} />
                                </div>
                            </div>
                                <div className="card-content">
                                    <h2>{ title}</h2>
                                    <h4>${price}</h4>
                                    <h4>{category}</h4>
                            
                            </div>
                </Link>
                
            </div>
        )
    })
    return (
        <div className="card-container">{renderList}</div>
    )
};

export default ProductComponent;