import React, { useContext, useState } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_item } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";

function Home(){
    let{cate,setCate,input,showCart,setShowCart}=useContext(dataContext);
function filter(category){
    if(category==="All"){
        setCate(food_item);
    }else{
        let newList=food_item.filter((item)=>(item.food_category===category));
        setCate(newList);

    }
}

    return(
        <div className='bg-slate-200 w-full min-h-screen'>
       <Nav/>
       {!input?<div className="flex flex-wrap justify-center items-center gap-6 w-[100%] text-center">
        {Categories.map((item)=>{
        return <div key={item.name} className="w-[140px] h-[150] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shawdoe-xl hover:bg-green-200 cursor-pointer transition-all duration-200" 
        onClick={()=>filter(item.name)}>
               {item.icon}
                {item.name}
            </div>

})}
       </div>:null}
       <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
       {cate.map((item)=>(
        <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type}/>

       ))}

       
       </div>
       <div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 ${showCart ? "translate-x-0":"translate-x-full"}`}>
        <header className="w-[100%] flex justify-between items-center">
            <span className="text-green-400 text-[18px] font-bold">Order items</span>
            <RxCross2 className=" h-[20px] w-[20px] text-green-400 text-[18px] font-bold cursor-pointer" onClick={()=>setShowCart(false)} />



        </header>
       </div>

        </div>


    )

}
export default Home;

