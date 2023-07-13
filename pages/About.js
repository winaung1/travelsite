import { AboutUs } from '@/components/About/AboutUs'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import React from 'react'

function About() {
  return (
      <>
         <Navbar/>
        <AboutUs/>
        <div className='pt-4'>
        <Footer/>
        </div>
      </>
  )
}

export default About