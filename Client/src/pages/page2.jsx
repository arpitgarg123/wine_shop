import React from 'react'
import Paragraph from '../components/about/Paragraph'
import { Link } from 'react-router-dom'
import darkLogo from "../assets/darkLogo.png";


const About = () => {
  return (
    <div className='w-full h-fit flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 '>
                  <img src={darkLogo} alt="Logo" className="h-8 sm:h-16" />
     <div className='text-center '>
      <h1 className='text-2xl text-[#873942] font-medium'>Curators of Fine Wines</h1>
        <Paragraph />
       </div>
      
    </div>
  )
}

export default About