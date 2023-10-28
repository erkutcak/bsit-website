import { recipes } from '@/constants/recipes'
import React from 'react'

const Tiramisu = () => {

  const displayIngredients = recipes[0].ingredients.map((category, index) => (
    <div key={index}>
      <h5 className='font-bitter font-black text-md mb-1'>{category.category}</h5>
      <ul className='mb-2 mx-4 md:list-none list-disc'>
        {category.items.map((item, itemIndex) => (
          <li className='mb-1' key={itemIndex}>{item}</li>
        ))}
      </ul>
    </div>
  ))

  const displayInstructions = recipes[0].instructions.map((category, index) => (
    <div key={index}>
      <h5 className='font-bitter font-black text-md mb-1'>{category.category}</h5>
      <ul className='mb-2 mx-4 md:list-none list-disc'>
        {category.directions.map((item, itemIndex) => (
          <li className='mb-1' key={itemIndex}>{item}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div className='bg-white/[.8] mx-4 my-4 px-5 py-[4px] rounded-lg'>
      <h6>{recipes[0].textcon}</h6>
      <div>
        <h4 className='font-bitter font-black text-xl mt-4 mb-2 underline decoration-double'>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
        </svg>
        Ingredients</h4>
        {displayIngredients}
      </div>
      <div>
        <h4 className='font-bitter font-black text-xl mt-4 mb-2 underline decoration-double'>Instructions</h4>
        {displayInstructions}
      </div>
    </div>
  )
}

export default Tiramisu