import React from 'react'
import Image from "next/image";

export default function Carousel() {

     const carCompanies = [
          "/images/maruti-suzuki.webp",
          "/images/hyundai.webp",
          "/images/honda.webp",
          "/images/toyota.webp",
          "/images/renault.webp",
          "/images/tata.webp",
          "/images/volkswagen.webp",
          "/images/mahindra.webp",
     ]

     return (
          <div className="w-full">
               <div className="relative flex flex-row justify-between max-w-5xl md:mx-auto md:top-10 lg:top-20 -top-3 mx-5">
                    <div className="absolute w-full flex justify-between">
                         <div className="text-white flex flex-col flex-wrap gap-y-2 mt-5 z-0">
                              <p className="text-[8px] md:text-lg font-sans font-semibold tracking-normal z-0">Certified cars with</p>
                              <h1 className="text-[10px] md:text-3xl font-sans font-bold tracking-normal">up to 12-month <br />warranty plans</h1>
                         </div>
                         <input type="text" className="w-[40%] md:w-[55%] absolute top-[110%] md:top-[120%] lg:top-[150%] h-5 md:h-10 lg:h-10 rounded-xl
         font-sans font-semibold tracking-normal outline-none 
         focus:text-black focus:font-sans focus:border-orange-500 focus:border-2 placeholder-gray-500 placeholder:font-medium px-5 
         text-[8px] md:text-xs md:text-md"
                              placeholder="Search for your favourite cars"></input>
                    </div>
                    <div className="absolute flex flex-wrap items-center justify-start gap-3 mt-28 md:mt-56 lg:mt-72">
                         {carCompanies.map((carCompany, index) => {
                              return (
                                   <div className="w-10 h-6 md:w-20 md:h-12 bg-white rounded-lg flex items-center justify-center cursor-pointer" key={index}>
                                        <Image src={carCompany} alt="cover" width={55} height={55} />
                                   </div>
                              )
                         })}

                         <div className="w-16 h-6 md:w-36 md:h-12 bg-orange-500 rounded-xl flex items-center justify-center cursor-pointer ">
                              <p className="text-[6px] md:text-sm font-sans font-semibold tracking-normal uppercase text-white">View All Cars</p>
                         </div>
                    </div>
               </div>
               <Image src={"/images/landing-page-cover.webp"} alt="cover" width={0} height={0} sizes="100vw" className="w-full" />

          </div>
     )
}
