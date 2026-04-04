import React  from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBin5Line } from "react-icons/ri";

function Card2(){
    return(
        <div className="w-full h-[120px] p-2 shadow-lg">
            <div className="w[60%] h-full  flex gap-6">
                <div className="w-[30%] h-full overflow-hidden">
                    <img src={image1} alt="" className="object-cover rounded"/>
                </div>
                <div className="w-[40%] h-full flex flex-col gap-5">
                    <div className="text-lg text-gray-600 font-semibold" >Pancake</div>
                    <div className="w-[110px] h-[50px] bg-slate-400 flex overflow-hidden rounded shawdow-lg font-semibold border-2 border-green-400 text-xl cursor-pointer">
                        <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-400 cursor-pointer">-</button>
                        <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">1</span>
                        <button className="w-[30%] h-full bg-white text-green-400 hover:bg-gray-400 cursor-pointer">+</button>
                    </div>
                </div>
            </div>
            <div>
                <span>Rs 499/-</span>
                <RiDeleteBin5Line />


            </div>

        </div>
    )
}
export default Card2;