import React from 'react'
import Image from 'next/image'
import { Star  } from 'lucide-react'


type Props = {
    rating: number
}

const Rating: React.FC<Props> = ({ rating }) => {
    return (
    <div className="flex items-start justify-evenly pb-2   ">
        {rating === 1 ? <><Image
      height={14}
      width={14}
      alt="filled star"
      src={"/assets/vectors/star.png"}
    /> <Star color='black'  size={14}/> <Star color='black'  size={14}/> <Star color='black'  size={14}/> <Star color='black'  size={14}/>    </> :
    rating === 2 ? <>
    <Image
    height={14}
    width={14}
    alt="filled star"
    src={"/assets/vectors/star.png"}
  />
  <Image
    height={14}
    width={14}
    alt="filled star"
    src={"/assets/vectors/star.png"}
  /> 
  <Star color='black'  size={14}/> <Star color='black'  size={14}/> <Star color='black'  size={14}/></> : rating === 3?    
<>
<Image
    height={14}
    width={14}
    alt="filled star"
    src={"/assets/vectors/star.png"}
  />
  <Image
    height={14}
    width={14}
    alt="filled star"
    src={"/assets/vectors/star.png"}
  /> 
  <Image
  height={14}
  width={14}
  alt="filled star"
  src={"/assets/vectors/star.png"}
/>   <Star color='black'  size={14}/> <Star color='black'  size={14}/> </> : rating === 4 ? <>
<Image
    height={14}
    width={14}
    alt="filled star"
    src={"/assets/vectors/star.png"}
  />
  <Image
    height={14}
    width={14}
    alt="filled star"
    src={"/assets/vectors/star.png"}
  /> <Image
  height={14}
  width={14}
  alt="filled star"
  src={"/assets/vectors/star.png"}
/>
<Image
  height={14}
  width={14}
  alt="filled star"
  src={"/assets/vectors/star.png"}
/> 
<Star color='black'  size={14}/>
</> : <>
<Image
    height={14}
    width={14}
    alt="filled star"
    src={"/assets/vectors/star.png"}
  /> <Image
  height={14}
  width={14}
  alt="filled star"
  src={"/assets/vectors/star.png"}
/>
<Image
  height={14}
  width={14}
  alt="filled star"
  src={"/assets/vectors/star.png"}
/> 
<Image
  height={14}
  width={14}
  alt="filled star"
  src={"/assets/vectors/star.png"}
/> <Image
  height={14}
  width={14}
  alt="filled star"
  src={"/assets/vectors/star.png"}
/> 
</>
 }
    
  </div>  )
}

export default Rating