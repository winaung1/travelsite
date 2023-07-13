import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { BsTwitter, BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs'
export const Footer = () => {
  return (
    <div className='px-4 py-4 lg:w-[60%] mx-auto'>
      <div className=''>
        <p className='font-semi-bold text-2xl py-4 md:w-4/5 mx-auto md:text-3xl'>Get Updates on fun stuff your probably want to know about in your inbox.</p>
        <div className='flex items-center my-4'>
          <input type="text" placeholder='Email address' className='border-b w-full h-10 md:w-4/5 mx-auto outline-none bg-transparent'/>
          <FaArrowRight/>
        </div>
      </div>
      <div className='flex justify-between md:justify-center space-x-10'>
        <div>
          <h1 className='font-semibold pb-2'>Menu</h1>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
        </div>
        <div>
          <h1 className='font-semibold pb-2'>Support</h1>
          <p>Terms & Conditions</p>
          <p>Help & FAQ</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='flex justify-start space-x-10 my-4 text-2xl w-4/5 mx-auto'>
        <BsFacebook className='hover:text-[#0a0660]'/>
        <BsInstagram className='hover:text-[#0a0660]'/>
        <BsTiktok className='hover:text-[#0a0660]'/>
        <BsTwitter className='hover:text-[#0a0660]'/>
      </div>
    </div>
  )
}
