import aos from 'aos';
import Image from 'next/image'
import {useEffect} from 'react'

export const AboutUs = () => {

  
  
  useEffect(() => {
    const card = document.querySelectorAll(".card");
    const THRESHOLD = 15;
    card.forEach(card => {

      function handleHover(e) {
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;
        
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
        
        card.style.transform =
        `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
      }
      function resetStyles(e) {
        card.style.transform =
        `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
      }
      card.addEventListener("mousemove", handleHover);
      card.addEventListener("mouseleave", resetStyles);
    })
    aos.init({
      delay: 400,
      duration: 300,
      easing: 'ease',
    })
    }, [])
  return (
    <>
    <div className='bg-no-repeat h-96 w-full object-cover text-white pt-20 text-center bg'>
      <h1 className='font-bold text-5xl flex justify-center items-center w-full h-full'>About Us</h1>
    </div>
    <div className='bg-gray-50 px-4'>
    <div data-aos='fade-down' className='py-4 lg:text-center'>
      <h1 className='font-bold text-4xl tracking-wider text-gray-600'>DiamondXplore: Ignite Your Bold Spirit</h1>
      <p className='lg:w-4/5 mx-auto py-4 text-gray-400 font-semibold text-md tracking-wide leading-6'>At Welcome to DiamondXplore, where we redefine the extraordinary. As pioneers in the realm of escapades, we inspire audacious spirits to break free from the mundane and embrace the thrill of the unknown. With intrepid explorers curating unparalleled adventures, we push the boundaries of possibility, from uncharted terrains to unexplored depths. Join us for adrenaline-pumping encounters and create lifelong memories. Welcome to the realm of DiamondXplore, where extraordinary awaits.</p>
    </div>
    <div data-aos='fade-down' className='lg:flex lg:w-3/4 mx-auto my-6'>
      <Image alt='' className='card float-right md:w-80 lg:float-left' src='/images/download.svg' width={500} height={500}/>
      <div>
        <h1 className='font-bold text-4xl py-2 text-gray-600 tracking-wider'>Navigation</h1>
        <p className='text-gray-400 leading-6 tracking-wide'>We offer easy access to thrilling adventures, providing a seamless and hassle-free experience for all adventure enthusiasts. With our user-friendly website and mobile app, you can effortlessly browse and book your next adrenaline-filled experience. Our flexible scheduling options ensure that you can find the perfect time to embark on unforgettable journeys. Plus, our dedicated customer support team is always available to assist you along the way. 
          Get ready to dive into thrilling experiences with DiamondXplore, where adventure awaits at your fingertips.
        </p>
      </div>
    </div>
    <div className='lg:flex lg:w-3/4 mx-auto my-6'>
      <Image alt='' className='card float-left md:w-80' src='/images/plans.svg' width={500} height={500}/>
      <div>
        <h1 className='font-bold text-4xl py-2 text-gray-600 tracking-wider'>Plans For You</h1>
        <p data-aos='fade-down' className='text-gray-400 leading-6 tracking-wide'>
        At DiamondXplore, we take pride in crafting personalized plans for our users. 
        Our mission is to design tailor-made experiences that cater to your unique preferences and interests. Whether you&apos;re seeking thrilling adventures, cultural immersion, or serene getaways, our expert team will curate the perfect itinerary just for you. We understand that every traveler is different, and we strive to create unforgettable journeys that exceed your expectations.
         Sit back, relax, and let us plan your next unforgettable adventure.
        </p>
      </div>
    </div>
    </div>
    </>
  )
}
