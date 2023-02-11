import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useParams, useSearchParams } from "react-router-dom"
const WatchPage = () =>{

    //const params = useParams();
    const [searchParams] = useSearchParams()
    console.log(`https://www.youtube.com/embed/${searchParams.get("v")}`)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu)
    })
    return(
        <div className="px-5 py-5">
        <iframe width="1200" height="600" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )


}

export default WatchPage