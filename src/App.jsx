import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from "react-router-dom";
import Home  from './Pages/Home/Home';
import Video from './Pages/Video/video'
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';
const App =()=> {
  const [sidebar, setSidebar] = useState(true);
  return (
   <div>
    <Navbar setSidebar={setSidebar}/>
    
    {/* <Sidebar/> */}
    <Routes>
    <Route path='/' element={<Home sidebar={sidebar}/>}/>
    <Route path='/Video/:categoryId/:videoId/' element={<Video/>}/>
    </Routes>
   </div>
  )
}

export default App
