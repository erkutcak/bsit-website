import { dishes } from '@/constants'
import Image from 'next/image'
import React from 'react'

const TopDishes = () => {

    const displaySpots = dishes.map((restaurant) => (
        <li className='my-4 flex flex-col justify-between h-40 rounded shadow-xl' style={{ backgroundImage: `url(${restaurant.background})`, backgroundSize: 'cover' }} key={restaurant.id}>
            <h2 className="flex-shrink border-b border-gray-300 bg-white/[.7] font-bitter font-black tracking-wide text-xl rounded">{restaurant.name}</h2>
            <div className='flex items-center mt-2 flex-wrap justify-around'>
                <button className='font-bitter px-3 py-2 text-xs shadow-xl font-medium text-center text-white bg-[#A67DB8] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <a href={restaurant.location}>Location</a>
                </button>
                <button className='font-bitter px-3 py-2 text-xs shadow-xl font-medium text-center text-white bg-[#A67DB8] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <a href={restaurant.website} target="_blank" rel="noopener noreferrer">Website</a>
                </button>
            </div>
        </li>
    ))

    return (
        <ul className='bg-white/[.8] mx-8 my-4 px-7 py-[4px] rounded-lg list-decimal'>
            {/* <h2 className='text-2xl mb-4 text-center'>🍕 Top 10 Pizza Spots 🍕</h2> */}
            {displaySpots}
        </ul>
    )
}

export default TopDishes;