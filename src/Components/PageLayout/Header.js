import React from "react";
import { auth } from "../Authentic/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Header.module.css";
import { useNavigate, useLocation } from "react-router-dom";

const Header=()=>{
    
    const location = useLocation();
    const navigate = useNavigate();

    const Signout =()=>{
        auth.signOut();
        navigate('/');
    }

    if(location.pathname !== "/home" && location.pathname !=="/savedrecipe"){
    return null;
    }
    return (
        <div className={classes.header}>
        <div>
            <h1>Food Recipe</h1>
            <button className={`${classes.home} ${location.pathname==="/home"? classes.selected:""}`} onClick={()=>{navigate('/home')}}>Home</button>
            <button className={`${classes.saved} ${location.pathname==="/savedrecipe"? classes.selected:""}`} onClick={()=>{navigate('/savedrecipe')}}>Saved Recipes</button>
            <button className={classes.Signout} onClick={Signout}>signOut</button>
        </div>
        </div>
    )
}
export default Header;