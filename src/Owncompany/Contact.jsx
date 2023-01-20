import React,{useState} from 'react'
import axios from 'axios';
import {TbMessage2Share} from 'react-icons/tb'

const Contact = () => {
    const[value,setValue]=useState('');
    const[message,setMessage]=useState(false)
    function formValidation(){
         if(value.username == null){
            document.getElementById('username').style.border="2px solid red"
            return false
         }if(value.email == null){
            document.getElementById('email').style.border="2px solid red"
            return false
         }if(value.subject == null){
            document.getElementById('subject').style.border="2px solid red"
            return false
         }if(value.message == null){
            document.getElementById('message').style.border="2px solid red"
            return false
         }
        return true
         
    }
   async function sendData(){
       
      if(formValidation()){
       await  axios.post('http://localhost:5000/send',{value}).then(res=>{
         if(res.data.success == "success"){
            setMessage(true)
           setTimeout(()=>{
            setMessage(false)
           },2000)
         }
       })
      }else{
        formValidation();
      }
    }
    
  return (
    <div className="contactpage">
        <div className="message-icon"><TbMessage2Share size={200} color="#33ff00"/></div>
        <div className="message-input">
          <p>Get in touch</p>
          <input type="text" placeholder='Name' id='username' name='username' required onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
          <input type="email" placeholder='Email' id="email" name='email' required onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
          <input type="text" placeholder='Subject' id='subject' name='subject' required onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
          <textarea cols="30" rows="10" name="message" id='message' placeholder='Message' onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}></textarea>
          <button onClick={()=>sendData()}>Send Message</button>
          <h6 style={{color:'#33ff00'}} className={message?'active':'deactive'}>Message send successfully</h6>
        </div>
    </div>
  )
}

export default Contact