import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import WatchPage from "./watchPage"
import { Outlet } from "react-router-dom"
const Body = () =>{
    return(
        <div className="flex">
        <Sidebar />
        <Outlet />
        {/* <MainContainer /> */}
        {/* <WatchPage/> */}
    </div>
    )

}

export default Body