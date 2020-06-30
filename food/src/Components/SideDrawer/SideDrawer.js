import React, { useEffect } from 'react';

//import classes from './SideDrawer.css';
import classes from './SideDrawer.css';
import { Link } from 'react-router-dom';

const sideDrawer = (props) => {

    if(props.show===true){
        
        return(
            
            <nav className={classes.SideDrawer}>
                <ul>
                    <li>
                        <Link to ="/vegetables">
                            Vegetable
                        </Link>
                        {/* <a href="/vegetables">vegetable</a> */}
                    </li>
                    <li><a href="/fruits">fruits</a></li>
                </ul>
            </nav>
        )
    }
    console.log(props.show)
    
    return(
        
        <nav className={classes.Close}>
            <ul>
                <li>
                    <a href="/">vegetable</a>
                </li>
                <li><a href="/">fruits</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;




