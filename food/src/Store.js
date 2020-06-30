import {createStore , combineReducers, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { productListReducers, productDetailsReducers, productSaveReducer, productDeleteReducer } from './Reducers/productReducers';
import {cartReducer} from './Reducers/cartReducer'
import { userSignInReducer, userRegisterReducer, userUpdateReducer } from './Reducers/userSignInReducer';
import { myOrderListReducer, orderListReducer, orderDeleteReducer } from './Reducers/orderReducer';


const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {cart:{cartItems , shipping:{} , payment: {}}, userSignin:{userInfo}};
const reducer = combineReducers({
    cart: cartReducer,
    userSignin: userSignInReducer,
    userRegister: userRegisterReducer,
    productList : productListReducers,
    productDetails: productDetailsReducers,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer,
    userUpdate: userUpdateReducer,
    myOrderList: myOrderListReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));
export default store;