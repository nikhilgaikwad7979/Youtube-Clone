import React from "react";
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import tom from '../../assets/tom.png'
import simon from '../../assets/simon.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY, value_Converter } from "../../data";

const Sidebar = ({sidebar ,category, setCategory})=>{
    //    const [channelData, setChannelData] = useState(null);
       const [apiData, setapiData] = useState(null);
       const channelotherData = async () => {
               const channel_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
               await fetch(channel_url).then(response => response.json()).then(data => setChannelData(data.items[0]))
               }  
             
               useEffect(() => {
                           channelotherData();
                       }, [apiData]);


    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}` }>
         <div className="shortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={() => setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={() => setCategory(20)}>
                <img src={game_icon} alt="" /><p>Gameing</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={() => setCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={() => setCategory(28)}>
                <img src={tech} alt="" /><p>Technology</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={() => setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={() => setCategory(24)}>
                <img src={entertainment} alt="" /><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={() => setCategory(2)}>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={() => setCategory(10)}>
                <img src={blogs} alt="" /><p>Music</p>
            </div>
           <hr />
         </div>
         <div className="subcribed-list">
           <h3>Subcribed</h3>
           <div className="side-link">
            <img src={jack} alt="" /><p>{apiData ? apiData.snippet.channelTitle : "title"}</p>
           </div>
           <div className="side-link">
            <img src={tom} alt="" /><p>Nick1</p>
           </div>
           <div className="side-link">
            <img src={cameron} alt="" /><p>Nick2</p>
           </div>
           <div className="side-link">
            <img src={simon} alt="" /><p>Nick3</p>
           </div>
           <div className="side-link">
            <img src={megan} alt="" /><p>Nick4</p>
           </div>
         </div>
        </div>
    )
}
export default Sidebar