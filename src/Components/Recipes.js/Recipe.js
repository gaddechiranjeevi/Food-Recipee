import React from "react";
import { database } from "../Authentic/firebase";
import { set, ref } from "firebase/database";
import { uid } from "uid";
import classes from "../Authentic/Login.module.css";


const Recipe=({data})=>{
   
       
 const HandleSave=(data)=>{
        const uuid = uid();
    set(ref(database, `${uuid}`), {
       uuid,
       image : data.recipe.image,
       name  : data.recipe.label,
       type :  data.recipe.cuisineType[0],
       ingredients : data.recipe.ingredientLines,
       recipe : data.recipe.url
    })
    alert('saved sucessfully');
}

    return(
        <div  className={classes.display}>
            <div className="row">
                {data.map(data=>
                <div className="col-md-4" key={data.uuid}>
                    <div class='card' style={{"width":"18rem"}}>
                    <img class='card-img-top' src={data.recipe.image} alt="recipe"/>
                    <div class="card-body">
                        <center>
                            <h5 class="card-title">{data.recipe.label}</h5>
                            <p class="card-text">{data.recipe.cuisineType}</p>
                            <p class="card-text" style={{fontWeight:"bold"}}>Ingredients{data.recipe.ingredientLines.map((list)=>(
                                <ul style={{textAlign:"left",fontWeight:"normal"}}>{list}</ul>
                            ))}</p>
                            <a class="card-text" target="recipe" href={data.recipe.url}>Recipe</a><br/>
                            <button onClick={()=>HandleSave(data)} className="btn btn-primary">Save</button>
                        </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};
export default Recipe;