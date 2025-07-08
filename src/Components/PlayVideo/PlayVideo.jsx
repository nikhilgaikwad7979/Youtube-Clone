import React from 'react';
import './playVideo.css';
import { Link } from 'react-router-dom';
import Video1 from '../../assets/Video.mp4';   
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
const PlayVideo= ({videoId})=>{
    return(
        <div className="play-video">
            {/* <video src={Video1} controls muted autoPlay></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media" allowfullscreen  ></iframe>
            <h3>Nick coding classes</h3>
           <div className="play-video-info">
            <p>2332 view &bull; 22 days ago</p>
            <div>
                <span><img src={like} alt="like" />223</span>
                <span><img src={dislike} alt="dislike" />12</span>
                <span><img src={share} alt="share" />Share</span>
                <span><img src={save} alt="save" />Save</span>
            </div>
           </div>
           <hr />
           <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>NickTube</p>
                <span>1M Subcriber</span>
            </div>
            <button>Subcribe</button>
           </div>
           <div className="video-description">
            <p>Good video. I like it. I am learning a lot from this video. Thank you for sharing this video with us.</p>
            <p>nick coding Good video. I like it. I am learning a lot from this video. Thank you for sharing this video with us.</p>
            <h4>100 Comment</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div >
                    <h3>Nik <span>3 day ago</span></h3>
                    <p>Good 
                        video. I like it. I am learning a lot from this video. Thank you for sharing this video with us.</p>  
                          <div className="comment-action">
                             <img src={like} alt="" /><span>23</span>
                             <img src={dislike} alt="" /><span>2</span>
                               </div>                
                </div>
            </div>
             <div className="comment">
                <img src={user_profile} alt="" />
                <div >
                    <h3>Nik <span>3 day ago</span></h3>
                    <p>Good 
                        video. I like it. I am learning a lot from this video. Thank you for sharing this video with us.</p>  
                          <div className="comment-action">
                             <img src={like} alt="" /><span>23</span>
                             <img src={dislike} alt="" /><span>2</span>
                               </div>                
                </div>
            </div>
           </div>
        </div>
    )
}
export default PlayVideo;