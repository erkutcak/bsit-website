import Image from 'next/image'
import React from 'react'
import tiramisu from '../../../public/blogs/tiramisu111.png'
import tiramisu2 from '../../../public/blogs/tiramisu2.png'
import Link from 'next/link'

const Blog2 = () => {
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
        <Image src={tiramisu} className='rounded-lg mt-2 mb-4 drop-shadow-xl' alt='tiramisu picture'/>
        <h1 className='font-bitter font-black text-2xl text-center mb-4'>The delicious coffee-scented story of Tiramisu</h1>
        <p>For those who have had the pleasure of savoring an authentic Tiramisu, there's no question that all other desserts fade into the background. In my inaugural blog, I embarked on a journey to unearth the rich history behind one of my all-time favorite sweet delights, Tiramisu. On this platform, we will delve into the captivating stories, trade secrets, and culinary techniques that illuminate the dishes we hold dear. Our very first guest in this culinary exploration is the beloved Tiramisu.

        <br/><br/>Join me as we uncover the fascinating history of Tiramisu, and allow your taste buds to time-travel through its delectable journey from inception to modern-day adoration.

        <br/><br/>Tiramisu, a crown jewel in Italian gastronomy, shrouds its origins in intriguing tales and legends. While the precise birth of this delectable dessert remains a mystery, one popular story weaves an enticing narrative:

        <br/><br/>In the 17th century, the Duke of Tuscany embarked on a visit to the enchanting city of Siena. During this era, desserts were more than mere confections; they symbolized the opulence and privilege only nobles could afford. In their eagerness to honor the distinguished duke, the skilled confectioners of Siena set out to create a dessert that would leave a lasting impression. It's said that the duke, like many nobles of his time, sought solace in sweet treats with aphrodisiac properties. Armed with this knowledge, the confectioners crafted a dessert from humble ingredients, believed to possess potent aphrodisiac qualities. The Duke relished this creation, and its recipe soon began to circulate, swiftly gaining notoriety. Thanks to the Duke of Tuscany, who took the recipe for this once-"Zuppa del Duca" (Duke's Soup), to Florence, the dessert began its gradual ascent to fame. It wasn't long before this delectable creation captured the hearts and palates of English intellectuals residing in Florence. The dessert's name evolved into "tiramisu," meaning "pull me up" in Italian, encapsulating its irresistible allure.

        <br/><br/>Yet, many view this tale as a fable, with the truth shrouded in the mists of history. In a more recent account, a visionary pastry chef immigrates to Milan and opens an eatery in Treviso. In a quest to establish his name, he embarks on an epicurean adventure, blending the daily flavors of the region into a dessert. The chef's culinary journey spans two years, exploring the symphony of coffee, velvety mascarpone, eggs, and ladyfinger biscuits. Finally, he arrives at the perfect taste he's been seeking. Inspired by the espresso infusion, he christens his creation "tiramisu," an ode to the very essence that propels this dessert to lift spirits. The masterstroke of this chef catches the attention of culinary luminaries of the time, who flock to his restaurant and begin crafting their versions of Tiramisu, each with its own unique twist.

        <br/><br/>Whether the tales are steeped in history or woven from whimsy, these narratives have kindled my imagination for a Tiramisu presentation that captures the essence of "pull me up." Picture serving Tiramisu in individual portions, nestled within a plastic baking hoop, set gracefully on a serving platter. Emblazoned upon the plastic hoop are the words "pull me up," an invitation to embark on an epicurean journey. As you gently draw it upward, the sabayon sauce and cocoa cascade, draping the entire cake, beckoning you to partake in its delights. Just as the name suggests, you must "pull it up" to savor the Tiramisu that promises to "pull you up" into a world of pure delight.

        <br/><br/>Feeling inspired yet? Stay tuned for my delectable Tiramisu recipe that's designed to transport you to the heart of Italy. With intricate tips and exclusive techniques that you won't find elsewhere, this recipe promises an experience close to what you'd encounter in the charming streets of Italy. If you're eager to whip up a classic Italian Tiramisu for your loved ones, you'll find the recipe right here soon.
        
        <br/><br/>Before you embark on your Tiramisu-making adventure, be sure to have some homemade, fresh Italian pasta on hand, and after indulging in the Tiramisu, let it indeed "pull you up" to new heights of culinary delight! 
        </p>
        <div className='flex flex-row items-center justify-center mt-4'>
          <Image src={tiramisu2} className='rounded-lg mt-2 mb-4 drop-shadow-xl max-h-[250px] max-w-[200px] ' alt='tiramisu picture'/>
        </div>
      </div>
    </div>
  )
}

export default Blog2