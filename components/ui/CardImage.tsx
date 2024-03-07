import React from 'react'
import Image from 'next/image';

export default function CardImage() {
  return (
     <div className="flex md:flex-row flex-col items-center justify-between gap-10 max-w-5xl md:mx-auto my-20">
     <div className=" w-64 h-56 rounded-xl cursor-pointer">
       <Image src={"/images/desktop_fallback.webp"} alt="cover" width={0} height={0} sizes="100vw" className="w-full h-full rounded-xl object-cover"></Image>
     </div>
     <div className="w-64 h-56 rounded-xl cursor-pointer">
       <Image src={"/images/homepage-desktop-new.webp"} alt="cover" width={0} height={0} sizes="100vw" className="w-full h-full rounded-xl object-cover"></Image>
     </div>
     <div className="w-64 h-56 rounded-xl cursor-pointer">
       <Image src={"/images/homepage-desktop-new.webp"} alt="cover" width={0} height={0} sizes="100vw" className="w-full h-full rounded-xl object-cover"></Image>
     </div>
 </div>
  )
}
