import Image from 'next/image'
import React from 'react'
import toronto from '../../public/toronto.png'

const About = () => {
  return (
    <div className='flex flex-col items-center text-center bg-white/[.8] mx-8 my-4 px-7 py-[4px] rounded-lg'>
      <h1 className='font-bitter font-black text-xl mt-4'>About Us</h1>
      <h2 className='font-bitter text-md mt-2 mb-6'>
      "Best Spots in Toronto" is a dynamic platform aimed at inspiring Torontonians who enjoy discovering new places and consider themselves foodies. Designed for those who live life with joy, love learning new things, and enthusiastically share what they've learned, "Best Spots in Toronto" will be your guide to the dynamic city life with its daily updated content. <br /><br />
      Offering a wide range of content, from the most delicious restaurants to impressive events, hidden gems, and natural beauties in the city, the platform serves as the beginning of a journey for those who want to experience the most beautiful and enjoyable moments in the city.
      </h2>
      <Image src={toronto} className='mb-4 rounded' alt='toronto'/>
    </div>
  )
}

export default About