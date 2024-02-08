import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AddBand = () => {
    
  const [b , setB] = useState({
    bandid :"",
    bandname:"",
    bandyear:"",
    albumid:""
  });

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setB((prev)=>({...prev,[e.target.name] : e.target.value}));
  }

  // console.log(m);

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/band" , b)
      alert("Band added successfully!")
      navigate("/band")
    }catch(err){

    }
  }
  return (
    <div className='addMusicS'>
      <div className='form'>
        <h1>ADD NEW BAND</h1>
        <input type="text" placeholder='bandid' onChange={handleChange}name='bandid' />
        <input type="text" placeholder='bandname' onChange={handleChange}name='bandname' />
        <input type="text" placeholder='bandyear' onChange={handleChange}name='bandyear'/>
        <input type="text" placeholder='albumid' onChange={handleChange}name='albumid'/>
        <button className="formButton" onClick={handleClick}>ADD</button>
      </div>
    </div>
  )
}

export default AddBand
