import { mySvg } from '@/svg'
import {useEffect} from 'react'
import {FaGooglePlay} from 'react-icons/fa'
import {AiFillApple} from 'react-icons/ai'
import Image from 'next/image'
import aos from 'aos'
export const CallAction = () => {
  useEffect(() => {
    aos.init({
      duration: 400, 
      easing: 'ease',
      delay:200
    })
  }, [aos])
  return (
    <div className='relative flex-col h-80 bg-black/90 text-white text-center flex justify-center items-center'>
      <div data-aos='fade-down'>
        <div className='text-4xl'>
          <h1>Download and Get</h1>
          <h1>Your First Journey!</h1>
        </div>
        <p className='text-gray-500 px-4 text-sm pt-2 lg:w-4/5 mx-auto lg:text-xl xl:w-[60%]'>Embark on unforgettable adventures with just a tap. Download our adventure app now and unlock a world of thrilling experiences at your fingertips. Don&apos;t miss out!</p>
      </div>
      <div data-aos='fade-down' className='flex space-x-4 items-center my-4 '>
        <div className='flex items-center bg-white text-black px-2 py-1 rounded'>
          <AiFillApple className='text-xl'/>
          <div className=''>
            <p className='text-[8px] font-thin'>Available on the</p>
            <p className='font-semibold text-[10px]'>Apple Store</p>
          </div>
        </div>
        <div className='flex items-center bg-white text-black px-2 py-1 rounded'>
          <FaGooglePlay className='text-xl text-[#0a0660]'/>
          <div className=''>
            <p className='text-[8px] font-thin'>Download on the</p>
            <p className='font-semibold text-[10px]'>Google Play</p>
          </div>
        </div>
      </div>
    
      <div className='absolute inset-0 w-full h-full'>
        {mySvg.svg2}
      </div>
    </div>
  )
}
