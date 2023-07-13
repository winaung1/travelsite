
import { Footer } from '@/components/Footer'
import { Pictures } from '@/components/Gallery/Pictures'
import { Navbar } from '@/components/Navbar'
import Image from 'next/image'
import { useState, useEffect} from 'react'


function Gallery() {
const [loading, setLoading] = useState(true)
useEffect(() => {
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout(() => {
        setLoading(false)
        document.querySelector('body').style.overflow = 'auto';
    }, 2000)
}, [loading])
  return (
    <div>
        <Navbar/>
        {loading &&
        <Image alt='' className='absolute inset-0 w-full h-full z-[30000] object-cover object-center' src={'/images/loading.gif'} width={100} height={100}/>
        }
        <div className='pt-20 gal'>
        <Pictures/>
        <Footer/>
        </div>
    </div>
  )
}

export default Gallery