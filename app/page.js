'use client'

import TopBurgers from "@/components/TopBurgers"
import TopCoffees from "@/components/TopCoffees"
import TopItalians from "@/components/TopItalians"
import TopPizzas from "@/components/TopPizzas"

export default function Home() {
  return (
    <div>
      <TopItalians />
      <TopCoffees />
      <TopPizzas />
      <TopBurgers />
    </div>
  )
}
