import axios from "axios";
import * as types from "./actionTypes";

const addToCartRequest = (payload) => {
    return {
        type: types.ADD_TO_CART_REQUEST,
        payload
    }
}
const addToCartSuccece = (payload) => {
    return {
        type: types.ADD_TO_CART_SUCCESS,
        payload
    }
}
const addToCartFailure = (payload) => {
    return {
        type: types.ADD_TO_CART_FAILURE,
        payload
    }
}

