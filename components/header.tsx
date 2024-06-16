import React from 'react'
import TopBar from './top_bar'
import Image from 'next/image'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='flex flex-col h-[102px] w-full'> 
    <TopBar/>
    {/* LOGOS */}
    <div className="flex w-full flex-grow items-center justify-between px-6">
      <div className="flex">
      <Image width= {106.67} height={20} src={'/assets/logos/clarifion_logo.png'} objectFit='cover' alt='logo'/>

      </div>
      <div className="flex items-center justify-evenly gap-2">
      <Image  width= {44} height={16} src={'/assets/logos/mcafee_logo.png'} objectFit='cover' alt='logo'/>
      <Image  width= {44} height={16} src={'/assets/logos/norton_logo.png'} objectFit='cover' alt='logo'/>

      </div>
    </div>
    </header>
  )
}

export default Header