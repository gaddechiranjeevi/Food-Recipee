import React, { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import { database } from "../Authentic/firebase";

const SavedRecipe=()=>{
    const [data, setData] = useState([]);

    useEffect(() => {
       onValue(ref(database), (snapshot) =>{
        setData([]);
           const data = snapshot.val();
           if(data !== null){
            setData((oldArray) => [...oldArray, ...Object.values(data)]);
           }
       });
    }, []);
    const HandleDelete=(item)=>{
      remove(ref(database, `/${item.uuid}`))
      alert('Recipe Removed');
    };
  
    return (
      data.length >= 1 ? 
      <div className="container"><br/>
        {data.map((item) => (
          <div key={item.uuid}>
            <img src={item.image} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.type}</p>
            <p style={{fontWeight:"bold"}}>Ingredients{item.ingredients.map((list)=>(
                <li style={{textAlign:"left",fontWeight:"normal"}}>{list}</li>
            ))}</p>
            <a class="card-text" target="recipe" href={item.recipe}>Recipe</a><br/><br/>
            <button class="center btn btn-secondary"onClick={()=>HandleDelete(item)}>Delete</button><br/><hr/>
          </div>
        ))}
      </div> : <div><br/><h2 className="text-center">No Saved Recipee's...</h2></div>
);
}
export default SavedRecipe;