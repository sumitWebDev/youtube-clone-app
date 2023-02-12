
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { cachedResults } from "../utils/searchSlice";


const Head = () =>{
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector(store=>store.search)
    useEffect(()=>{
     const timer =    setTimeout( () => {
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }
        else
        getSearchSuggestions();
     },200)

     return () =>{
        clearTimeout(timer)
     }
    },[searchQuery])

    // useEffect(()=>{
    //     const timer =    setTimeout( () => {
    //        getSearchSuggestions();
    //     },300)

    //     return () =>{
    //        clearTimeout(timer)
    //     }
    //    },[searchQuery])

    //make an API call after every keypress
    //if the difference b/w 2 api calls is less than 200ms decline the api call

    const getSearchSuggestions = async()=>{
        const data = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="${searchQuery}`);
        const json = await data.json()
        console.log(searchQuery)
        setSuggestions(json[1])
        dispatch(cachedResults({
            [searchQuery] : json[1]
        }))
    }
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
        <div className= "col-span-10 px-10 m-3">
            <div>
            <input className = "w-1/2 border border-gray-400 p-2 rounded-l-full"  type="text" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onFocus = {()=>setShowSuggestions(true)} onBlur = {()=>setShowSuggestions(false)}/>
            <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 ">Search</button>
            </div>
            {showSuggestions === true ? (<div className="fixed bg-white py-2 px-5 w-[36.5%] shadow-lg rounded-lg">
                <ul>
                    {
                        suggestions.map((suggestion,index)=>{
                            return (
                                <li className="m-1 p-1 cursor-pointer hover:bg-gray-100" key={index}>
                                {suggestion}
                            </li>
                            )

                        })
                    }
                </ul>

            </div>):''
             }
        </div>
        <img className = "h-8"  alt="menu" src= "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />

        </div>
    )

}

export default Head