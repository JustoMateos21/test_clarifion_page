'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { ChevronRight , ChevronLeft} from 'lucide-react';

 
type Props = {}

const characteristics= [
    {
        text: '30-DAY SATISFACTION GUARANTEE',
        imageSrc: '/assets/vectors/verified_vector.png'
    },
    {
        text: 'Free delivery on orders over $40.00',
        imageSrc: '/assets/vectors/track_vector.png'
    },
    {
        text: '50.000+ HAPPY CUSTOMERS',
        imageSrc: '/assets/vectors/heart_vector.png'
    },
    {
        text: '100% Money Back Guarantee',
        imageSrc: '/assets/vectors/renew_vector.png'
    }
]




const TopBar = (props: Props) => {

 const [currentIndex, setCurrentIndex] = useState(0)

 const showPrevBenefit = () =>{
    if(currentIndex != 0){
         setCurrentIndex((prevIndex) => prevIndex - 1)
    }else{
        setCurrentIndex(characteristics.length - 1)

    }
 }
  const showNextBenefit = () => {
    if(currentIndex != 3){
         setCurrentIndex((prevIndex) => prevIndex + 1)
    }else{
        setCurrentIndex(0)

    }
  }

  return (
    <div className= 'flex w-full items-center justify-center bg-[#252F3D] h-[50px]'>
       <div className='flex items-center w-full justify-evenly md:hidden'>
       <ChevronLeft className='flex cursor-pointer' onClick={showPrevBenefit}/>
            <div className='flex items-center justify-evenly' key={characteristics[currentIndex].text}>
                <Image className='mr-4' width={20} height={20}src={characteristics[currentIndex].imageSrc} alt='benefit'/>
                <p> {characteristics[currentIndex].text}</p>
            </div>
            <ChevronRight className='flex cursor-pointer' onClick={showNextBenefit}/>

        </div>
        
    </div>
  )
}

export default TopBar