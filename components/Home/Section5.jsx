import Aos from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export const Section5 = () => {
  const [flexItems, setFlexItems] = useState(null)

    const handleClick = () => {
      setFlexItems(!showMenu)
    }
  
  useEffect(() => {
    const onSizeChange = () => {
      if(window.innerWidth >= 768){
        setFlexItems(true)
      } else {
        setFlexItems(false)
      }
    }
    window.addEventListener('resize', onSizeChange)
    Aos.init({
      duration: 400, 
      easing: 'ease',
      delay: 200
    })
  }, [])
  return (
    <div data-aos='fade-down' className='px-6 py-10 lg:h-[500px] md:w-4/5 mx-auto lg:flex lg:w-[60%]'>
      <div className='py-4 lg:w-1/2'>
        <h1 className='text-3xl pb-2 lg:text-4xl'>Experience Different Traditions around the World</h1>
        {/* <h1 className='text-3xl italic'>around the World</h1> */}
        <p className='text-sm text-gray-400 pb-4 lg:py-4 lg:text-lg'>Immerse yourself in captivating traditions, from vibrant festivals to serene ceremonies, and experience the rich cultural tapestry of your destination.</p>
        {/* <Link href={'/'} className='bg-blue-500 py-2 px-4 text-white hidden lg:block'>Book Vacation</Link> */}
        <Link href={'/'} className='bg-[#0a0660] py-2 px-4  text-white'>Book Vacation</Link>
      </div>
      <div className=' mb-10 relative md:flex md:my-4 lg:flex-col'>
        <div className={flexItems ? 'lg:absolute lg:top-64 lg:-right-20 bg-white p-1' : 'pb-2 absolute top-20 left-44 bg-white p-1'}>
          <Image alt='' className=' w-60 h-60 md:w-80 lg:h-40 object-cover rounded' src={'/images/celebrate1.jpg'} width={500} height={500}/>
        </div>
        <div className='bg-white p-2 md:p-0 md:px-4 rounded'>
          <Image alt='' className='w-60 h-60 md:w-80 lg:h-80 object-cover' src={'/images/celebrate3.jpg'} width={500} height={500}/>
        </div>
      
      </div>
    </div>
  )
}
