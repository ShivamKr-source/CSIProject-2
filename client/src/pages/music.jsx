import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Music = () => {

  const [music,setMusic] =useState([])
  useEffect(()=>{
    const fetchAllMusic = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/music")
        setMusic(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllMusic()
  },[])

  const handleDelete = async (musicid)=>{
    try{
      await axios.delete("http://localhost:8800/music/"+musicid)
      alert("Music deleted successfully!")
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='allMusic'>
      <h1 className='musicHead'>ALL MUSIC AND SONGS</h1>
      <div className="music">
        {music.map(m=>(
          <div className="m" key={m.musicid}>
            {/* {m.pic && <img src={m.pic} alt=''></img>} */}
            <h1>{m.musicname}</h1>
            <h2>{m.genre}</h2>
            <h2>{m.artist}</h2>
            <button className='delete' onClick={()=>handleDelete(m.musicid)}>Delete</button>
            <button className='update'><Link className="linkUpdate" to={`/update/${m.musicid}`}>Update</Link></button>

          </div>
        ))}
      </div>
      <button className='newSongBtn'><Link className="addNewSongBTN"to="/add">Add new song</Link></button>
    </div>
  )
}

export default Music
