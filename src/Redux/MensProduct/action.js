
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
    console.log(payload);
    return (dispatch) => {
        dispatch(fetchMensDataRequest())

        axios.get("https://fakestoreapi.com/products",{
            params:{
                ...payload
            }
        })
            .then((r) => dispatch(fetchMensDataSuccece(r.data)))
            .then((e) => dispatch(fetchMensDataFailure(e.data)))
    }
}


// const singleMensDataRequest = (payload) => {
//     return {
//         type: types.FETCH_MENS_DATA_REQUEST,
//         payload
//     }
// }
// const singleMensDataSuccece = (payload) => {
//     return {
//         type: types.FETCH_MENS_DATA_SUCCESS,
//         payload
//     }
// }
// const singleMensDataFailure = (payload) => {
//     return {
//         type: types.FETCH_MENS_DATA_FAILURE,
//         payload
//     }
// }


const signInRequest = (payload) => {
    return {
        type: types.SIGNIN_REQUEST,
        payload
    }
}
const signInSuccess = (payload) => {
    return {
        type: types.SIGNIN_SUCCESS,
        payload
    }
}
const signInFailure = (payload) => {
    return {
        type: types.SIGNIN_FAILURE,
        payload
    }
}

export const singIndata = ({ email, password }) => {
    axios({
        url: "https://reqres.in/api/register",
        method: "POST",
        data: {
            email,
            password
        }
    })
        .then((r) => {
            console.log(r.data)
            alert("success")
        })
        .catch((e) => {
            alert("error")
            console.log(e.message)
        })
}

