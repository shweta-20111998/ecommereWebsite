import React from 'react';

import classes from './Product.css';
import ProductContent from './ProductContent'


const product = props =>  {

    const arrayProduct = props.products.map((product,i) => {
       
        return <ProductContent
            name={props.products[i].name} 
            category={props.products[i].category} 
            price={props.products[i].price}
            key={props.products[i]._id}
            //add={props.addProductHandler()}
            totalPrice={props.totalPrice}
            _id={props.products[i]._id}
            image={props.products[i].image}
            added={() => props.addFunc({product})}
            />
    })
        return(
            
            
            //<ProductContent name={products[0].name} category={products[0].category} price={product[0].price} ></ProductContent>
            
            <div className={classes.Content}>
                
                <ul className={classes.Products}>
                    {arrayProduct}
                    
                    
                    {/* {prop.arrayProduct} */}

                    {/* <ProductContent name={products[0].name} category={products[0].category} price={products[0].price}/>
                    <ProductContent name={products[1].name} category={products[1].category} price={products[1].price}/> */}
                    
                            {/* <li>
                                <div className={classes.Product}>
                                <img className={classes.Image} src={images} alt="Product"></img>
                                    <p className={classes.Name}>
                                        <a href="name.html"></a>{product.name}</p>
                                    <p className={classes.Category}>{product.category}</p>
                                    <p className={classes.Price}>{product.price}</p>                           
                                </div>
                            </li> */}
                </ul>
            </div>
        )
    
}

export default product;