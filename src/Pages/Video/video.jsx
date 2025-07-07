import React from "react";
import './Video.css'
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import { Link } from "react-router-dom";
const Video= ()=>{
    return(
        <div  className="play-container">
        <PlayVideo/>
        </div>
    )
    
}
export default Video