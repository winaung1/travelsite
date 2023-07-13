import React from 'react'

export const Section2 = () => {
  return (
    <div className='pt-[210px] md:pt-0 px-4 lg:px-20 grid md:grid-cols-2 lg:flexjustify-between lg:w-[1000px] mx-auto'>
      <div className='font-semibold'>
        <h1 className='text-3xl'>Popular Destination</h1>
        <p className='text-2xl'>by DiamondXplore</p>
      </div>
      <div>
        <h1 className='text-[#0a0660]'>1000+<span className='text-black p-2'>Destinations</span></h1>
        <div className='flex items-center pt-2'>
          <div className='w-[3px] mr-1 h-[60px] lg:h-10 bg-[#0a0660]'></div>
          <div className='text-gray-400'>
          <p>There are the top 4 most popular destinations today. There are</p>
          <p>1k destinations waiting for you, let&apos;s finit it now!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
