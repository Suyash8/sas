import React from 'react'
import PSU from './404/PSU'

export default function Err404() {
	return (
		<div className="flex flex-col w-full h-full items-center justify-center">
			<h1 className="not-found absolute">Page not found</h1>
			<a href="/" className="not-found absolute">Click this to go back home</a>
			<PSU />
			<div className="home"><a href="/" className="home">Go back to home</a></div>
		</div>
	)
}