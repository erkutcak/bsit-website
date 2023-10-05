import { pizzas } from '@/constants'
import Image from 'next/image'
import React from 'react'
import ubereats from '../public/ubereats.png'
import doordash from '../public/doordash.png'

const TopPizzas = () => {

    const displaySpots = pizzas.map((restaurant) => (
        <li className='my-4 flex flex-col justify-between h-40 rounded shadow-xl' style={{ backgroundImage: `url(${restaurant.background})`, backgroundSize: 'cover' }} key={restaurant.id}>
            <h2 className="flex-shrink border-b border-gray-300 bg-white/[.7] font-bitter font-black tracking-wide text-xl rounded">{restaurant.name}</h2>
            <div className='flex items-center mt-2 flex-wrap justify-around'>
                <div className="flex items-center px-2 py-2 my-1 text-xs font-medium text-center text-white bg-[#A67DB8] rounded-lg hover:bg-[#A67DB8] focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                    <p className="text-sm font-bold text-white shadow-xl">{restaurant.rating}</p>
                </div>
                <button className='font-bitter px-3 py-2 text-xs shadow-xl font-medium text-center text-white bg-[#A67DB8] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <a href={restaurant.location}>Location</a>
                </button>
                <button className='font-bitter px-3 py-2 text-xs shadow-xl font-medium text-center text-white bg-[#A67DB8] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <a href={restaurant.website} target="_blank" rel="noopener noreferrer">Website</a>
                </button>
                {
                restaurant.delivery && restaurant.ubereats && (
                    <button>
                    <a href={restaurant.ubereats} className='flex justify-center shadow-xl'>
                        <Image src={ubereats} className='h-8 w-8 rounded' alt='ubereats'/>
                    </a>
                    </button>
                )
                }

                {
                restaurant.delivery && restaurant.doordash && (
                    <button>
                    <a href={restaurant.doordash} className='flex justify-center shadow-xl'>
                        <Image src={doordash} className='h-8 w-8 rounded' alt='doordash'/>
                    </a>
                    </button>
                )
                }

                {
                !restaurant.delivery && (
                    <p className=' w-[77px] font-bitter px-3 py-2 text-xs shadow-xl font-medium text-center text-white bg-[#A67DB8] rounded-lg hover:bg-[#A67DB8] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-500 dark:hover:bg-gray-700 dark:focus:ring-blue-800'>Walk-in</p>
                )
                }
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

export default TopPizzas;