import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <footer aria-label='footer' className='mt-8 min-h-96 relative'>
      <Image
        src="/images/hero.png"
        className={`w-full h-full absolute object-cover`}
        width={626}
        height={418}
        alt=''
        priority
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70" />

      <div className='relative text-white flex gap-28 p-10 lg:p-24'>
        <div className='hidden lg:block w-80'>
          <Image
            src="/images/logo.png"
            className="w-52 self-start"
            width={596}
            height={418}
            alt=''
            priority
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className='w-full flex flex-wrap gap-10'>
          <div>
            <h3 className='uppercase w-fit font-bold text-xl flex flex-col items-center'>
              company
              <div className='w-[80%] h-1 
                bg-orange rounded mt-1'
              />
            </h3>
            <ul className='mt-5 uppercase flex flex-col gap-1'>
              <li>about us</li>
              <li>services</li>
              <li>works</li>
              <li>information</li>
            </ul>
          </div>
          <div>
            <h3 className='uppercase w-fit font-bold text-xl flex flex-col items-center'>
              information
              <div className='w-[80%] h-1 bg-orange rounded mt-1'
              />
            </h3>
            <ul className='mt-5 uppercase flex flex-col gap-1'>
              <li>blog</li>
              <li>contact us</li>
              <li>career</li>
              <li>testimonials</li>
            </ul>
          </div>
          <div>
            <h3 className='uppercase w-fit font-bold text-xl flex flex-col items-center'>
              address
              <div className='w-[80%] h-1 bg-orange rounded mt-1' />
            </h3>
            <ul className='mt-5 uppercase flex flex-col gap-1'>
              <li><a href='mailto:pixels@gmail.com'>pixels@gmail.com</a></li>
              <li>(02) 6441 6721</li>
              <li>12/56 Hargeisa,Somaliland</li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}
