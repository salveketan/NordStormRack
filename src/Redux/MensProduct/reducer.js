import * as types from "./actionTypes";

const initState = {
    product: [],
    error: "",
    loading: false,
    SingleProduct: {},
    singInData: []
}

export const productreducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.FETCH_MENS_DATA_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ""
            }
        }
        case types.FETCH_MENS_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                product: payload
            }
        }
        case types.FETCH_MENS_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }
        // case types.SINGLE_MENS_DATA_REQUEST: {
        //     return {
        //         ...state,
        //         loading: true,
        //         error: ""
        //     }
        // }
        // case types.SINGLE_MENS_DATA_SUCCESS: {
        //     return {
        //         ...state,
        //         loading: false,
        //         SingleProduct: payload
        //     }
        // }
        // case types.SINGLE_MENS_DATA_FAILURE: {
        //     return {
        //         ...state,
        //         loading: false,
        //         error: payload
        //     }
        // }
        case types.SIGNIN_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ""
            }
        }
        case types.SIGNIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                singInData: payload
            }
        }
        case types.SIGNIN_FAILURE: {
            return {
                ...state,
                loading: false,
                error: payload
            }
        }
        default:
            return state
    }
}