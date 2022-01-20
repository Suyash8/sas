import React, { useState, useEffect } from 'react'
import { addDoc, collection } from "firebase/firestore"; 
import Form from './contact/Form'
import Whereabouts from './contact/Whereabouts'

import db from '../../firebase'

export default function Contact(props) {


	return (
		<div className="w-full flex flex-col justify-end">
			<Heading />
			<Lg props={props} />
		</div>
		
	)
}
function Heading() {
	return (
		<div className="flex flex-col gap-3 items-center py-3 text-white mx-2">
		
		<h2 className="mx-4 my-6 h-full flex flex-row text-xlg items-center justify-center font-bold text-gray-900 max-w-min">
			<div>C</div>
			<div>O</div>
			<div>N</div>
			<div>T</div>
			<div>A</div>
			<div>C</div>
			<div>T</div>
		</h2>
		<div className="text-6xl font-medium text-center">
			Reach out for support or just say hello
		</div>
		</div>
	)
}


function Lg(props) {
	return (
		<div className="mx-auto">
	{
		// <Heading />
		}
		  <div className=" px-6 md:pt-1 lg:pt-10 lg:pb-8 md:pb-1 bg-gray-800 shadow-xl ring-1 mt-6 w ring-gray-900 mr-auto rounded-3xl sm:px-10">
    <div className="w-max mx-auto">
      <div className="lg:divide-x lg:divide-y-0 md:divide-x-0 sm:divide-x-0 md:divide-y sm:divide-y lg:grid lg:grid-cols-2 md:flex md:flex-col contact-page gap-4 w-full divide-gray-300">

		<Form props={props} />
		<Whereabouts />
		</div>
		</div>
		</div>
		</div>
	
	)
}