import React from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import { Banner } from './Banner/Banner'
import { CallAction } from './CallAction'
import { Section2 } from './Section2'
import { Section3 } from './Section3'
import { Section4 } from './Section4'
import { Section5 } from './Section5'

export const HomeContainer = () => {
  return (
    <div>
        <Navbar/>
        <div className='pb-20'>
        <Banner/>
        </div>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <CallAction/>
        <Footer/>
    </div>
  )
}
