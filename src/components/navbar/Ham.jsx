import React, {useState} from 'react'
import { Menu, Transition } from '@headlessui/react' 
import Link from './Link'


export default function Hamburger({pages, setHome}) {
    return (
			
      <Menu>
			<div className="w-full flex justify-end items-center md:hidden">
				<Menu.Button>
					<svg
						className="w-8 h-8 text-blue-500"
						x-show="!showMenu"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
					<path d="M4 6h16M4 12h14M4 18h16"></path>
					</svg>
				</Menu.Button>
				<Transition
        enter="transition duration-300 ease-out"
        leave="transition duration-150 ease-out"
      >
				<Menu.Items>
				<div className={`absolute top-20 right-5 bg-gray-700 p-6 shadow-2xl rounded-lg mobile-menu`}>
					{pages.map(page => <Link key={page.name} name={page.name} isActive={page.isActive} handleClick={setHome} />)}
				</div>
				</Menu.Items>
				</Transition>
				</div>
			</Menu>
			
    )
}

// <div className="w-full flex justify-end items-center md:hidden">
//             <div onClick={navOpenDo} className="hamburger">
//                 <button className="outline-none mobile-menu-button">
//                     <div className="svg"></div>
//                     <svg
//                         className="w-8 h-8 text-blue-500"
//                         x-show="!showMenu"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                     >
//                     <path d="M4 6h16M4 12h14M4 18h16"></path>
//                     </svg>
//                 </button>
//             </div>
//             <div className={`${navOpen ? "" : "hidden"}  absolute top-20 bg-gray-700 p-6 shadow-2xl rounded-lg mobile-menu`}>
//                 <ul>
//                     {pages.map(page => <Link key={page.name} name={page.name} isActive={page.isActive} handleClick={setHome} closeMenu={navOpenDo} />)}
//                 </ul>
//             </div>
//         </div>