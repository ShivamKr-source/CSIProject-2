import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Artist = () => {

  const [artist,setArtist] =useState([])
  useEffect(()=>{
    const fetchAllArtist = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/artist")
        setArtist(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllArtist()
  },[])

  const handleDelete = async (artistid)=>{
    try{
      await axios.delete("http://localhost:8800/artist/"+artistid)
      alert("Artist deleted successfully!")
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='artistS'>
    <div >
      <h1 className='artistHead'>ALL ARTISTS</h1>
      <div className="artist">
        {artist.map(a=>(
          <div className="a" key={a.artistid}>
            {/* <h1>{a.artistid}</h1> */}
            {/* {a.artistimg && <img src={a.artistimg} alt=''></img>} */}
            <h1>{a.artistname}</h1>
            <h2>{a.artistnationality}</h2>
            <h2>{a.dateofbirth}</h2>
            <h2>{a.partinband}</h2>
            <button className='delete' onClick={()=>handleDelete(a.artistid)}>Delete</button>

          </div>
        ))}
      </div>
      <button className='artistAddBtn'><Link className="linkArtist" to="/addArtist">Add new artist</Link></button>
    </div>
    </div>
  )
}

export default Artist
