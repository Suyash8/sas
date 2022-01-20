import React, {useState} from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Err404 from './components/error/404'
import Test from "./components/Test"


function App() {

	let page = localStorage.getItem("pages") ? JSON.parse(localStorage.getItem("pages")) : [
		{
			name: 'Home',
			isActive: true
		},
		{
			name: 'About',
			isActive: false
		},
		{
			name: 'Products',
			isActive: false
		},
		{
			name: 'Recognition',
			isActive: false
		},
		{
			name: 'Contact',
			isActive: false
		}
	]
	

	const [pages, setPages] = useState(page);
	function setHome(home) {
		setPages(prevState => {
			let page = []
			for (let i = 0; i < prevState.length; i++) {
				page.push({
					...prevState[i],
					isActive: prevState[i].name === home ? true : false
				})
			}

		localStorage.setItem('pages', JSON.stringify(page))
			return page
		});

	}

   
    return (
        <div className="app w-full h-full">
            <Navbar pages={pages} setHome={setHome} />
            <Main pages={pages} setHome={setHome} />
            <Footer pages={pages} setHome={setHome} />
        </div>
    );
}

function App1() {
	return (
		<Test />
	)
}

export default App;