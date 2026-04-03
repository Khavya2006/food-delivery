import React, { createContext, useState } from "react";
import { food_item } from "../food";
export const dataContext=createContext()
  function UserContext({children}){

let[cate,setCate]=useState(food_item);
    let[input,setInput]=useState("")
    let data={
        input,
        setInput,
        cate,
        setCate
    }

    return(
        <div>
            <dataContext.Provider value={data}>
           {children}
        
        </dataContext.Provider>
        </div>
    )

    
}
export default UserContext;