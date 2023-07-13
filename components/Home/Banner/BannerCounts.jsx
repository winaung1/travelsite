import React from 'react'
import {MdFlight, MdHotel, MdCarRental} from 'react-icons/md'
import {BiMap} from 'react-icons/bi'
import {SlCalender} from 'react-icons/sl'
import {BsPeopleFill} from 'react-icons/bs'
import Link from 'next/link'
export const BannerCounts = () => {
  
  return (
      <div className='md:flex md:flex-col lg:flex-row relative items-center  bg-white h-[250px] md:h-auto lg:h-auto drop-shadow-2xl'>
        <div className='flex p-4 space-x-2 justify-between md:w-1/2 h-14 absolute -top-14  bg-gray-100'>
          <div className='flex items-center space-x-0.5'>
            <MdFlight className='rotate-45'/> 
            <p>Flight</p>
          </div>
          <div className='flex items-center space-x-0.5'>
            <MdHotel className=''/> 
            <p>Hotels</p>
          </div>
          <div className='flex items-center space-x-0.5'>
            <MdCarRental className=''/> 
            <p>Rent a car</p>
          </div>
        </div>
        <div className='my-3 md:flex px-4 md:space-x-3 justify-between items-center '>
          <div>
            <div className='flex items-center space-x-1'>
              <BiMap className='border-b rounded-full p-1 drop-shadow-2xl text-2xl'/>
              <p>Destination?</p>
            </div>
            <input type="text" placeholder='Salt Lake City, UT' className='border my-2 px-2'/>
          </div>
          <div>
            <div className='flex items-center space-x-1'>
              <SlCalender className='border-b rounded-full p-1 drop-shadow-2xl text-2xl'/>
              <p>When start?</p>
            </div>
            <input type="text" placeholder='April 20 2023' className='border my-2 px-2'/>
          </div>
          <div>
            <div className='flex items-center space-x-1'>
              <BsPeopleFill className='border-b rounded-full p-1 drop-shadow-2xl text-2xl'/>
              <p>How Many People?</p>
            </div>
            <input type="text" placeholder='12' className='border my-2 px-2'/>
          </div>
        </div>
          <Link href={'/'} className='md:w-full lg:w-auto bg-[#0a0660] py-2 px-4 text-white lg:h-auto'>Search Place</Link>
      </div>
  )
}
