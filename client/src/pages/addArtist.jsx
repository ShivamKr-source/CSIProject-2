import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AddArtist = () => {
  const [a , setA] = useState({
    artistid :"",
    artistname:"",
    artistnationality:"",
    dateofbirth:"",
    partinband:""
  }); 

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setA((prev)=>({...prev,[e.target.name] : e.target.value}));
  }

  console.log(a);

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/artist" , a)
      alert("Artist added successfully!")
      navigate("/artist")
    }catch(err){

    }
  }
  return (
    <div className='form'>
      <h1>ADD NEW ARTIST</h1>
      <input type="text" placeholder='artistid' onChange={handleChange} name='artistid' />
      <input type="text" placeholder='artistname' onChange={handleChange} name='artistname' />
      <input type="text" placeholder='artistnationality' onChange={handleChange} name='artistnationality'/>
      <input type="text" placeholder='dateofbirth' onChange={handleChange} name='dateofbirth'/>
      <input type="text" placeholder='partinband' onChange={handleChange} name='partinband'/>

      <button className="formButton" onClick={handleClick}>ADD</button>
    </div>
  )
}

export default AddArtist
