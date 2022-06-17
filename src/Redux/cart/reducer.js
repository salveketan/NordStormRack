import * as types from "./actionTypes";

const initState = {
    cart: [],
    error: "",
    loading: false,
}

export const cartreducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD_TO_CART_REQUEST: {
            return {
                ...state,
                loading: true,
                error: ""
            }
        }
        case types.ADD_TO_CART_SUCCESS: {
            return {
                ...state,
                loading: false,
                cart: payload
            }
        }
        case types.ADD_TO_CART_FAILURE: {
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