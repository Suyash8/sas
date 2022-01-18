import React, {useState} from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Err404 from './components/error/404'
import Test from "./components/Test"


function App() {
        const [pages, setPages] = useState([
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
    ]);

    function setHome(home) {
        setPages(prevState => {
            let page = []
            for (let i = 0; i < prevState.length; i++) {
                page.push({
                    ...prevState[i],
                    isActive: prevState[i].name === home ? true : false
                })
            }
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