'use client'

import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

export default function Home() {
  const route = useRouter ()
  return (
    <>
    <Navbar/>
    <div className="flex flex-col h-screen bg-black text-red-800 font-bold text-5xl justify-center items-center">
      <h1>Welcome to My Digital Home</h1>
    <button className="flex justify-center items-center m-5 p-5 text-xl bg-red-400 rounded-xl" onClick={()=>route.push('/about')}> Go to about page</button>
    <button className="flex justify-center items-center m-5 p-5 text-xl bg-red-400 rounded-xl" onClick={()=>route.push('/contact')}> Go to contact page</button>
    </div>

    </>

  );
}
