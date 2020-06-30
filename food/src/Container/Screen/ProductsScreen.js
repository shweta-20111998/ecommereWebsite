import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './ProductsScreen.css'
import { saveProduct, listProducts, deleteProdcut } from '../../actions/productActions';



function ProductsScreen (props) {

    const[modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const productList = useSelector(state => state.productList);
    const{loading, products, error} = productList;

    const productSave = useSelector(state => state.productSave);
    const{loading: loadingSave, success:successSave, error: errorSave} = productSave;

    const productDelete = useSelector(state => state.productDelete);
    const{loading: loadingDelete, success:successDelete, error: errorDelete} = productDelete;

    const dispatch = useDispatch();
    useEffect(()=>{
        if(successSave){
            setModalVisible(false);
        }
        dispatch(listProducts());
        return ()=> {
            //
        };
    },[successSave, successDelete])
   
    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setCategory(product.category);
        setCountInStock(product.countInStock);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id:id,
            name,price,image,category,countInStock}));
    }

    const deleteHandler = (product) => {
        dispatch(deleteProdcut(product._id));
    }

    

    return(

        <div className={classes.Content}>
            <div className={classes.productHeader}>
                <h3>Products</h3>
                <button onClick={() => openModal({})}>Create Product</button>
            </div>

            {modalVisible &&
            <div className={classes.Form}>
                <form onSubmit={submitHandler} enctype= "multipart/form-data">
                    <ul className={classes.FormContainer}>
                        <li>
                            <h2>{id ? "Update Product" : "Create Product"}</h2>
                        </li>
                        <li>
                            {loadingSave && <div>Loading...</div>}
                            {errorSave && <div>{errorSave}</div>}
                        </li>
                        <li>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}/>
                        </li>
                        <li>
                            <label htmlFor="price">
                                Price
                            </label>
                            <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="image">
                            Image
                            </label>
                            {/* <input type="file" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>
                            </input> */}
                            <input type="text" name="image" value={image} id="image" onChange={(e) => setImage(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="countInStock">
                            CountInStock
                            </label>
                            <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="name">
                            Category
                            </label>
                            <input type="text" name="category" value={category} id="category" onChange={(e) => setCategory(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className={classes.button}>{id ? "Update" : "Create"}</button>
                            <button type="submit" onClick={() => setModalVisible(false)} className={classes.button}>Back</button>
                        </li>
                    </ul>
                </form>
            </div>
            }

            <div className={classes.productList}>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.category}</td>
                                <td>
                                    <button onClick={() => openModal(product)}>Edit</button>
                                    <button onClick={() => deleteHandler(product)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>  
    )  
}

export default ProductsScreen;


