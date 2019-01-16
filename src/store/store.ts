import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import stillingReducer from "./sisteStilling/sisteStillingReducer";


const store = createStore(
    combineReducers({
        sisteStilling: stillingReducer,
    }),
    applyMiddleware(thunk)
);


export default store;
