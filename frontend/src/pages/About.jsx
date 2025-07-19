import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img  className='w-full md:max-w-[450px]' src={assets.about_img}/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dicta impedit repellendus molestias porro voluptas ut ipsa beatae, unde temporibus numquam suscipit consequatur aliquid illo, id, minus praesentium debitis fugiat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eligendi ab minima fuga magnam omnis facilis unde nobis voluptate voluptates amet maxime, tenetur maiores, vero, ad quidem eum sapiente nisi?</p> 
        <b className='text-gray-800'>Our Mission</b>     
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing  Aut ex consectetur adipisicing  pariaturs quae molestias? Vero, excepturi.</p>
      </div>
    </div>

    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1'>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iste nihil voluptatibus id laudantium aliquid placeat natus dolorem doloribus rem laborum vitae, rerum expedita in consequuntur.</p>
      </div>

       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1'>
        <b>Convenience</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad iste nihil voluptatibus id laudantium aliquid placeat natus dolorem doloribus rem laborum vitae, rerum expedita in consequuntur.</p>
      </div>

       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 flex-1'>
        <b>Exceptional Customer Service</b>
        <p className='text-gray-600'>tatibus id laudantium aliquid placeat natus dolorem doloribus dkfnwrg oinfwef  rem laborum vitae, rerum expedita in consequuntur.</p>
      </div>
    </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
