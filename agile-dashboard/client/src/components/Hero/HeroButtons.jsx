import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";



const HeroButtons = (props) => {
    const nav = useNavigate();
    return (<div className='flex-row justify-center align-middle p-4 m-8'>
     <Button name={'Get Started'}></Button>
     <Button name={'Help'} onClick={nav('/help')}></Button>
    </div>)
}

export default HeroButtons;