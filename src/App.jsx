import React from "react";
import Navbar from "./components/Navbar";
//import Sidebar from "./components/Sidebar";
//import { useAuth } from "./context/AuthProvider";
import { Route, Routes } from "react-router-dom";
import PlayingVideo from "./components/PlayingVideo";
import Home from "./components/Home";
import Search from "./components/Search";
import { useAuth } from "./context/AuthProvider";

function App() {
  const {loading}=useAuth()
  
  return (
    <div>
      {loading && <loading/>}
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/search/:searchQuery" element={<Search/>}/>
        <Route path="/video/:id" element={<PlayingVideo/>}/>
      </Routes>
    </div>
  );
}


export default App;



