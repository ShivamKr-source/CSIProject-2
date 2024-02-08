import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Album = () => {

  const [album,setAlbum] =useState([])
  useEffect(()=>{
    const fetchAllAlbum = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/albums")
        setAlbum(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllAlbum()
  },[])

  const handleDelete = async (albumid)=>{
    try{
      await axios.delete("http://localhost:8800/albums/"+albumid)
      alert("Music deleted successfully!")
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='allMusic'>
      <h1 className='musicHead'>ALL ALBUMS</h1>
      <div className="music">
        {album.map(al=>(
          <div className="m" key={al.albumid}>
            {/* {m.pic && <img src={m.pic} alt=''></img>} */}
            <h1>{al.albumname}</h1>
            <h2>{al.albumrelease}</h2>
            <button className='delete' onClick={()=>handleDelete(al.albumid)}>Delete</button>
          </div>
        ))}
      </div>
      <button className='newSongBtn'><Link className="addNewSongBTN"to="/addalbum">Add new Album</Link></button>
    </div>
  )
}

export default Album
