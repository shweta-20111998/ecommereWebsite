import React from 'react'
import {Link} from 'react-router-dom'
import classes from './ProductContent.css';



const product = (props) =>{
    const id = props._id;
    return(
        <Link to={'/products/'+(id)} key={props._id}>
            <li>
                <div className={classes.Product}>
                        <img className={classes.Image} src={props.image} alt="Product"/>
                        <p >{props.id}</p>
                        <p className={classes.Name}>{props.name}</p>
                        <p className={classes.Category}>{props.category}</p>
                        <p className={classes.Price}>{props.price} Rs</p> 
                        {/* <BuildControl add={props.added} /> */}
                </div>
            </li>
        </Link>
    )
};

export default product;