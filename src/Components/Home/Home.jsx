import React from 'react'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <Values></Values>
      <Products></Products>
      <Discount></Discount>
      <Process></Process>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
