"use client"
import { navItems } from '@/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './ui/button'
import '../styles/global.scss';
import React, { useState } from 'react';
import '../styles/global.scss';
import { NavDropDown } from './Navdropdown'
import { NavDropDown2 } from './Navdropdown2'




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className="flex w-full justify-between lg:justify-center items-center h-[80px]  px-6 md:p-6 backdrop-blur-md navbar self-center scroll-smooth z-10 fixed mb-20 bg-slate-50">
        
        <div className="flex lg:gap-12 justify-start lg:justify-center w-full px-2">
          <Link href='/' className={cn(
                "relative dark:text-slate-50 items-center flex space-x-1 text-slate-800 dark:hover:text-slate-300 hover:text-slate-500"
              )}><span className="!cursor-pointe">Home</span>
          </Link>

          {/* <Link href='/'><span className="text-l font-bold">Argus Doctors</span>
          </Link> */}
         

          {navItems.map((navItem: any, idx: number) => (
            <Link 
              key={idx} 
              href={navItem.link}
              className={cn(
                "hidden lg:flex relative dark:text-slate-50 items-center space-x-1 text-slate-800 dark:hover:text-slate-300 hover:text-slate-500"
              )}
            >
              <span className="!cursor-pointer">{navItem.name}</span>
            </Link>
          ))}

          <div className="hidden lg:flex gap-4 items-start justify-start w-[500px]">
            <NavDropDown />
            <NavDropDown2 />
          </div>
        </div>


{/* 
        <Link href="/" className="hidden lg:flex">
        <Button className="w-[150px]">Book Now</Button>
        </Link> */}

        <nav className="lg:hidden">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button">
      <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </label>

      <a href="/afterhours">After Hours Care</a> 
      <a href="/holidayhours">Holiday Hours</a>
      <a href="/contact">Contact</a>
      <a href="/faq">FAQ</a>
      <Link href="https://ocean.cognisantmd.com/online-booking/cddcbae7-4cba-4ebd-9e93-7b5aceb285e5">
          <Button className="w-[220px] h-[60px] lg:mt-6">Online appointment booking</Button>
      </Link>
      
    </div>
  </nav>
   
    </div>
  )
}

export default Navbar