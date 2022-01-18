import React from 'react'
import { Menu } from '@headlessui/react'

export default function LinkSmall(props) {
    const cls = props.isActive ? "text-gray-800 bg-blue-500 font-semibold hover:bg-blue hover:text-gray" : "text-blue-500 hover:bg-blue"
    function clicked() {
        props.handleClick(props.name)
        props.closeMenu()
    }

    return (
        <li>
            <button 
                onClick={() => clicked()} 
                className={"w-full rounded-lg my-2 block text-sm px-2 py-4 " + cls + " transition duration-300"}
            >
                {props.name}
            </button>
        </li>
    )
}


function Link(props) {
	return (
		<Menu.Item >

		</Menu.Item>
	)
}