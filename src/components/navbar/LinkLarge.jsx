import React from 'react'

export default function LinkLarge(props) {
    const clas = props.isActive ? "text-blue-500 border-b-4 border-blue-500" : "text-gray-500 hover:text-blue-500 transition duration-300"
    return (
        <button 
            onClick={() => props.handleClick(props.name)} 
            className={"py-4 px-2 font-semibold " + clas}
        >
            {props.name}
        </button>
    )
}


