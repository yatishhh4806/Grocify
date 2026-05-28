import React from 'react'
import groceryPic from '../../assets/grocery.png'
import Button from '../Button/Button'

const Hero = () => {
  return (
    <section>
      <div className='max-w-350 mx-auto px-10 flex flex-col md:flex-row items-center md:pt-45 pt-35'>
        {/* Hero Content */}
        <div className='flex-1'>
          <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Best Quality Delivered</span>
          <h1 className='md:text-7xl/20 text-5xl/14 font-bold mt-4 '>
            Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies</span> <br></br>In Your City
          </h1>
          <p className='text-zinc-600 md:text-lg text-md max-w-132.5 mt-5 mb-10 '>Bred for a high content of beneficial substances. Our products are all fresh and healthy.</p>
          <Button content="Shop Now"></Button>
        </div>
        {/* Hero Image */}
        <div className='flex-1'>
            <img src={groceryPic} alt='Hero Image'></img>
        </div>
      </div>
    </section>
  )
}

export default Hero
