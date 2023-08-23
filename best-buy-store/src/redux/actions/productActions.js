import { ActionTypes } from '../contants/action-types.js';
import { axiosApi } from '../../api/axiosApi';

export const fetchProducts = () => {
    return async function (dispatch, getState) {
        const response = await axiosApi.get("/products");
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload:response.data
        })
    }
    
}
export const fetchProduct = (id) => {
    return async function (dispatch, getState) {
        const response = await axiosApi.get(`/products/${id}`);
        return dispatch({
            type: ActionTypes.SELECTED_PRODUCTS,
            payload: response.data
        })
    }
}

export const setLoading = (flag) => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: flag
    }
}