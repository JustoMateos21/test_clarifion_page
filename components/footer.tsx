import { LockIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between w-full items-center  p-4 gap-6 bg bg-[#252F3D]">
    <div className="grid align-middle justify-center grid-cols-3 md:flex md:p-2">
      <p className="flex border-r md:pr-2 ">Copyright (c) 2023</p>
      <p className="flex pl-4">Clarifionsupport@clarifion.com</p>

    </div>
    <div className="flex gap-4">
      <LockIcon/>
      <p>          Secure 256-bit SSL encryption.
      </p>
    </div>
</footer>
  )
}


export default Footer