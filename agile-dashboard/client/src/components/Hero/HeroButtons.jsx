import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const HeroButtons = (props) => {
    const navigate = useNavigate();
    
    const helpButtonHandler = () => {
        console.log("HIT HELP");
        navigate('/help');
    };
    
    const getStartedButtonHandler = () => {
        console.log("HIT GS");
        navigate('/teams');
    };
    
    return (<div className='flex-row justify-center align-middle p-4 m-8'>
     <Button name={'Get Started'} onClick={getStartedButtonHandler}></Button>
     <Button name={'Help'} onClick={helpButtonHandler}></Button>
    </div>)
}

export default HeroButtons;