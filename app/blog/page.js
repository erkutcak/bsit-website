'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { blogs } from '@/constants/blogs';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {

  // const { data: session } = useSession()
  // const router = useRouter()

  // useEffect(() => {
  //   if (session == null) router.push("/")
  // }, [session])

  const displayCards = blogs.map((blog) => (
    <div className='bg-white/[.8] mx-4 my-4 rounded-lg w-full drop-shadow-xl cursor-pointer md:w-[200px] max-[375px]:w-[75%]' key={blog.id}>
          <img src={`/blogs/${blog.image}`} className='h-[150px] w-full rounded-lg' alt='blog-image'/>
          <div className='p-2'>
            <h1 className='font-bitter font-black mt-2 mb-2'>{blog.title}</h1>
            <h4 className='italic text-sm'>{blog.date}</h4>
            <p className='text-sm mt-2'>{blog.category}</p>
          </div>
    </div>
  ))

  return (
    <div className='flex flex-row items-center justify-center max-[375px]:flex-col'>
      {displayCards}
    </div>
  )
}

export default Blog