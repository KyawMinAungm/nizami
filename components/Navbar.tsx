import Image from 'next/image'
import React from 'react'
import { RxPerson as Person } from "react-icons/rx";


const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center absolute left-0 top-0 bg-gradient-to-b from-black/50 to-transparent z-10 w-full py-5 px-10'>
        <div className="">
            <Image src='/logo.svg' width={133} height={37} alt='' />
        </div>
        <div className="">
            <Person className='text-[25px] '/>
        </div>
    </nav>
  )
}

export default Navbar