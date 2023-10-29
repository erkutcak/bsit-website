import Image from 'next/image'
import React from 'react'
import gpt from '../../../public/blogs/chatgpt3.png'
import Link from 'next/link'
import pic1 from '../../../public/blogs/1-1.png'
import pic2 from '../../../public/blogs/1-2.png'
import pic3 from '../../../public/blogs/1-3.png'
import pic4 from '../../../public/blogs/1-4.png'
import pic5 from '../../../public/blogs/1-5.png'
import pic6 from '../../../public/blogs/1-6.png'
import pic7 from '../../../public/blogs/1-7.png'
import pic8 from '../../../public/blogs/1-8.png'
import pic9 from '../../../public/blogs/1-9.png'

const Blog1 = () => {
  return (
    <div className='flex md:justify-center md:items-center'>
      <div className='flex flex-col bg-white/[.8] m-4 px-4 py-4 rounded-lg md:w-[65%]'>
        <div className='flex gap-2'>
          <Link href="/blog" className='flex gap-2 bg-[#A67DB8] rounded-lg px-2 py-2 drop-shadow-xl'>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1v14m8.336-.479-6.5-5.774a1 1 0 0 1 0-1.494l6.5-5.774A1 1 0 0 1 11 2.227v11.546a1 1 0 0 1-1.664.748Z"/>
            </svg>
            <p className='font-bitter font-black'>Back</p>
          </Link>
        </div>
        <Image src={gpt} className='rounded-lg mt-2 mb-4 drop-shadow-xl' alt='gpt-img'/>
        <h1 className='font-bitter font-black text-2xl text-center mb-4'>Unlocking Culinary Magic: Crafting Recipes with ChatGPT</h1>
        <p>I'm thrilled to share this blog post with you, and my excitement stems from witnessing the remarkable strides artificial intelligence has made in the realm of recipe development. In particular, I want to introduce you to the buzzworthy ChatGPT, which is making waves in conversations everywhere. <br/><br/>This extraordinary AI-powered tool serves as a versatile source of information and inspiration, offering insights and ideas on a wide array of topics. Whether you're seeking assistance for your business, seeking knowledge, or simply looking for some entertainment, ChatGPT has you covered. In my case, I put it to the test for the delightful task of crafting dessert recipes.<br/><br/>Never did I imagine that artificial intelligence could lend a hand in the intricate art of recipe creation. Gone are the days when I'd second-guess whether to add that extra egg or how many grams of chocolate to incorporate. Before sharing my findings in this blog, I delved into numerous culinary queries with ChatGPT, and the insights I gained were truly remarkable.</p>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>Exploring Unique Recipes with ChatGPT</h2>
        <p>One day, I asked ChatGPT to whip up a unique recipe, and it delivered a culinary gem I had never encountered before.</p>
        <Image src={pic1} className='rounded-lg mt-2 mb-2' alt='gpt-img'/>
        <Image src={pic2} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>Ingredient-Based Recipe Creation</h2>
        <p>ChatGPT can work its magic with just a single ingredient. For instance, if you find yourself with 300 grams of chocolate and no inspiration, ChatGPT can craft a delicious recipe using that very ingredient.</p>
        <Image src={pic3} className='rounded-lg mt-2 mb-2' alt='gpt-img'/>
        <Image src={pic4} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <p>Imagine increasing the complexity by adding specific ingredients and setting calorie limits, all tailored for a meal designed for two. Surprisingly, ChatGPT continues to impress with its recipe recommendations.</p>
        <Image src={pic5} className='rounded-lg mt-2 mb-2' alt='gpt-img'/>
        <Image src={pic6} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>Sustainable Cooking</h2>
        <p>Sustainability is a recurring theme on my blog. ChatGPT doesn't disappoint in this department either. It can help you transform leftovers into new and exciting dishes. So, if you have a forlorn chocolate cake in your fridge, ChatGPT can guide you to create another dessert masterpiece.</p>
        <Image src={pic7} className='rounded-lg mt-2 mb-2' alt='gpt-img'/>
        <Image src={pic8} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <p>The power of ChatGPT extends beyond mere recipe creation. You can customize your queries to align with your preferences, whether it's the most liked, highest-rated, or recipes suitable for specific diets like gluten-free or vegan. </p>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>Visual Recipe Generation</h2>
        <p>In its latest iteration, ChatGPT has transcended textual boundaries and delves into visual content. Now, you can simply snap a photo of the ingredients in your fridge, upload it to ChatGPT, and watch in awe as AI transforms them into a delectable dessert recipe.</p>
        <Image src={pic9} className='rounded-lg mt-2 mb-4' alt='gpt-img'/>
        <h2 className='font-bitter font-black text-md mt-4 mb-4'>Integration with Shopping</h2>
        <p>One remarkable demonstration video showcases ChatGPT's ability to not only find recipes but also streamline the shopping process. It automatically compiles a shopping list and guides you through the checkout for a seamless experience. A true game-changer, particularly for those averse to making shopping lists. <br/><br/>If you haven't explored ChatGPT's culinary prowess yet, now is the time. It can help you create desserts with the ingredients already at home, make the most of leftovers, fine-tune recipes according to multiple parameters, and even conjure up unique culinary creations. With each new version, ChatGPT continues to astound us. So, let's uncover the dessert you can craft with the ingredients in your fridge today! </p>
      </div>
    </div>
  )
}

export default Blog1