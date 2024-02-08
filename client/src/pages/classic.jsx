import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Classic = () => {

  const [music,setMusic] =useState([])
  useEffect(()=>{
    const fetchAllMusic = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/classic")
        setMusic(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllMusic()
  },[])

  return (
    <div>
      <h1>CLASSIC SONGS</h1>
      <div className="music">
        {music.map(m=>(
          <div className="m" key={m.musicid}>
            {/* {m.pic && <img src={m.pic} alt=''></img>} */}
            <h1>{m.musicname}</h1>
            <h2>{m.genre}</h2>
            <h2>{m.artist}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Classic
