import React from 'react'
import {BiUpArrowAlt} from 'react-icons/bi'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Services from './Services'
import Homes from './Homes'

const Main = () => {
    function scroll (value){
      if(value == "home"){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
      }
      if(value == "about"){
        window.scrollTo({
            top:760,
            behavior:'smooth'
        })
      }
      if(value == "services"){
        window.scrollTo({
            top:1520,
            behavior:'smooth'
        })
      }if(value == "blog"){
        window.scrollTo({
            top:2280,
            behavior:'smooth'
        })
      }
      if(value == "contact"){
        window.scrollTo({
            top:3050,
            behavior:'smooth'
        })
      }
    }
    function scrollTop(){
        window.addEventListener('scroll',()=>{
            let scrollbutton = document.getElementById('scroll');
            if(window.pageYOffset >=500){
                scrollbutton.style.transform = 'translateX(0px)'
            }else{
                scrollbutton.style.transform = 'translateX(90px)'
            }
        })   
    }
    scrollTop();
    function scrollup(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
  return (
    <>
    <div className="main">
        <div className="inner-main"><Homes/></div>
    </div>
    <div className="main">
        <div className="inner-main"><About/></div>
    </div>
    <div className="main">
        <div className="inner-main"><Services/></div>
    </div>
    <div className="main">
        <div className="inner-main"><Blog/></div>
    </div>
    <div className="main">
        <div className="inner-main"><Contact/></div>
    </div>
    <div className="navbar">
    <nav className='nav'>
        <ul>
            <li onClick={()=>scroll('home')}>Home</li>
            <li onClick={()=>scroll('about')}>About</li>
            <li onClick={()=>scroll('services')}>Services</li>
            <li onClick={()=>scroll('blog')}>Blog</li>
            <li onClick={()=>scroll('contact')}>Contact</li>
        </ul>
    </nav>
    </div>
    <div className="scroll-top" id="scroll" onClick={()=>scrollup()}>
        <div className="scroll-icon"><BiUpArrowAlt size={25}/></div>
    </div>
    </>
  )
}

export default Main