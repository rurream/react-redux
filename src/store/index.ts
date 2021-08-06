import { createStore, combineReducers, compose } from 'redux';
import productReducer from './products';
import userReducer from './user';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

const rootReducer = combineReducers({
    products: productReducer,
    user:userReducer
}) 
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store