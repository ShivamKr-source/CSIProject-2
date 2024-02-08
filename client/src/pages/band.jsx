import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Band = () => {

  const [band,setBand] =useState([])
  useEffect(()=>{
    const fetchAllBand = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/band")
        setBand(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllBand()
  },[])

  const handleDelete = async (bandid)=>{
    try{
      await axios.delete("http://localhost:8800/band/"+bandid)
      alert("Band deleted successfully!")
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='allMusic'>
      <h1 className='musicHead'>ALL BANDS</h1>
      <div className="music">
        {band.map(b=>(
          <div className="m" key={b.bandid}>
            <h1>{b.bandname}</h1>
            <h2>{b.bandyear}</h2>
            <button className='delete' onClick={()=>handleDelete(b.bandid)}>Delete</button>
            {/* <button className='update'><Link className="linkUpdate" to={`/update/${b.bandid}`}>Update</Link></button> */}

          </div>
        ))}
      </div>
      <button className='newSongBtn'><Link className="addNewSongBTN"to="/addband">Add new band</Link></button>
    </div>
  )
}

export default Band
