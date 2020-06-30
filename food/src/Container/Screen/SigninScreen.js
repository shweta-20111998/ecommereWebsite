import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import classes from './Screen.css'
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../../actions/userAction';


function signinScreen (props) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const{loading, userInfo, error} = userSignin;


    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1]:'/';
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
        return ()=> {
            //
        };
    },[userInfo])
   

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email,password));
    }

    return(
        <div className={classes.Form}>
            <form onSubmit={submitHandler}>
                <ul className={classes.FormContainer}>
                    <li>
                        <h2>Sign-In</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>Error while SignIn</div>}
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    </li>
                    <li>
                        <button type="submit" className={classes.button}>Sign In</button>
                    </li>
                    <li>
                        New to FoodBasket?
                    </li>
                    <li>
                        <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className={classes.textCenter}  >Create an account</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
    
}

export default signinScreen;


