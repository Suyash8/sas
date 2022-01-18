import React, {useState} from 'react'

import LinkSmall from './LinkSmall'


export default function Hamburger({pages, setHome}) {
    const [navOpen, setNavOpen] = useState(false)

    function navOpenDo() {
        setNavOpen(prevState => !prevState)
    }
    return (
        <div className="w-full flex justify-end items-center md:hidden">
            <div onClick={navOpenDo} className="hamburger">
                <button className="outline-none mobile-menu-button">
                    <div className="svg"></div>
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
                </button>
            </div>
            <div className={`${navOpen ? "" : "hidden"}  absolute top-20 bg-gray-700 p-6 shadow-2xl rounded-lg mobile-menu`}>
                <ul>
                    {pages.map(page => <LinkSmall key={page.name} name={page.name} isActive={page.isActive} handleClick={setHome} closeMenu={navOpenDo} />)}
                </ul>
            </div>
        </div>
    )
}