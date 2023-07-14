import Image from 'next/image'
import {useState, useEffect} from 'react'


export const Pictures = ({loading}) => {
    const [images, setImages] = useState([])
    const [original, setOriginal] = useState([])
    const [activeState, setActiveState] = useState(false)
    const [id, setId] = useState(1)
    const fetchPictures = async (userSearch) => {
        const getItem = localStorage.getItem(userSearch)
        if(getItem){
          setImages(JSON.parse(getItem))
        } else {
          const url = `https://api.pexels.com/v1/search?query=${userSearch}&per_page=25`
          const response = await fetch(url,  {
            headers: {
              Authorization: process.env.NEXT_PUBLIC_API_URL,
              Origin: '*',
            }
          });
          const data = await response.json();
          setImages(data.photos)
          console.log(data.photos)
          localStorage.setItem(userSearch, JSON.stringify(data.photos))
        }
        
      }
      
      const fetchOriginal = async (userSearch) => {
        const getItem = localStorage.getItem(userSearch)
        if(getItem){
          setImages(JSON.parse(getItem))
        } else {
          const url = `https://api.pexels.com/v1/search?query=${userSearch}&per_page=25`
          const response = await fetch(url,  {
            headers: {
              Authorization: process.env.NEXT_PUBLIC_API_URL,
              Origin: '*',
            }
          });
          const data = await response.json();
          setOriginal(data.photos)
          console.log(data.photos)
          localStorage.setItem(userSearch, JSON.stringify(data.photos))
        }
        
      }
      
      
  return (
    <>
    <div className='relative p-4 flex justify-center items-center space-x-5 '>
        <button onClick={() => {
            fetchPictures('thailand')
            setActiveState(!activeState)
            setId(1)
            }} className={id == 1 ? 'border-green-500 rounded border-2 px-4 py-1 text-white' : 'border-2 px-4 py-1 rounded hover:border-green-500 bg-white'}>Thailand</button>
        <button onClick={() => {
            fetchPictures('indonesia')
            setActiveState(!activeState)
            setId(2)
            }} className={id == 2 ? 'border-green-500 rounded border-2 px-4 py-1 text-white' : 'border-2 px-4 py-1 rounded hover:border-green-500 bg-white'}>Indonesia</button>
        <button onClick={() => {
            fetchPictures('switzerland')
            setActiveState(!activeState)
            setId(3)
            }} className={id == 3 ? 'border-green-500 rounded border-2 px-4 py-1 text-white' : 'border-2 px-4 py-1 rounded hover:border-green-500 bg-white'}>Switzerland</button>
    </div>
    <div className='flex flex-wrap gap-4 justify-center items-center'>
        {activeState ? (original.map(img => <Image className='w-80 h-40 object-cover object-center' alt='' key={img.id} src={img?.src?.original} width={img.width} height={img.height}/>))
        : images.map(img => <Image className='w-80 h-40 object-cover object-center' alt='' key={img.id} src={img?.src?.original} width={img.width} height={img.height}/>)
        }
    </div>

    </>
  )
}
