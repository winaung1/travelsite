import Link from 'next/link'
import {useState, useEffect} from 'react'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {MdOutlineClose} from 'react-icons/md'
import { Forms } from './Home/Forms'

 

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showForms, setShowForms] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }
  const handleForms = () => {
    setShowForms(!showForms)
  }


  
  const Menu = () => (
  <>
  <Link href={'/'}>Home</Link>
  <Link href={'/Gallery'}>Gallery</Link>
  <Link href={'/About'}>About Us</Link>
  <p onClick={handleForms} className={scrolled ? 'bg-white py-2 px-4 text-black cursor-pointer': 'bg-[#0a0660] py-2 px-4 text-white cursor-pointer'}>Register</p>
  </>
  
  )
  useEffect(() => {
    const onScrollChange = () => {
      if(window.scrollY > 100){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    const onSizeChange = () => {
      if(window.innerWidth > 800){
        setShowMenu(false)
      }
    }
    window.addEventListener('resize', onSizeChange)
    window.addEventListener('scroll', onScrollChange)
  }, [showMenu, scrolled])
  return (
    <div className={scrolled ? 'z-[1000] bg-[#0a0660] fixed top-0 drop-shadow-2xl text-white flex justify-between px-8 py-2 w-full items-center lg:justify-around' : 'z-[1000] bg-transparent fixed top-0  text-white flex justify-between px-8 py-2 w-full items-center lg:justify-around'}>
        <Link href='/'>DiamondXplore</Link>
        <div className='hidden lg:flex space-x-4 items-center'>
          <Menu/>
        </div>
        <div className='relative lg:hidden'>
          <HiOutlineMenuAlt1 onClick={handleClick} className='text-2xl'/>
        </div>
        {
          showMenu &&
          <div className='lg:hidden transition-all duration-300 ease-in bg-white text-xl leading-10 text-black  w-full p-4 absolute h-screen top-0 left-[50%] -translate-x-[50%] flex-col flex'>
            <Menu/>
          <MdOutlineClose onClick={handleClick} className='absolute top-5 right-5 text-2xl'/>
          </div>
          }
          {showForms &&
            <Forms setShowForms={setShowForms}/>
          }
    </div>
  )
}
