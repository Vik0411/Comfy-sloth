import React from 'react'
import { FeaturedProducts, Hero, Services, Contact } from '../components'
const HomePage = () => {
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  
  return (
    <main>
    <Hero/>
    <FeaturedProducts/>
    <Services/>
    <Contact/>
</main>
  )
  }
export default HomePage
