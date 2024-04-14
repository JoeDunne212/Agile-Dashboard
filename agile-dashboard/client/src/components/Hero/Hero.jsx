import React from "react";
import { ReactTyped } from "react-typed"
import HeroButtons from "./HeroButtons.jsx";
import Navbar from "../NavBar/navbar.js";
import Footer from "../footer.tsx"
const Hero = () => {
    return (
    
    <div className="bg-neutral-800 text-white flex flex-col h-screen">
      <Navbar></Navbar>
      <body className='flex-1 overflow-auto w-full bg-neutral-600 justify-center align-bottom'>
      <div className='bg- bg-max-w-4xl mt-24 w-full h-80 text-center flex flex-col '>
        <h1 className="text-7xl font-bold py-6">Agile Data Analytics: Project X</h1>
        <p className="text-4xl font-bold ">Providing <ReactTyped className='text-[#00df9a]' strings={['fast', 'responsive', 'understandble']} typeSpeed={100} backSpeed={100} loop></ReactTyped>metrics</p>
        
        <HeroButtons/>
    </div>
      </body>
      <Footer></Footer>
 
  </div>
)
}

export default Hero;