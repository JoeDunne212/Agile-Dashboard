import React from "react";

const Button = (props) => {
  
    return (
       <button className="bg-neutral-800  text-white font-bold py-2 px-4 border-b-4 m-3 border-[#00df9a] hover:border-blue-500 rounded w-32" onClick={props.onClick}>{props.name}</button>
    )
}

export default Button;