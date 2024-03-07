import React from 'react'
import Image from 'next/image';

export default function WhyBuyFromUs() {

     const WHY_BUY_FROM_US = [
          {
            title: "CARS24 Warrenty",
            description: "Enjoy complete peace of mind with warrenty plus upto 12 months to protect your car against unforeseen repairs",
            href: 'https://www.cars24.com/why-cars24/warranty',
            imagePath: '/images/why-buy-from-us/why-buy-from-us-01.webp'
          },
          {
            title: "7-Day Return",
            description: "Love it, keep it. Changed your mind? Return it within 7 days for a full refund",
            href: 'https://www.cars24.com/why-cars24/return',
            imagePath: '/images/why-buy-from-us/why-buy-from-us-02.webp'
          },
          {
            title: "Easy Financing Options",
            description: "Become eligible for Zero Down Payment via EMIs of up to 72 months and instant loans",
            href: 'https://www.cars24.com/why-cars24/finance',
            imagePath: '/images/why-buy-from-us/why-buy-from-us-03.webp'
          },
          {
            title: "140-Quality Checks",
            description: "Inspected across 140 parameters and refurbished by auto-experts, our cars are ready for the road",
            href: 'https://www.cars24.com/why-cars24/quality',
            imagePath: '/images/why-buy-from-us/why-buy-from-us-04.webp'
          },
        ]
        
     return (
          <>
          <div className='my-20'>
               <div className='flex flex-col items-center md:items-start max-w-5xl md:mx-auto'>
                    <h1 className='text-sm md:text-xl font-sans font-bold tracking-normal'>Why buy from us ? </h1>
               </div>
               <div className='flex md:flex-row flex-col items-center md:items-start justify-between gap-10 max-w-5xl md:mx-auto my-5 p-5 md:p-0'>
                    <div className='flex flex-col md:flex-row items-center justify-start gap-5'>
                         {WHY_BUY_FROM_US.map((item, index) => {
                              return (
                                   <div className='flex flex-col rounded-3xl bg-gray-50 w-60 cursor-pointer hover:scale-105 duration-200' key={index}>
                                        <Image src={item.imagePath} alt={item.title} width={0} height={0} sizes="100vw" className="w-full h-full object-cover" />
                                        <div className='flex flex-col p-5 gap-y-2'>
                                             <h1 className='text-sm md:text-lg font-sans font-semibold tracking-normal'>{item.title}</h1>
                                             <p className='text-xs font-sans font-normal tracking-normal text-slate-600 min-h-20'>{item.description}</p>
                                             <a href={item.href} className='text-xs font-sans font-bold tracking-normal text-orange-500'>Know More &gt;</a>
                                        </div>
                                   </div>
                              )
                         })}
                    </div>
               </div>
          </div>
          </>
     )
}
