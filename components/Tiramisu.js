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
        <div className='flex flex-row items-center mt-4 mb-2 gap-2'>
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
          </svg>
          <h4 className='font-bitter font-black text-xl underline decoration-double'>Ingredients</h4>
        </div>
        {displayIngredients}
      </div>
      <div>
        <div className='flex flex-row items-center mt-4 mb-2 gap-2'>
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 12 5.419 3.871A1 1 0 0 0 16 15.057V2.943a1 1 0 0 0-1.581-.814L9 6m0 6V6m0 6H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7m-5 6h3v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5Zm15-3a3 3 0 0 1-3 3V6a3 3 0 0 1 3 3Z"/>
          </svg>
          <h4 className='font-bitter font-black text-xl underline decoration-double'>Instructions</h4>
        </div>
        {displayInstructions}
      </div>
    </div>
  )
}

export default Tiramisu