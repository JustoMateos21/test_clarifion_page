'use client'
import React, { useEffect, useState } from 'react'
import { CircleCheck, Check } from 'lucide-react';

type Props = {}

const steps = [
  {
    text: 'Cart Review'
  },
  {
    text: 'Checkout'
  },
  {
    text: 'Special Offer'
  },
  {
    text: 'Confirmation'
  }
]

const Steps = (props: Props) => {
  const [stepActiveIndex, setStepActiveIndex] = useState(0);  

  useEffect(() => {
    setStepActiveIndex(2);
  }, []);

  return (
    <div className='grid grid-cols-4 grid-rows-1 justify-items-center  max-w-fit  items-center justify-evenly'>
      {steps.map((step, index) => (
        <div className='flex flex-col md:flex-row md:text-lg   pt-4 items-center justify-center md:font-light text-sm' key={step.text}>
          {index !== stepActiveIndex 
            ? index === steps.length - 1 
              ? <div className='flex h-5 w-5 items-center justify-center  rounded-[50%] border-[2px] border-[#2C7EF8]'><p className='text-[#2C7EF8] '> 4</p></div>
              : <Check className=' bg-green-700 rounded-full' color='white' size={20} /> 
            : <div className='flex h-5 w-5 items-center justify-center rounded-[50%] bg-[#2C7EF8]'><p className=''>{stepActiveIndex + 1}</p></div>}
          <p className='pl-1 text-black'><span className='hidden md:flex'>Step {index + 1}: </span>{step.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Steps;
