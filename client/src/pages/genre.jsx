import React from 'react'
import { Link } from 'react-router-dom'

const Genre = () => {
  return (
    <div className='genre'>
      <h1 className='genreHead'>SELECT YOUR GENRE</h1>
      <button className='genreBTN'><Link to="/hiphop">HIP-HOP</Link></button>
      <button className='genreBTN'><Link to="/pop">POP</Link></button>
      <button className='genreBTN'><Link to="/classic">CLASSIC</Link></button>
    </div>
  )
}

export default Genre
