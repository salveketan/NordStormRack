
import axios from "axios";
import * as types from "./actionTypes";

const fetchMensDataRequest = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_REQUEST,
        payload
    }
}
const fetchMensDataSuccece = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_SUCCESS,
        payload
    }
}
const fetchMensDataFailure = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_FAILURE,
        payload
    }
}

export const MensData = (payload) => {
    return (dispatch) => {
        dispatch(fetchMensDataRequest())

        axios.get("https://fakestoreapi.com/products")
            .then((r) => dispatch(fetchMensDataSuccece(r.data)))
            .then((e) => dispatch(fetchMensDataFailure(e.data)))
    }
}


const singleMensDataRequest = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_REQUEST,
        payload
    }
}
const singleMensDataSuccece = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_SUCCESS,
        payload
    }
}
const singleMensDataFailure = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_FAILURE,
        payload
    }
}

