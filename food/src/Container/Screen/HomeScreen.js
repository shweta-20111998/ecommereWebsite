import React, {useState,useEffect} from 'react'
import Aux from '../../hoc/Auxiliary'
import Header from '../../Components/Header/Header'
import Build from '../Build'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';

const homeScreen = props => {
    
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    // const [products,setProduct] = useState([]);
    const productList = useSelector(state => state.productList)
    const {products,loading,error} = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
        return()=>{
            //
        };
    }, [])

        return(
            loading? <div>Loading...</div>:
            error? <div>{error}</div> :
            
            <Aux >
                <Header userInfo={userInfo} products={products}></Header>
                <Build products={products}></Build>
            </Aux>
        )
}

export default homeScreen;