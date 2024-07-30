import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthProvider";

function App() {
  const {loading, data}=useAuth();
  console.log(loading);
  console.log(data);
  return (
    <div>
      <Navbar />
      <Sidebar/>
    </div>
  );
}


export default App;



