import React,{Component} from 'react';
import {Link} from 'react-router-dom'


import apple from '../images/app1.jpeg'
import orange from '../images/app2.jpeg'
import cart from '../images/cart.png'
import profile from '../images/profile.jpg'
import classes from './Header.css'
import Aux from '../../hoc/Auxiliary'
import SideDrawer from '../SideDrawer/SideDrawer'
import DrawerToggleButton from '../SideDrawer/DrawerToggle/DrawerToggle'
import BackDrop from '../Backdrop/Backdrop'

class header extends Component {

    state = {
        sideDrawerOpen :false
    };

    drawerToggleClickedHandler = () =>{
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
    
    backDropClickedHandler = () => {
        this.setState({sideDrawerOpen:false})
    }
    render(){
        let backDrop;
        if(this.state.sideDrawerOpen){
            //sideDrawer = <SideDrawer/>
            backDrop = <BackDrop click={this.backDropClickedHandler}/>
        }
        return(
            <Aux>
            <header className={classes.Header}>
            <div>
                {/* <DrawerToggleButton click={this.drawerClickHandler}/> */}
                <DrawerToggleButton click={this.drawerToggleClickedHandler}/>
            </div>
            <div className={classes.Brand} >
                <a className={classes.first} href="/" > F</a>  
                <Link to='/'>
                    <img className={classes.Fruit} src={apple} alt="apple" />
                </Link>
                <Link to='/'>
                    <img className={classes.Fruit} src={orange} alt="orange" />
                </Link>
                <a href="/">d Basket</a> 
            </div>
            <div className={classes.Headerlink}>
                <img className={classes.Fruit} src={cart} alt="cart" />
                <Link to="/cart">Cart</Link>
                {/* <a href="cart.html">Cart</a> */}
                <img className={classes.Radius} src={profile} alt="profile" />
                {
                    this.props.userInfo ? <Link to="/profile">{this.props.userInfo.name}</Link> :
                    <Link to="/signin">SignIn</Link>
                }
                
                {/* <a href="signin.html">SignIn</a> */}
            </div>
        </header>
        <SideDrawer show={this.state.sideDrawerOpen} products={this.props.products}/>
        {backDrop}
        </Aux>
        )
    }
    
};

export default header;




























// import React,{Component} from 'react';
// import {Link} from 'react-router-dom'


// import apple from '../images/app1.jpeg'
// import orange from '../images/app2.jpeg'
// import cart from '../images/cart.png'
// import profile from '../images/profile.jpg'
// import classes from './Header.css'
// import Aux from '../../hoc/Auxiliary'
// import DrawerToggleButton from '../SideDrawer/DrawerToggle/DrawerToggle'

// class header extends Component {

//     state = {
//         sideDrawerOpen :false
//     };

//     drawerToggleClickedHandler = () =>{
//         this.setState((prevState) => {
//             return {sideDrawerOpen: !prevState.sideDrawerOpen};
//         });
//     };
    
//     backDropClickedHandler = () => {
//         this.setState({sideDrawerOpen:false})
//     }
//     render(){
//         let backDrop;
//         if(this.state.sideDrawerOpen){
//             //sideDrawer = <SideDrawer/>
//             backDrop = <BackDrop click={this.backDropClickedHandler}/>
//         }
//         return(
//             <Aux>
//             <header className={classes.Header}>
//             <div>
//                 <DrawerToggleButton click={props.drawerClickHandler}/>
//             </div>
//             <div className={classes.Brand} >
//                 <a className={classes.first} href="/" > F</a>  
//                 <Link to='/'>
//                     <img className={classes.Fruit} src={apple} alt="apple" />
//                 </Link>
//                 <Link to='/'>
//                     <img className={classes.Fruit} src={orange} alt="orange" />
//                 </Link>
//                 <a href="/">d Basket</a> 
//             </div>
//             <div className={classes.Headerlink}>
//                 <img className={classes.Fruit} src={cart} alt="cart" />
//                 <a href="cart.html">Cart</a>
//                 <img className={classes.Radius} src={profile} alt="profile" />
//                 <a href="signin.html">SignIn</a>
//             </div>
//         </header>
//         </Aux>
//         )
//     }
    
// };

// export default header;
























// import React from 'react';
// import {Link} from 'react-router-dom'


// import apple from '../images/app1.jpeg'
// import orange from '../images/app2.jpeg'
// import cart from '../images/cart.png'
// import profile from '../images/profile.jpg'
// import classes from './Header.css'
// import DrawerToggleButton from '../SideDrawer/DrawerToggle/DrawerToggle'

// const header = (props) => (
    
//     <header className={classes.Header}>
//         <div>
//             <DrawerToggleButton click={props.drawerClickHandler}/>
//         </div>
//         <div className={classes.Brand} >
//             <a className={classes.first} href="/" > F</a>  
//             <Link to='/'>
//                 <img className={classes.Fruit} src={apple} alt="apple" />
//             </Link>
//             <Link to='/'>
//                 <img className={classes.Fruit} src={orange} alt="orange" />
//             </Link>
//             <a href="/">d Basket</a> 
//         </div>
//         <div className={classes.Headerlink}>
//             <img className={classes.Fruit} src={cart} alt="cart" />
//             <a href="cart.html">Cart</a>
//             <img className={classes.Radius} src={profile} alt="profile" />
//             <a href="signin.html">SignIn</a>
//         </div>
//     </header>
//     // <Aux className={classes.Header}>
//     //     <div className={classes.Brand} >
//     //         <a href="index.html"> FoodBasket</a>  
//     //     </div>
//     //     <div className={classes.Headerlink}>
//     //         <a href="cart.html">Cart</a>
//     //         <a href="signin.html">SignIn</a>
//     //     </div>
//     // </Aux>
    
// );

// export default header;