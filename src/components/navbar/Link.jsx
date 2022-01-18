import React from 'react'
import { Menu } from '@headlessui/react'

export default function Link(props) {
	const cls = props.isActive ? "text-gray-800 bg-blue-500 font-semibold hover:bg-blue hover:text-gray" : "text-blue-500 hover:bg-blue"
	return (
		<Menu.Item >
			<button 
				onClick={() => props.handleClick(props.name)} 
				className={"w-full rounded-lg my-2 block text-sm px-2 py-4 " + cls +" transition duration-300"}
			>
				{props.name}
			</button>
		</Menu.Item>
	)
}
