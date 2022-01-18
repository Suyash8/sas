import React from 'react'

export default function LinkFooter(props) {
    return (
        <button 
            onClick={() => props.handleClick(props.name)}
        >
            {props.name}&nbsp; 
            {props.name !== "Contact" && '/'} 
            &nbsp;
        </button>
    )
}