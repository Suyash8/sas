import React, { useState, useEffect } from 'react'


export default function Whereabouts({props}) {

	return(
		<div className="py-8 leading-7 font-medium text-base px-4 text-white">
		<h3 className="uppercase font-medium text-sm mb-8 tracking-widest text-white">Contact info</h3>
		 <div className="divide-y divide-gray-300">
          

          <div className="">
				<h4 className="text-green-300 mb-4 mt-5 font-medium ">
					Where to find us
				</h4>
				<p className="mb-5">
					Beside Hotel Vinayak Building, 1st Floor <br />
					Hill Cart Road, Siliguri - 734 001<br />
					West Bengal, India
				</p>
			</div>
			<div>
				<h4 className="text-green-300 mb-4 mt-5 font-medium ">
					Email us at
				</h4>
				<p className="mb-5">
					support@computerparadisesa.com <br />
					somansharma@computerparadisesa.com <br />
					akhilsharma@computerparadisesa.com
				</p>
			</div>
			<div>
				<h4 className="text-green-300 mb-4 mt-5 font-medium ">
					Call us at
				</h4>
				<p className="mb-5">
					+91 89428 60901 <br />
					+91 97331 44909 <br />
					
				</p>
			</div>
        </div>
				</div>
	)
}