import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' flex justify-center items-center p-10 text-red-700 font-bold text-2xl bg-black'>
        <Link className='p-4 border-2 rounded-xl' href="/">Home</Link>
        <Link className='p-4 m-2 border-2 rounded-xl'  href="/about">About</Link>
        <Link className='p-4 border-2 rounded-xl' href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar
