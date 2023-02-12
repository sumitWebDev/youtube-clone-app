import { useEffect, useState } from "react"
import VideoCard from "./VideoCard";
import youtubeAPI from "../utils/constants"
import { Link } from "react-router-dom";


const VideoContainer = () => {


    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos()
    }, [])


    const getVideos = async () => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAqOCjg5vExu0gO1TsF3jG1pmcttSfg5is")
        const json = await data.json();

        setVideos(json.items)
    }

    if (videos.length === 0) return null
    return (
        <div className="flex flex-wrap">
            {/* <Link to={"/watch?v="+videos.id} ><VideoCard info={videos[0]}/> </Link> */}
            {videos.map((video) =>
                <Link to={"/watch?v=" + video.id} key={video.id}><VideoCard info={video} /> </Link>

            )}

        </div>
    )



}

export default VideoContainer