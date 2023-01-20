import React from "react"

const Compound = (props)=>{
    return(
     <div className='about'>
     <button className='btn' style={{backgroundColor:props.color}}>{props.icon}</button>
     <p>{props.topic}</p>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus earum ea repellendus itaque possimus autem odit ducimus quaerat natus, reprehenderit sunt sapiente incidunt est molestiae cupiditate. Quasi aut possimus fugiat.</p>
     </div>
    )
 }

 export default Compound