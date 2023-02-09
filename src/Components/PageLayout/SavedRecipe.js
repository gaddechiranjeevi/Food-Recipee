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
            Object.values(data).map((todo)=>{
                setData((oldArray)=>[...oldArray,todo]);
            })
           }
       });
    }, []);
    const HandleDelete=(item)=>{
      remove(ref(database, `/${item.uuid}`))
      alert('Recipe Removed');
    };
  
    return (
      <div className="container">
        {data.map((item) => (
          <div key={item.uuid}>
            <img src={item.image} alt={item.name} />
            <h5>{item.name}</h5>
            <p>{item.type}</p>
            <p style={{fontWeight:"bold"}}>Ingredients{item.ingredients.map((list)=>(
                <ul style={{textAlign:"left",fontWeight:"normal"}}>{list}</ul>
            ))}</p>
            <a class="card-text" target="recipe" href={item.recipe}>Recipe</a><br/>
            <button class="btn btn-secondary"onClick={()=>HandleDelete(item)}>Delete</button>
          </div>
        ))}
      </div>
    );
}
export default SavedRecipe;