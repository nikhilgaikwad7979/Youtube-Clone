import React, { use } from "react";  
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { API_KEY, value_Converter } from "../../data";
import { useEffect, useState } from "react";
const Recommended = ({categoryId}) => {
    const [apiData, setApiData] = useState(null);
    const featchData = async () => {
        const relatedVideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&videoCategoryId=${categoryId}&key=${API_KEY}`;
       await fetch(relatedVideo_url).then(response => response.json()).then(data => {setApiData(data.items)});
    }   
    useEffect(() => {
        featchData();
    }, []);   
    return (
         <div className="recommended">
            {apiData && apiData.map((item, index) => {
         return (
        
            <div  key={index} className="side-video-list">
             <img src={item.snippet.thumbnails.medium.url} alt="" />
              <div className="vid-info">
                <h3>{item.snippet.title}</h3>
                 <p>{item.snippet.channelTitle}</p>
                <p>{value_Converter(item.statistics.viewCount)}Views</p>
         </div>
            </div>
      
      
           );
        })
   }
   </div>
    );
}
export default Recommended;