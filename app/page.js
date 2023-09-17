'use client'

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
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4">
          🇮🇹 Top 10 Italian Spots 🇮🇹
          </AccordionTrigger>
          <AccordionContent className="w-full">
            <TopItalians />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="px-4">
          ☕ Top 10 Coffee Spots ☕
          </AccordionTrigger>
          <AccordionContent>
            <TopCoffees />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="px-4">
          🍕 Top 10 Pizza Spots 🍕
          </AccordionTrigger>
          <AccordionContent>
            <TopPizzas />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="px-4">
          🍔 Top 10 Burger Spots 🍔
          </AccordionTrigger>
          <AccordionContent>
            <TopBurgers />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
