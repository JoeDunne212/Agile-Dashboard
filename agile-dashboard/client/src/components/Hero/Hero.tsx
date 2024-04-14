import React from "react";
import { ReactTyped } from "react-typed"
import HeroButtons from "./HeroButtons";
const Hero = () => {
    return (<div className='bg- bg-max-w-4xl mt-24 w-full h-80 text-center flex flex-col '>
        <h1 className="text-7xl font-bold py-6">Agile Data Analytics: Project X</h1>
        <p className="text-4xl font-bold ">Providing <ReactTyped className='text-[#00df9a]' strings={['fast', 'responsive', 'understandble']} typeSpeed={100} backSpeed={100} loop></ReactTyped>metrics</p>
        
        <HeroButtons/>
    </div>)
}

export default Hero;