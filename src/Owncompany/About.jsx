import React from 'react'
import Compound from './compound/Reuseable'
import { BsAlarm} from "react-icons/bs"


const About = () => {
  return (
    <>
    <p>About page</p>
    <div className='about-main'>
      <Compound topic="Business Planning" icon={<BsAlarm/>}/>
      <Compound topic="Financial Planning" color="#a000ab" icon={<BsAlarm/>}/>
      <Compound topic="Market Analysis" color="#f37168" icon={<BsAlarm/>}/>
    </div>
    </>
  )
}

export default About