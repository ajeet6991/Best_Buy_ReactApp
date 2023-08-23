import React, { useEffect } from 'react';
import '../styles/Card.css'; 
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct,setLoading } from '../redux/actions/productActions';
import Spinner from './Spinner';

const ProductDetails = () => {
    const {product,isLoading} = useSelector((state) => state.product);
    const { id, image, title, price, category, description } = product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (productId && productId !== "") {
            dispatch(setLoading(true));
            dispatch(fetchProduct(productId));
        }
    },[]);
    return (
        <div className="card-container">
            {isLoading ? (
                <Spinner/>
            ) :  (
                        <div >
                            <div >
                                <div className="card">
                                    <img className="image" src={image} alt={description}/>
                                </div>
                                <div>
                                    <h1>{title}</h1>
                                        <h4>${price}</h4>
                                    <h3 >{category}</h3>
                                    <p>{description}</p>
                                    
                                </div>
                            </div>
                        </div>
                    
            ) 
             }
            
        </div>
    )
};

export default ProductDetails;