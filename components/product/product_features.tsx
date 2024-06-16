import React from 'react'
import Image from 'next/image'
type Props = {}

const ProductFeatures = (props: Props) => {
  return (
   
          <section className="flex flex-col items-start   gap-2 py-4
           justify-center">
             <div className="flex items-center gap-1">          <Image src={'/assets/tick-circle.png'} height={14} width={14}    alt="tick"/>
             <p className="text-black">        Negative Ion Technology <b>may help with allergens</b>        </p>
            </div>
            <div className="flex items-center gap-1">
               <Image src={'/assets/tick-circle.png'} height={14} width={14}   alt="tick" />
              <p className="text-black">Designed for <b>air rejuvenation</b></p>
            </div>
            <div className="flex items-center gap-1">
              <Image src={'/assets/tick-circle.png'} height={14} width={14}   alt="tick" />
              <p className="text-black">
              <b>Perfect for every room</b> in all types of places.
            </p>
            </div>
           </section>
        
  )
}

export default ProductFeatures