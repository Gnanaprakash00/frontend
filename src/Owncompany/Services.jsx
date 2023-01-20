import React from 'react'
import Compound from './compound/Reuseable'
import {DiWebplatform} from 'react-icons/di'
import {FaGamepad} from 'react-icons/fa'
import {GiHammerNails} from 'react-icons/gi'
import {BsFillPhoneFill} from 'react-icons/bs'


const Services = () => {
  return (
    <>
    <p>Services Page</p>
    <div className="services">
          <Compound topic="Web Development" color="#8cbefb" icon={<DiWebplatform/>}/>
          <Compound topic="Game Development" color="#f37265" icon={<FaGamepad/>}/>
          <Compound topic="MERN Stack" color="#355573" icon={<GiHammerNails/>}/>
          <Compound topic="MEAN Stack" color="#fbb600" icon={<FaGamepad/>}/>
          <Compound topic="IOS Application" color="#f37168" icon={<BsFillPhoneFill/>}/>
          <Compound topic="Software Projects" color="#c1c765" icon={<FaGamepad/>}/>
    </div>
    </>
  )
}

export default Services