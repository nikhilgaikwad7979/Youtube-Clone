import React, { use } from 'react';
import './playVideo.css';
import { Link } from 'react-router-dom';
import Video1 from '../../assets/Video.mp4';   
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import { useEffect, useState } from 'react';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY} from '../../data';
import moment from 'moment';
import { value_Converter } from '../../data';

const PlayVideo= ({videoId})=>{
    const [apiData, setapiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState(null);
       const videoData = async () => {
       const video_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=in&key=${API_KEY}`;
        await fetch(video_url).then(response => response.json()).then(data => {setapiData(data.items[0])});
    }
      const channelotherData = async () => {
        const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
        await fetch(channel_url).then(response => response.json()).then(data => setChannelData(data.items[0]))
        }  
        const commentotherData = async () => {
            const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&textFormat=html&videoId=${videoId}&key=${API_KEY}`;
             await fetch(comment_url).then(response => response.json()).then(data => setCommentData(data.items)); 
        }   
useEffect(() => {
        videoData();
        }, []);

       
 useEffect(() => {
            channelotherData();
        }, [apiData]);
useEffect(() => {
            commentotherData();
        }, [videoId]);
    return(
        <div className="play-video">
            {/* <video src={Video1} controls muted autoPlay></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; encrypted-media" allowfullscreen  ></iframe>
            <h3>{apiData ? apiData.snippet.title : "title"}</h3>
           <div className="play-video-info">
            <p>{apiData ? value_Converter(apiData.statistics.viewCount) : "View"} view &bull; {apiData ? moment(apiData.snippet.publishedAt ).fromNow(): "View"}</p>
            <div>
                <span><img src={like} alt="like" />{apiData ? value_Converter(apiData.statistics.likeCount ): "Like"}</span>
                <span><img src={dislike} alt="dislike" />12</span>
                <span><img src={share} alt="share" />Share</span>
                <span><img src={save} alt="save" />Save</span>
            </div>
           </div>
           <hr />
           <div className="publisher">
            <img src={channelData ? channelData.snippet.thumbnails.default.url: "img"} alt="" />
            <div>
                <p>{apiData ? apiData.snippet.channelTitle : "title"}</p>
                <span>{channelData?value_Converter( channelData.statistics.subscriberCount):"n"}</span>
                  {/* <span>no</span> */}
            </div>
            <button>Subcribe</button>
           </div>
           <div className="video-description">
           <p>{apiData ? apiData.snippet.description.slice(0,250) : "description"}</p><hr />
            <h4>{apiData ? value_Converter(apiData.statistics.commentCount ): "Like"}</h4>
    {commentData && commentData.map((item, index) => {

    return (
        <div key={index} className="comment">
            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                    <img src={like} alt="" /><span>{item.snippet.topLevelComment.snippet.likeCount || 0}</span>
                    <img src={dislike} alt="" /><span>0</span>
                    <p>{item.snippet.totalReplyCount}Replay</p>
                </div>
            </div>
        </div>
    )
})}
         
           </div>
        </div>
    )
}
export default PlayVideo;