import React from "react";  
import './Recommended.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
const Recommended = () => {
    return(
        <div className="recommended">
        <div className="side-video-list">
            <img src={thumbnail1} alt="" />
            <div className="vid-info">
                <h4>Nick React Coding Classes</h4>
                <p>NickTube</p>
                <p>300k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail2} alt="" />
            <div className="vid-info">
                <h4>React Hooks Explained</h4>
                <p>CodeWithNick</p>
                <p>150k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail3} alt="" />
            <div className="vid-info">
                <h4>JavaScript ES6 Features</h4>
                <p>DevTutorials</p>
                <p>200k Views</p>
            </div>
            </div>
        <div className="side-video-list">
            <img src={thumbnail4} alt="" />
            <div className="vid-info">
                <h4>CSS Flexbox Guide</h4>
                <p>WebDesignMaster</p>
                <p>180k Views</p>
        </div>
        </div>
        <div className="side-video-list">   
            <img src={thumbnail5} alt="" />
            <div className="vid-info">
                <h4>Node.js Crash Course</h4>
                <p>BackendDev</p>
                <p>250k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail6} alt="" />
            <div className="vid-info">
                <h4>Python for Data Science</h4>
                <p>DataScienceHub</p>
                <p>400k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail7} alt="" />
            <div className="vid-info">
                <h4>HTML5 and CSS3 Basics</h4>
                <p>WebDevBasics</p>
                <p>350k Views</p>
            </div>
        </div>
        <div className="side-video-list">
            <img src={thumbnail8} alt="" />
            <div className="vid-info">
                <h4>React Router Tutorial</h4>
                <p>ReactMastery</p>
                <p>220k Views</p>
            </div>
        </div>
        </div>
    )
}
export default Recommended;