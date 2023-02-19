import React, { useState } from "react";
import axios from "axios";
import classes from "./Header.module.css";
import Recipe from "../Recipes.js/Recipe";

const Home=()=>{
    
    const [search, setSearch] = useState('');
    const [data, setdata] = useState('');

    const submitHandler= async (e)=>{
       e.preventDefault();
       try{
        const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=d599ed62&app_key=4d73f3e78cb4d7281f0f336a1a5ad830`);
        console.log(response.data);
        response.data.hits.length === 0 &&
        alert('No Recipe Found')
        setdata(response.data.hits)
    } catch(error){
       console.log(error)
       alert(error.message);
    }}

    return (
        <div>
        <div>
            <h1 className="text-center">Welcome..!</h1>
        </div>
        <div>
            <input type='text' placeholder="Search food recipee...." className={classes.input} value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <button type="submit" className={classes.btn} onClick={submitHandler} value="search">Search</button>
        </div><br/><hr/>
        <div className="d-flex justify-content-center align-items-center">
            {data.length >= 1?<Recipe data={data}/> : 
            <div>
                <h2>No Recipe Found, Try search some thing yummy....</h2>
            </div>}
        </div>
        </div>
    )
}
export default Home;