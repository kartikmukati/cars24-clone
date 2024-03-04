"use client"
import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {

     const pathName = usePathname();
     

     


     return (
          <header className='sticky top-0 flex flex-row justify-between max-w-5xl mx-auto z-20 items-center'>
               <div className='flex gap-10 items-center'>
                    <img alt='logo' src='/images/cars24-logo.webp' className='w-16'></img>
                    <div className='flex items-center gap-2 bg-stone-200/70 p-2 w-auto rounded-lg 
                         font-sans font-semibold tracking-normal cursor-pointer text-xs'>
                         <FaLocationDot />
                         <h3>New Delhi</h3>
                         <RiArrowDownSLine />
                    </div>
                    <div className='flex items-center gap-2 text-xs cursor-pointer uppercase font-sans font-bold tracking-normal'>
                         <Link href="/" className={pathName === '/' ? 'border-b-red-400 border-b-4' : ''}>Buy a car</Link>
                         <RiArrowDownSLine />
                    </div>
                    <div className='flex items-center gap-2 text-xs cursor-pointer uppercase font-sans font-bold tracking-normal'>
                         <Link href="/sell-car" className={pathName === '/sell-car' ? 'border-b-red-400 border-b-4' : 'hover:border-b-red-400 hover:border-b-4'}>sell a car</Link>
                         {/* <RiArrowDownSLine /> */}
                    </div>
                    <div className='flex items-center gap-2 text-xs cursor-pointer uppercase font-sans font-bold tracking-normal'>
                         <Link href="/car-finance">Car Finance</Link>
                         {/* <RiArrowDownSLine /> */}
                    </div>
               </div>
               <div className='flex gap-4 p-2 w-auto items-center'>
                    <CiHeart />
                    <FaUserCircle />
                    <div>
                         <p className='text-xs font-sans font-bold tracking-normal'>Hello, Sign in</p>
                         <div className='flex items-center gap-2 cursor-pointer'>
                              <h1 className='text-md font-sans font-bold tracking-normal'>Account</h1>
                              <IoMdArrowDropdown className='mt-1 w-5 h-5'/>
                         </div>
                    </div>
               </div>

          </header>
     )
}
