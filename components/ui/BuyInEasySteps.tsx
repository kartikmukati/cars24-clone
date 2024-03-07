import React from 'react'
import Image from 'next/image'


export default function BuyInEasySteps() {

     const BUY_IN_3_EASY_STEPS = [
          {
               title: 'Find the perfect car',
               description: 'Seamlessly browse thousands of MRL Certified cars',
               imagePath: '/images/buy-in-3-easy-steps/01.webp'
          },
          {
               title: 'Test Drive at home or at CARS24 hub',
               description: 'Enjoy the convenience of a home test drive or visit a CARS24 hub for free',
               imagePath: '/images/buy-in-3-easy-steps/02.webp'
          },
          {
               title: 'Buy it your way',
               description: 'You can pay in full or have it financed, the choice is yours',
               imagePath: '/images/buy-in-3-easy-steps/03.webp'
          }
     ]

     return (
          <>
               <div className='flex flex-col items-center md:items-start max-w-5xl md:mx-auto my-5 p-5 md:p-0'>
                    <h1 className='text-sm md:text-xl font-sans font-bold tracking-normal mb-2'>Buy in 3 easy steps </h1>
                    <p className='text-sm md:text-lg font-sans font-normal tracking-normal text-slate-500 mb-2'>Adding smiles to your miles, Car buying made simpler</p>
                    {BUY_IN_3_EASY_STEPS.map((item, index) => {
                         return (
                              <div className='flex flex-row items-center md:items-start gap-8 my-5' key={index}>
                                   <div>
                                        <Image src={item.imagePath} alt={"a"} width={0} height={0} sizes="100vw" className="w-full h-full object-cover" />
                                   </div>
                                   <div className='flex flex-col items-start w-72 '>
                                        <h1 className='text-sm font-sans font-semibold tracking-normal mb-2 text-slate-700'>{item.title}</h1>
                                        <p className='text-xs font-sans font-normal tracking-normal text-slate-500'>{item.description}</p>
                                   </div>
                              </div>
                         )
                    })}
                    <h1 className='text-sm font-sans font-semibold tracking-normal text-slate-700'>Have more questions? <span className='text-orange-500'><a href="https://www.cars24.com/faq/#buy">Read our FAQs</a></span></h1>
               </div></>
     )
}
