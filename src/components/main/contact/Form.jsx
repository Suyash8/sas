import React, { useState, useEffect } from 'react'
import { addDoc, collection } from "firebase/firestore"; 
import Dialog from './Dialog'

import db from '../../../firebase'

export default function Form({props}) {

	let [isOpen, setIsOpen] = useState(false)
	let [isError, setIsError] = useState(false)

	let data = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : {
		name: '',
		email: '',
		subject: '',
		message: ''
	}
	const [userData, setUserData] = useState(data)

	
	const updateForm = (e) => {
		let name = e.target.name
		let value = e.target.value
		setUserData(prevData => {
			let data = {
				...prevData, 
				[name]: value
			}
			localStorage.setItem("userData", JSON.stringify(data))
			return data 
		});
		
	}

	async function handleSubmit(e) {
		e.preventDefault();
		try {
  		const docRef = await addDoc(collection(db, "contacts"), {userData});

			console.log("Document written with ID: ", docRef.id);
			setIsError(false)
			setUserData({name: '',
				email: '',
				subject: '',
				message: ''})
				localStorage.removeItem("userData")
		} catch (e) {
			console.error("Error adding document: ", e);
			setIsError(true)
		}
		setIsOpen(true)

	}


	return (
		
<div className="py-8 text-base min-w-2xl leading-7 space-y-6 text-gray-600">
          <h3 className="uppercase font-medium text-sm tracking-widest text-white">Send us a message</h3>
         <form 
				className="flex flex-col gap-2 w-full"
				onSubmit={handleSubmit}
			>
			
			<div>
				<label className="block font-medium text-gray-100" htmlFor="name">Name</label>
				<input
					id="name"
					name="name"
					type="text"
					className="px-3 py-2 rounded-lg w-full text-gray-100 border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
					placeholder="John Doe"
					value = { userData.name }
					onChange={ updateForm }
					required
				/>
				</div>
				<div>
				<label className="block font-medium text-gray-100" htmlFor="email">Email</label>
				<input
					id="email"
					name="email"
					type="email"
					className="px-3 py-2 rounded-lg w-full text-gray-100 border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
					placeholder="john@doe.com"
					value = { userData.email }
					onChange={ updateForm }
					required
				/>
				</div>
        <div>
				<label className="block font-medium text-gray-100" htmlFor="subject">Subject</label>
				<input
					id="subject"
					name="subject"
					type="text"
					className="px-3 py-2 rounded-lg w-full text-gray-100 border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
					placeholder="just a hi"
					value = { userData.subject }
					onChange={ updateForm }
				/>
				</div>
				<div className="">
				<label className="block font-medium text-gray-100" htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"					
          className="px-3 py-2 rounded-lg w-full text-gray-100 min-h-25 border-gray-300 shadow-sm  bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
					placeholder="hi"
					value = { userData.message }
					onChange={ updateForm }
					required
				></textarea>
				</div>
				<input 
					type="submit" 
					className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-gray-100  bg-green-600 hover:bg-gray-500 focus:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
				/>


			</form>
			<Dialog closeModal={() => setIsOpen(false)} isOpen={isOpen} isError={isError} />
        </div>



	)
}





// <div className={`${props.pages.name === "Contact" ? "" : "hidden"} w-full flex flex-col items-center`}>
// 			<h1 className="my-5 text-4xl text-gray-200 font-bold">Contact</h1>
// 			<div className="flex flex-col font-medium gap-2 items-center bg-gray-900 rounded-lg p-8 con-form justify-center shadow-lg lg:w-1/2">
// 			<div className="text-gray-500">Fill up the form below to send us a message.</div>
// 			<form 
// 				className="flex flex-col gap-2 w-full"
// 				onSubmit={handleSubmit}
// 			>
			
// 			<div>
// 				<label className="block font-medium text-gray-100" htmlFor="name">Name</label>
// 				<input
// 					id="name"
// 					name="name"
// 					type="name"
// 					className="px-3 py-2 rounded-lg w-full border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
// 					placeholder="John Doe"
					// value = { userData.name }
					// onChange={ updateForm }
// 					required
// 				/>
// 				</div>
// 				<div>
// 				<label htmlFor="email">Email</label>
// 				<input
// 					id="email"
// 					name="email"
// 					type="email"
// 					className="px-3 py-2 rounded-lg w-full border-gray-300 shadow-sm bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
// 					placeholder="john@doe.com"
// 					value = { userData.email }
// 					onChange={ updateForm }
// 					required
// 				/>
// 				</div>
// 				<div className="">
// 				<label htmlFor="message">Message</label>
// 				<textarea
// 					id="message"
// 					name="message"					className="px-3 py-2 rounded-lg w-full border-gray-300 shadow-sm  bg-gray-700 focus:border-gray-500 focus:ring-gray-500 mb-1"
// 					placeholder="John Doe's message"
// 					value = { userData.message }
// 					onChange={ updateForm }
// 					required
// 				/>
// 				</div>
// 				<input 
// 					type="submit" 
// 					className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm font-medium text-gray-100  bg-green-600 hover:bg-gray-500 focus:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
// 				/>


// 			</form>
// 			<Dialog closeModal={() => setIsOpen(false)} isOpen={isOpen} />
// 			</div>
// 		</div>