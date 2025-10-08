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
import DeliveryInfo from './pages/DeliveryInfo'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import RefundPolicy from './pages/RefundPolicy'



const App = () => {
  return (
    <div>
      <Navtop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
  )
} 

export default App