import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import Link from 'next/link';

export default function Header() {

     return (
          <header className='sticky top-0 p-4 flex flex-row justify-between max-w-6xl mx-auto z-20 items-center'>
               <div className='flex gap-10 items-center'>
                    <img alt='logo' src='/images/cars24-logo.webp' className='w-16'></img>
                    <div className='flex items-center gap-2 bg-stone-200/70 p-2 w-auto rounded-lg 
                         font-sans font-semibold tracking-normal cursor-pointer text-xs'>
                              <FaLocationDot />
                              <h3>New Delhi</h3>
                              <RiArrowDownSLine />
                    </div>
                    <div className='flex items-center gap-2 text-xs cursor-pointer uppercase font-sans font-bold tracking-normal'>
                         <Link href="/buy-car">Buy a car</Link>
                         <RiArrowDownSLine />
                    </div>
                    <div className='flex items-center gap-2 text-xs cursor-pointer uppercase font-sans font-bold tracking-normal'>
                         <Link href="/sell-car">sell a car</Link>
                         {/* <RiArrowDownSLine /> */}
                    </div>
                    <div className='flex items-center gap-2 text-xs cursor-pointer uppercase font-sans font-bold tracking-normal'>
                         <Link href="/car-finance">Car Finance</Link>
                         {/* <RiArrowDownSLine /> */}
                    </div>
               </div>
               <div>
                    <h1>Sign IN</h1>
               </div>

          </header>
     )
}
