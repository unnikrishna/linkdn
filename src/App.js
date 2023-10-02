import React, { useState } from "react";
import "./App.css";
import Post from "./Post";
import Comment from "./Comments";
import Header from "./Header";
import Sidebar from "./Sidebar";
import PostLive from "./PostLive";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="flex justify-around bg-[#F3F2EE] min-h-[100vh]">
        <Sidebar />
        <div className="w-[50%] mt-[20px]">
          <Post />
        </div>
      </div>
    </div>
  );
}

export default App;
