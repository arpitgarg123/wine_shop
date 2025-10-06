import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navtop from './components/navbar/Navtop'
import Hero from './pages/Hero'
import About from './pages/page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import BlogPost from './pages/BlogPost'
import Home from './pages/Home'



const App = () => {
  return (
    <div>
      <Navtop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
  )
} 

export default App