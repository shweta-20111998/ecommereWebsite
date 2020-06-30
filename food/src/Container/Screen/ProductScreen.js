import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import classes from './ProductScreen.css'
import Header from '../../Components/Header/Header'
import Aux from '../../hoc/Auxiliary'
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../../actions/productActions';

function productScreen (props) {
    console.log(props.match.params.id)
    // const product = data.products.find(element => element.id===props.match.params.id)
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const [qty,setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const{product,loading,error} = productDetails;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id))
        return ()=> {
            //
        };
    },[])
    

    const handleAddToCart = () => {
        props.history.push("/cart/" +  props.match.params.id + "?qty=" +qty)
    }
    
    return(
    <Aux >
        <Header drawerClickHandler = {props.drawerToggleClickedHandler} userInfo={userInfo}></Header> 
        <div className={classes.margin}>
            <Link to="/" >Home Page</Link>
        </div>

        {loading? <div>Loading...</div>:
        error? <div>{error}</div> :
            (
                <div className={classes.details}>
                    <div >
                        <img src={product.image} alt="product" className={classes.images}></img>
                    </div>
                    <div className={classes.Para}>
                        <h2>{product.price} Rs/kg</h2>
                        <h3>{product.name}</h3>
                        <p >{product.category}</p>
                    </div>
                    <div className={classes.Action}>
                        <h1>Price:{product.price}</h1>
                        <h3> Status:{product.countInStock>0 ? "In Stock" : "Out Of Stock"}</h3>
                        <li>
                            Quantity:<select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                {[...Array(product.countInStock).keys()].map(x=>
                                    <option key={x+1} value={x+1}>{x+1}</option>
                                )}
                            </select>                           
                        </li>
                        {product.countInStock > 0 && <button onClick={handleAddToCart} className={classes.button}>Add to Cart</button>
                        }
                    </div>
                </div>
            )
        }  
    </Aux>
    )    
}

export default productScreen;

