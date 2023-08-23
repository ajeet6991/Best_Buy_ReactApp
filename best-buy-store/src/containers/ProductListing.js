import React, { useEffect } from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts, setLoading } from '../redux/actions/productActions';
import Spinner from './Spinner';

const ProductListing = () => {
    const {isLoading} = useSelector((state) => state.allProducts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(fetchProducts());
    },[]);
    //console.log(products);
    return (
        <div>
            {isLoading ? (<Spinner/>): (<ProductComponent/>)}
            
        </div>
    )
};

export default ProductListing;