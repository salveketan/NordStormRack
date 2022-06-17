
import axios from "axios";
import * as types from "./actionTypes";

const feactMensDataRequest = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_REQUEST,
        payload
    }
}
const feactMensDataSuccece = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_SUCCESS,
        payload
    }
}
const feactMensDataFailure = (payload) => {
    return {
        type: types.FETCH_MENS_DATA_FAILURE,
        payload
    }
}

export const MensData = (payload) => {
    return (dispatch) => {
        dispatch(feactMensDataRequest())

        axios.get("http://localhost:8080/mensproduct")
            .then((r) => dispatch(feactMensDataSuccece(r.data)))
            .then((e) => dispatch(feactMensDataFailure(e.data)))
    }
}