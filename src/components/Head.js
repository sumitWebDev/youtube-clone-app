import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";


const Head = () =>{
    const dispatch = useDispatch();
   const toggleMenuHandler = () =>{
    dispatch(toggleMenu())
   }
    return(
        <div className = "grid grid-flow-col shadow-lg">
        <div className= "flex col-span-1 mx-2">
            <img
            onClick={()=>toggleMenuHandler()}
            className = "h-8 p-2 m-2 cursor-pointer" alt="menu" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtC9cORzCo8sDrYhH_YmJtaBeEYB-iFBXV5g&usqp=CAU" />
            <a href="/"><img className = "h-20" alt="menu" src= "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" /></a>
        </div>
        <div className= "col-span-10 text-center px-10 m-3">
            <input className = "w-1/2 border border-gray-400 p-2 rounded-l-full"  type="text" />
            <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 ">Search</button>
        </div>
        <img className = "h-8"  alt="menu" src= "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />

        </div>
    )

}

export default Head