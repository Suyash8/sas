import React from 'react'
import { useCookies } from 'react-cookie'

export default function Contact(props) {
	let [cookie, setCookie, removeCookie] = useCookies(['contact'])
	function contact() {
		setCookie('contact', {
			user: {
				name: 'suyash',
				id: 348532435
			},
		}, {
			path: '/'
		});
	}
	return (
		<div className={`${props.pages.name === "Contact" ? "" : "hidden"} `}>
			<h1 className="text-4xl text-gray-200 font-bold">Contact</h1>
			<button onClick={contact}>setCookie</button>

			{cookie.contact && <><div>{cookie.contact.user.name + ' ' + cookie.contact.user.id}</div>
			<button onClick={() => removeCookie('contact')}>removeCookie</button></>}


		</div>
	)
}