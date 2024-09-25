import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <h1 className="flex flex-col h-screen bg-black text-red-800 font-bold text-5xl justify-center items-center">
        This is My About Page</h1>
    </div>
  )
}

export default page
