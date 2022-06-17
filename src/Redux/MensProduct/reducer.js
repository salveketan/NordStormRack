import * as types from "./actionTypes";

const initState = {
    product: [],
    error: "",
    loading: false,
}

export const productreducer = (state=initState, action) => {
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

        default:
            return state
    }
}