import React from 'react'
import insta from './assets/instagram.png'
const Homes = () => {
  return (
    <>
    <p>Home Page</p>
    <div className='homepage'>
      <div className="content">
        <p>Riyadvi Software Technologies</p>
        <p>Collaboration</p>
        <p>Bost Your business newtwork with our to best bronline collaborators</p>
        <button>Join Us</button>
      </div>
      <div className="content-image">
        <img src={insta}  alt="image" />
      </div>
    </div>
    </>
  )
}

export default Homes