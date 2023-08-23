import { ActionTypes } from '../contants/action-types.js';
const initialState = {
    products: [],
    product:{},
    isLoading:false
}
export const productReducer = (state = initialState, { type, payload}) => {
    switch (type) {
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products:payload, isLoading:false };
        case ActionTypes.SET_LOADING:
            return { ...state, isLoading:payload };
        default:
            return state;
    }
};
export const selectedProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, product:payload, isLoading:false };
        case ActionTypes.SET_LOADING:
            return { ...state, isLoading:payload };
        default:
            return state;
    }
};