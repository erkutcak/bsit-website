import Image from 'next/image'
import React from 'react'
import gpt from '../../../public/blogs/chatgpt3.png'
import Link from 'next/link'

const Blog1 = () => {
  return (
    <div className='flex md:justify-center md:items-center'>
      <div className='flex flex-col bg-white/[.8] m-4 px-4 py-[4px] rounded-lg md:w-[65%]'>
        <div className='flex gap-2 mt-2'>
          <Link href="/blog" className='flex gap-2 mt-2 bg-[#A67DB8] rounded-lg px-2 py-2 drop-shadow-xl'>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1v14m8.336-.479-6.5-5.774a1 1 0 0 1 0-1.494l6.5-5.774A1 1 0 0 1 11 2.227v11.546a1 1 0 0 1-1.664.748Z"/>
            </svg>
            <p className='font-bitter font-black'>Back</p>
          </Link>
        </div>
        <Image src={gpt} className='rounded-lg mt-2 mb-4 drop-shadow-xl' alt='gpt-img'/>
        <h1 className='font-bitter font-black text-2xl text-center mb-4'>Unbelievable, ChatGPT can help you create recipes!</h1>
        <p>I am so excited to write this blog. The reason for my excitement is the great success of artificial intelligence in developing recipes. You guessed it right, I'm talking about ChatGPT, which everyone is talking about right now. <br/><br/>You can get suggestions on any topic from this robot by providing directions or asking questions, which you can utilize it for business, information, and entertainment purposes. Of course, I used it to create dessert recipes. <br/><br/>I would never have thought that artificial intelligence would help me with recipe creation process. There were times when I was indecisive about adding an extra egg or how many grams of chocolate should be added to a recipe. Before writing this blog, I tried asking many different questions to ChatGPT, and here are the answers that I got!</p>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>CREATE UNIQUE RECIPES</h2>
        <p>I asked ChatGPT to create a unique recipe, and it provided me a special recipe that I had never heard before. </p>
        <Image src={gpt} className='rounded-lg mt-2 mb-2' alt='gpt-img'/>
        <Image src={gpt} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>CREATE MORE SPECIFIC RECIPES</h2>
        <p>I've provided ChatGPT with an ingredient and asked it to create a recipe with that ingredient. For example, you only have 300 grams chocolate and don't know what to do with it, you can ask ChatGPT to prepare you a recipe with the ingredient you have.</p>
        <Image src={gpt} className='rounded-lg mt-2 mb-2' alt='gpt-img'/>
        <Image src={gpt} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <p>What if we increase the number of specific ingredients and add a calorie and serving size limit (for 2 people)? Will it still be able to recommend us a recipe? Yes!</p>
        <Image src={gpt} className='rounded-lg mt-2 mb-2' alt='gpt-img'/>
        <Image src={gpt} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>SUSTAINABLE RECIPES</h2>
        <p>You know that I always emphasize sustainability in my blog. I wondered if ChatGPT had any suggestions to contribute to this and saw that it's certainly possible to find recipes that you can utilize leftovers. There is a leftover chocolate cake in your fridge, and you want to turn it into another dessert.</p>
        <Image src={gpt} className='rounded-lg mt-2 mb-2' alt='gpt-img'/>
        <Image src={gpt} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <p>It is possible to add new parameters and questions to benefit more from ChatGPT. You can customize it as much as you want by specifying such as most liked, highest rated, and recipes that are suitable for a specific diet (gluten free, vegan, etc.).</p>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>VISUAL BASIS VERSION</h2>
        <p>In addition to all of these, the new version of ChatGPT launched a few days ago started to work not only on text but also on a visual basis. For example, you want to make a dessert but cannot decide which one to make and which recipe to use. You can take a photo of the ingredients you have in your fridge, or any ingredients want to use and upload it to ChatGPT. AI will analyze the image and create a dessert recipe that only has the ingredients in the image.</p>
        <Image src={gpt} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>INTEGRATION WITH SHOPPING STORE</h2>
        <p>A shared launch demo video uses ChatGPT to find recipes and order ingredients from an online store. ChatGPT automatically uploads the shopping list to the shopping cart and directs the user to the checkout to complete the order. I liked getting rid of making shopping lists the most. <br/><br/>In conclusion, experience ChatGPT as soon as possible if you haven’t done so, it will help you prepare desserts with ingredients you have at home, make use of the leftovers, create the recipe you want using multiple parameters, and even develop unique recipes. <br/><br/>Undoubtedly, with every new version of ChatGPT, we will continue to be amazed by it. <br/><br/>Let's see which dessert you can make with the ingredients in your fridge!</p>
      </div>
    </div>
  )
}

export default Blog1