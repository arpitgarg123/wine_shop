import React from 'react'
import Paragraph from '../components/about/Paragraph'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 '>
        <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-4xl font-[nexa] mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-[#873942]  text-center leading-tight'>
          Who Are The Best
        </h1>
     
        <Paragraph />
       
        <div className='mt-6 sm:mt-8 md:mt-10 h-20  lg:mt-12'>
             <Link to='/about'>
         <button
              className="btn w-40 sm:w-48 md:w-52 lg:w-60 text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
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