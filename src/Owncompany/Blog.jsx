import React from 'react'
import {BsFillPhoneFill} from 'react-icons/bs'
const Blog = () => {
  return (
    <>
    <p>Blog Page</p>
    <div className="blog-page">
       <div className="blog-content">
        <p>Find Solutions Faster</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ratione! Quo repellat omnis dolorem nesciunt quibusdam deleniti aperiam esse magni dolor nemo perspiciatis distinctio neque, placeat fugit illum sed possimus.</p>
       </div>
       <div className="blog-content"><BsFillPhoneFill size={250} color="skyblue"/></div>
    </div>
    </>
  )
}

export default Blog