'use client'

import TopBakeries from "@/components/TopBakeries"
import TopBars from "@/components/TopBars"
import TopBurgers from "@/components/TopBurgers"
import TopCoffees from "@/components/TopCoffees"
import TopItalians from "@/components/TopItalians"
import TopPizzas from "@/components/TopPizzas"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <div className="md:flex md:text-center md:items-center md:justify-center">
      <Accordion type="single" collapsible className="md:flex md:flex-col md:justify-center md:items-stretch md:w-[65%] my-4 mx-2">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4 font-bitter font-black text-[#15003F] text-lg bg-white/[.9] rounded-xl my-1">
          Top 10 Italian Spots 🇮🇹
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <TopItalians />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4 font-bitter font-black text-[#15003F] text-lg bg-white/[.9] rounded-xl my-1">
          Top 10 Coffee Spots ☕
          </AccordionTrigger>
          <AccordionContent>
            <TopCoffees />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="px-4 font-bitter font-black text-[#15003F] text-lg bg-white/[.9] rounded-xl my-1">
          Top 10 Pizza Spots 🍕
          </AccordionTrigger>
          <AccordionContent>
            <TopPizzas />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="px-4 font-bitter font-black text-[#15003F] text-lg bg-white/[.9] rounded-xl my-1">
          Top 10 Burger Spots 🍔
          </AccordionTrigger>
          <AccordionContent>
            <TopBurgers />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="px-4 font-bitter font-black text-[#15003F] text-lg bg-white/[.9] rounded-xl my-1">
          Top 10 Bar Spots 🍸
          </AccordionTrigger>
          <AccordionContent>
            <TopBars />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="px-4 font-bitter font-black text-[#15003F] text-lg bg-white/[.9] rounded-xl my-1">
          Top 10 Bakery Spots 🥐
          </AccordionTrigger>
          <AccordionContent>
            <TopBakeries />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
