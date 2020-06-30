import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { addToCart, removeFromCart } from '../../actions/cartActions';
import {useDispatch, useSelector} from 'react-redux'
import classes from './CartScreen.css'
import Header from '../../Components/Header/Header'
function CartScreen(props){


    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const productId = props.match.params.id;
    const quantity = props.location.search ? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();

    const [qty,setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const{product,loading,error} = productDetails;

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId))
    }

    const checkoutHandler =() => {
        props.history.push("/signin?redirect=shipping")
    }

    useEffect(()=> {
        if(productId){
            dispatch(addToCart(productId,quantity))
        }
    },[])

    return <div>
        <Header userInfo={userInfo}></Header>
    <div className={classes.cart}>
        <div className={classes.cartList}>
            <ul className={classes.cartListContainer}>
                <li>
                    <h3>Shopping Cart</h3>
                    <div>Price</div>
                </li>
                {
                    cartItems.length === 0 ?
                    <div>
                        Cart is Empty.
                    </div>
                    :
                    cartItems.map(item =>
                        <div className={classes.cartContent}>
                            <div >
                                <img src={item.image} alt="product" className={classes.cartImages}/>
                            </div>
                            <div className={classes.cartName}>
                                <div>
                                    <Link to={"/product/"+item.product}>
                                    {item.name}
                                    </Link>
                                    
                                </div>
                                <div>
                                    Quantity:<select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                        {[...Array(product.countInStock).keys()].map(x=>
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                        )}
                                    </select>                           
                                    <button type="button" onClick={()=>removeFromCartHandler(item.product)} >Delete</button>
                                </div>
                            </div>
                            <div className={classes.cartPrice}>
                                {item.price} Rs
                            </div>
                        </div>
                        )
                }
            </ul>
        </div>
        <div className={classes.cartAction}>
            <h3>
                Subtotal({cartItems.reduce((a,c) => a + c.qty,0)} items)
                :
                 {cartItems.reduce((a,c) => a + c.price * c.qty , 0)} Rs
            </h3>
            <button className={classes.button} onClick={checkoutHandler} disabled={cartItems.length === 0}>
                Proceed to Checkout
            </button>
                
        </div>

    </div>
    </div>
}

export default CartScreen