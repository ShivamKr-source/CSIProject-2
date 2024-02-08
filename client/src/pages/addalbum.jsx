import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AddAlbum = () => {
    
  const [al , setAl] = useState({
    albumid :"",
    albumname:"",
    albumrelease:""
  });

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setAl((prev)=>({...prev,[e.target.name] : e.target.value}));
  }

  // console.log(m);

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/albums" , al)
      alert("Band added successfully!")
      navigate("/album")
    }catch(err){

    }
  }
  return (
    <div className='addMusicS'>
      <div className='form'>
        <h1>ADD NEW ALBUM</h1>
        <input type="text" placeholder='albumid' onChange={handleChange}name='albumid' />
        <input type="text" placeholder='albumname' onChange={handleChange}name='albumname' />
        <input type="text" placeholder='albumrelease' onChange={handleChange}name='albumrelease'/>
        <button className="formButton" onClick={handleClick}>ADD</button>
      </div>
    </div>
  )
}

export default AddAlbum
