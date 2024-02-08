import React, { useState } from 'react'
import axios from "axios"
import { useLocation, useNavigate } from 'react-router-dom';


const Update = () => {
  const [m , setM] = useState({
    musicid :"",
    musicname:"",
    genre:"",
    artist:""
    // pic:""
  });

  const navigate = useNavigate()
  const location = useLocation()
  
  const mId = location.pathname.split("/")[2]

  console.log(location.pathname.split("/")[2])

  const handleChange = (e) =>{
    setM((prev)=>({...prev,[e.target.name] : e.target.value}));
  }

  console.log(m);

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.put("http://localhost:8800/music/" + mId , m);
      alert("Music updated successfully!")
      navigate("/music")
    }catch(err){

    }
  }
  return (
    <div className='form'>
      <h1>UPDATE YOUR MUSIC</h1>
      <input type="text" placeholder='musicid' onChange={handleChange}name='musicid' />
      <input type="text" placeholder='musicname' onChange={handleChange}name='musicname' />
      <input type="text" placeholder='genre' onChange={handleChange}name='genre'/>
      <input type="text" placeholder='artist' onChange={handleChange}name='artist'/>
      {/* <input type="text" placeholder='picture' onChange={handleChange}name='pic'/> */}
      <button className="formButton" onClick={handleClick}>UPDATE</button>
    </div>
  )
}

export default Update
