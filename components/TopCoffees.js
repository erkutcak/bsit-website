import { coffees } from '@/constants'
import Image from 'next/image'
import React from 'react'
import ubereats from '../public/ubereats.png'
import doordash from '../public/doordash.png'

const TopCoffees = () => {

    const displaySpots = coffees.map((restaurant) => (
        <li className='my-4 flex-column' key={restaurant.id}>
            <h2 className="flex-shrink border-b border-gray-300 font-indieflower text-xl">{restaurant.name}</h2>
            <div className='flex items-center mt-2 flex-wrap justify-around'>
                <div className="flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="text-sm font-bold text-white">{restaurant.rating}</p>
                </div>
                <button className='font-indieflower px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <a href={restaurant.location}>Location</a>
                </button>
                <button className='font-indieflower px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <a href={restaurant.website}>Website</a>
                </button>
                {restaurant.delivery ? 
                    (
                        restaurant.ubereats ? 
                        <button>
                            <a href={restaurant.ubereats} className='flex justify-center'>
                                <Image src={ubereats} className='h-8 w-8 rounded' alt='ubereats'/>
                            </a>
                        </button> 
                        : 
                        <button >
                            <a href={restaurant.doordash} className='flex justify-center'>
                                <Image src={doordash} className='h-8 w-8 rounded' alt='doordash'/>
                            </a>
                        </button>
                    )
                    : 
                    <p className=' w-[77px] font-indieflower px-3 py-2 text-xs font-medium text-center text-white bg-gray rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-blue-800'>Walk-in</p>
                }
            </div>
        </li>
    ))

    return (
        <ul className='bg-white/[.8] mx-8 my-4 px-7 py-[4px] rounded-lg list-decimal'>
            <h2 className='text-2xl mb-4 text-center'>☕ Top 10 Coffee Spots ☕</h2>
            {displaySpots}
        </ul>
    )
}

export default TopCoffees;

// className='font-indieflower w-[77px] px-1 py-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
// className='font-indieflower w-[77px] px-1 py-1 text-xs font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'