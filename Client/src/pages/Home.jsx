import React from 'react'
import Hero from './Hero'
import About from './page2'
import Page4 from './Page4'
import Page3 from './Page3'
import Page5 from './Page5'
import Products from './Products'
import Blogs from './Blogs'
import Footer from './Footer'

const Home = () => {
   return (
    <div>
      <Hero />
      <About />
      <Products />
       <Page5 />
      <Page3 />
      {/* <Page4 /> */}
     
      
      <Blogs />
      <Footer />
    </div>
  )
}

export default Home