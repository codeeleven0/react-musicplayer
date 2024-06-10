import { useState } from 'react';
import './App.css';

const playPause = () => {
  let a = document.getElementById("ae");
  let b = document.getElementById("cd");
  if(a.paused || !a.currentTime){
    a.play();
    b.classList.toggle("fa-play");
    b.classList.toggle("fa-pause"); 
  }else{
    a.pause();
    b.classList.toggle("fa-play");
    b.classList.toggle("fa-pause"); 
  }
}

function App() {
  const [play, setPlay] = useState("");
  const [obj, setObj] = useState("");
  const [file, setFile] = useState("");
  return (
    <>
      <link rel="stylesheet" crossorigin crossOrigin href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <div id="logo">
        <i className='fa fa-music'></i>
        <b>{file}</b>
      </div>
      <input type="file" name="" id="ss" onChange={(e) => {
        try{
          URL.revokeObjectURL(obj);
        }catch(e){
          console.log(e);
        }
        let url = URL.createObjectURL(e.target.files[0]);
        setPlay(url);
        setObj(url);
        setFile(e.target.files[0].name);
      }} style={{
        display:"none"
      }}/>
      
      <audio id="ae" src={play} style={{
      }}></audio>
      <br/>
      <div id="cont">
      <i className='fa fa-volume-down' onClick={()=>document.getElementById("ae").volume-=0.1} style={{
        display: "inline-block",
        borderRadius: "60px",
        padding: "1.0em 1.1em",
        border: "1px solid white"
      }}></i>
      <i id="cd" onClick={playPause} className='fa fa-play' style={{
        display: "inline-block",
        borderRadius: "60px",
        padding: "2.0em 2.1em",
        border: "1px solid white",
        marginLeft: "10px",
        marginRight: "10px"
      }}></i>
      <i className='fa fa-volume-up' onClick={()=>document.getElementById("ae").volume+=0.1} style={{
        display: "inline-block",
        borderRadius: "60px",
        padding: "1.0em 1.1em",
        border: "1px solid white"
      }}></i>
      </div>
      <div id="fileicons">
      <i className='fa fa-upload' onClick={() => document.getElementById("ss").click()} style={{
        display: "inline-block",
        borderRadius: "60px",
        padding: "2.0em 2.1em",
        border: "1px solid white",
        marginRight: "10px"
      }}></i>
      <i className='fa fa-chain' onClick={() => {
        let u = prompt("Please enter URL.");
        setFile(u);
        setObj(u);
        setPlay(u);
      }} style={{
        display: "inline-block",
        borderRadius: "60px",
        padding: "2.0em 2.1em",
        border: "1px solid white"
      }}></i>
      </div>
    </>
  )
}

export default App
