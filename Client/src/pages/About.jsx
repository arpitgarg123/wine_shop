import React from 'react'
import Paragraph from '../components/about/Paragraph'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center '>
        <h1 className='text-5xl font-[ninna] mb-4 text-[#873942] font-black'>Who Are The Best</h1>
     
        <Paragraph />
       
        

        <div className='h-26'>
             <Link to='/about'>
         <button
              className="btn w-52 mt-8"
              aria-label="View more products"
            >
              Explore..
            </button>
        </Link>
        </div>
    </div>
  )
}

export default About