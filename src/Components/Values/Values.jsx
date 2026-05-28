import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart } from "react-icons/fa";
import { FaLeaf } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
    const leftValues = value.slice(0,2).map(item=>{
        return(
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'> 
                <div>
                    <span className='flex justify-center items-center text-3xl text-white  bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'> 
                        {item.icon}
                    </span>
                </div>

                <div className='md:text-right text-left'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    const rightValues = value.slice(2,4).map(item=>{
        return(
            <div key ={item.id} className='flex items-center gap-7'> 
                <div>
                    <span className='flex justify-center items-center text-3xl text-white  bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'> 
                        {item.icon}
                    </span>
                </div>

                <div className='text-left'>
                    <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })


  return (
    <section>
        <div className='max-w-350 mx-auto px-10 py-20 text-center'>
            <Heading highlight='Our ' heading='Values'></Heading>
            <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>

                {/* Left-side Div */}
                <div className='md:min-h-100 flex flex-col gap-15 md:gap-5 justify-between'> 
                    {leftValues}
                </div>

                <div className='w-1/2 md:flex hidden'>
                    <img src={Basket}></img>
                </div>

                {/* Right-side Div */}
                <div className='md:min-h-100 flex flex-col gap-15 justify-between'>
                    {rightValues}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Values

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart></FaHeart>
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf></FaLeaf>
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaShieldAlt></FaShieldAlt>
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <PiPlantFill></PiPlantFill>
    },            
]