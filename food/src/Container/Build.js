import React, {Component} from 'react';
import Product from '../Components/Product/Product'
import Aux from '../hoc/Auxiliary'

class build extends Component {

    addHandler = (product) => {
        console.log(typeof(products))
        console.log("clicked",product);
        console.log("this",this.state);
        
    }
    
    
    render() {
        return(
            
            //<ProductContent name={products[0].name} category={products[0].category} price={product[0].price} ></ProductContent>
            <Aux>
               
                <Product products={this.props.products}   addFunc={this.addHandler.bind(this)}/>
                {/* <ProductScreen products={this.state.products}/> */}
                {/* <BuildControl productAdded={this.addProductHandler}></BuildControl> */}
            </Aux>
           
        )
    }  
}

export default build;