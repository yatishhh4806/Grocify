import React, { useEffect, useState } from 'react';
import { IoMdHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false)
    const [isScrolled, setisScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setisScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    }, [])

    function toggleMenu(){
        setshowMenu(!showMenu)
    }
  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className ='max-w-350 mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>
            {/*Logo*/}
            <Link to ='/' className = 'text-3xl font-bold'>Gr<span className = 'text-orange-500 uppercase'>o</span>cify</Link>

            {/*Navbar Links*/}
            <ul className = 'md:flex items-center gap-x-15 hidden'>
                <li>
                    <a href='#' className ='font-semibold tracking-wider text-orange-500'>Home</a>
                </li>
                <li>
                    <a href='#' className ='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                </li>
                <li>
                    <a href='#' className ='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                </li>
                 <li>
                    <a href='#' className ='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                </li>                                               
            </ul>

            {/* Search Bar and other stuff */}
            <div className='flex items-center gap-x-5'>
                <div className='md:flex items-center p-1 border-2 border-orange-500 rounded-full hidden '>
                    <input type="text" placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'></input> 
                    <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><FaSearch /></button>
                </div>

                <a href ='#' className='text-zinc-800 text-3xl'><IoMdHeart /></a>
                <a href ='#' className='text-zinc-800 text-3xl'><HiShoppingBag /></a>
                <a href ='#' className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>{showMenu? <BiMenuAltRight />:<RxHamburgerMenu />}</a>
            </div>

            {/* Mobile Menu */}
            <ul className = {`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center md:hidden absolute top-30 -left-full  transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                <li>
                    <a href='#' className ='font-semibold tracking-wider text-orange-500'>Home</a>
                </li>
                <li>
                    <a href='#' className ='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                </li>
                <li>
                    <a href='#' className ='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                </li>
                 <li>
                    <a href='#' className ='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                </li> 
                <li className='flex items-center p-1 border-2 border-orange-500 rounded-full    md:hidden '>
                    <input type="text" placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'></input> 
                    <button className='bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><FaSearch /></button>
                </li>
                                              
            </ul>

        </nav>
    </header>
  )
}

export default Navbar   
