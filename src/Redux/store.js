import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import thunk from "redux-thunk";
import { cartreducer } from "./cart/reducer";

import { productreducer } from "./MensProduct/reducer";

const rootReducer = combineReducers({
    MensProduct: productreducer,
    cartProduct: cartreducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

console.log(store.getState());