import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Add = () => {
  const [m , setM] = useState({
    musicid :"",
    musicname:"",
    genre:"",
    artist:""
  });

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setM((prev)=>({...prev,[e.target.name] : e.target.value}));
  }

  // console.log(m);

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/music" , m)
      alert("Music added successfully!")
      navigate("/music")
    }catch(err){

    }
  }
  return (
    <div className='addMusicS'>
      <div className='form'>
        <h1>ADD NEW SONG OR MUSIC</h1>
        <input type="text" placeholder='musicid' onChange={handleChange}name='musicid' />
        <input type="text" placeholder='musicname' onChange={handleChange}name='musicname' />
        <input type="text" placeholder='genre' onChange={handleChange}name='genre'/>
        <input type="text" placeholder='artist' onChange={handleChange}name='artist'/>
        {/* <input type="text" placeholder='picture' onChange={handleChange}name='pic'/> */}
        <button className="formButton" onClick={handleClick}>ADD</button>
      </div>
    </div>
  )
}

export default Add
