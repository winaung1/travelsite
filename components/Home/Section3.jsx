
import Image from 'next/image'
import React from 'react'
import {BiMap} from 'react-icons/bi'

export const Section3 = () => {
 
  return (
    <div className='grid md:grid-cols-2 items-center justify-center gap-4 lg:flex lg:px-20 lg:space-x-4 mt-20'>
      <div className='w-[360px] md:w-full lg:w-60 bg-white drop-shadow-2xl p-4'>
        <Image alt='' className='cursor-pointer hover:scale-105 hover:rounded transition-all duration-300 ease-in w-full h-60 lg:h-40 object-cover' src={'/images/thailand.jpg'} width={500} height={500}/>
        <p className='py-2 font-semibold'>Nusa Penida</p>
        <div className='flex justify-between  text-xs'>
          <div className='flex items-center'>
            <BiMap/>
            <p>Indonesia</p>
          </div>
          <p className='text-[#0a0660]'>$24<span className='text-black'>/Person</span></p>
        </div>
      </div>
      <div className='w-[360px] md:w-full  lg:w-60 bg-white drop-shadow-2xl p-4'>
        <Image alt='' className='cursor-pointer hover:scale-105 hover:rounded transition-all duration-300 ease-in w-full h-60 lg:h-40 object-cover' src={'/images/asia.jpg'} width={500} height={500}/>
        <p className='py-2 font-semibold'>Nusa Penida</p>
        <div className='flex justify-between  text-xs'>
          <div className='flex items-center'>
            <BiMap/>
            <p>Indonesia</p>
          </div>
          <p className='text-[#0a0660]'>$67<span className='text-black'>/Person</span></p>
        </div>
      </div>
      <div className='w-[360px] md:w-full  lg:w-60 bg-white drop-shadow-2xl p-4'>
        <Image alt='' className='cursor-pointer hover:scale-105 hover:rounded transition-all duration-300 ease-in w-full h-60 lg:h-40 object-cover' src={'/images/africa.jpg'} width={500} height={500}/>
        <p className='py-2 font-semibold'>Nusa Penida</p>
        <div className='flex justify-between  text-xs'>
          <div className='flex items-center'>
            <BiMap/>
            <p>Indonesia</p>
          </div>
          <p className='text-[#0a0660]'>$24<span className='text-black'>/Person</span></p>
        </div>
      </div>
      <div className='w-[360px] md:w-full  lg:w-60 bg-white drop-shadow-2xl p-4'>
        <Image alt='' className='cursor-pointer hover:scale-105 hover:rounded transition-all duration-300 ease-in w-full h-60 lg:h-40 object-cover' src={'/images/europe.jpg'} width={500} height={500}/>
        <p className='py-2 font-semibold'>Nusa Penida</p>
        <div className='flex justify-between  text-xs'>
          <div className='flex items-center'>
            <BiMap/>
            <p>Indonesia</p>
          </div>
          <p className='text-[#0a0660]'>$40<span className='text-black'>/Person</span></p>
        </div>
      </div>
    </div>
  )
}
