import React, {useState} from 'react'

import LinkSmall from './LinkSmall'


export default function Hamburger({pages, setHome}) {
	const [navOpen, setNavOpen] = useState(false)
	const [htmlStyle, setHtmlStyle] = useState('')
	let htmlstyle
	function navOpenDo() {
		setNavOpen(prevState => !prevState)
		if (navOpen) {
			setHtmlStyle("overflow-hidden")
		} else {
			setHtmlStyle('')
		}
		document.querySelector('html').className = htmlStyle

	}
	return (
		<div className="w-full absolute top-0 w-screen h-screen flex justify-end items-center md:hidden">
			<div className={`${navOpen ? "" : "hidden"}  absolute top-20 bg-gray-700 p-6 shadow-2xl rounded-lg mobile-menu`}>
				<ul>
					{pages.map(page => <LinkSmall key={page.name} name={page.name} isActive={page.isActive} handleClick={setHome} closeMenu={navOpenDo} />)}
				</ul>
			</div>
		</div>
	)
}