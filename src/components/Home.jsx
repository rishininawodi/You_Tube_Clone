import React from 'react';
import Sidebar from "./Sidebar.jsx"; 
import  Video  from "./Video.jsx";
function Home() {
  return (
    <div className="flex">
        <Sidebar />
        <div>
            <Video />
        </div>
    </div>
  );
}

export default Home;