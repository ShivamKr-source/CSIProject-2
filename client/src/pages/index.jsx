import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import play from "../assets/play.png"
import audio from "../assets/audio.mp3"
// import pause from "../assets/pause.png"

const Index = () => {

  var mySong = document.getElementById("mySong");
  var icon = document.getElementById("icon");
  // icon.onclick = function(){
  //   if(mySong.paused){
  //     mySong.play()
  //   }
  //   else{
  //     mySong.pause()
  //   }
  // }

  return (
    <div className='container'>
      <div className="navbar">
        <ul>
          <li><a href="/music">ALL MUSICS</a></li>
          <li><a href="/artist">ALL ARTISTS</a></li>
          <li><a href="/genre">GENRES</a></li>
          <li><a href="/band">BANDS</a></li>
          <li><a href="/album">ALBUMS</a></li>
          
          
        </ul>
      </div>
      <div className="content">
        <div className="left-col">
          <h1>MUSIC<br></br>MANAGEMENT<br></br>LIBRARY</h1>
        </div>
        <div className="right-col">
          <img className="playImg" src={play} alt="playImage" id="icon" />
        </div>

        <audio id="mySong">
          <source src={audio} type='audio/mp3'/>
        </audio>
        
      </div>                                                                                
    </div>
    
  )
}

export default Index
