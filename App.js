import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'


function App() {
  return (
    <div  className="App">

<img src={"./src.png"} alt="src" />
     <br/>
     <img src={"/public.png"} alt="public" width="98px" height="80px"/>

      <video width="320"  controls>
      <source src={"myvideo.mp4"} type="video/mp4" />
      </video>


   </div>
  );
}

export default App;
