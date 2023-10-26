'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Tiramisu from '@/components/Tiramisu';

const Recipes = () => {

  // const { data: session } = useSession()
  // const router = useRouter()

  // useEffect(() => {
  //   if (session == null) router.push("/")
  // }, [session])


  return (
    <div className="md:flex md:text-center md:items-center md:justify-center">
      <Accordion type="single" collapsible className="md:flex md:flex-col md:justify-center md:items-stretch md:w-[65%] my-4 mx-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="relative w-full h-40 px-4 text-[#15003F] rounded-xl my-1 shadow-xl" style={{ backgroundImage: `url(recipes/tiramisu1.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <p className='bg-white text-[2rem] font-bitter font-black tracking-widest text-[#15003F]/[.9]' style={{ position: 'absolute', top: '10px', left: '10px' }}>TIRAMISU</p>
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <Tiramisu />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="relative w-full h-40 px-4 text-[#15003F] rounded-xl my-1 shadow-xl" style={{ backgroundImage: `url(recipes/levain.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <p className='bg-white min-[425px]:text-[2rem] max-[425px]:text-[1.9rem] font-bitter font-black tracking-widest text-[#15003F]/[.9]' style={{ position: 'absolute', top: '10px', left: '10px' }}>LEVAIN COOKIES</p>
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <Tiramisu />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="relative w-full h-40 px-4 text-[#15003F] rounded-xl my-1 shadow-xl" style={{ backgroundImage: `url(recipes/sebo.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <p className='bg-white text-[2rem] font-bitter font-black tracking-widest text-[#15003F]/[.9]' style={{ position: 'absolute', top: '10px', left: '10px' }}>SAN SEBASTIAN <br/>CHEESECAKE</p>
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <Tiramisu />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="relative w-full h-40 px-4 text-[#15003F] rounded-xl my-1 shadow-xl" style={{ backgroundImage: `url(recipes/brownie3.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <p className='bg-white text-[2rem] font-bitter font-black tracking-widest text-[#15003F]/[.9]' style={{ position: 'absolute', top: '10px', left: '10px' }}>FUDGE BROWNIE</p>
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <Tiramisu />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Recipes