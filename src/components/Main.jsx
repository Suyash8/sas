import React from 'react'
import Home from './main/Home'
import Products from './main/Products'
import Recognition from './main/Recognition'
import Contact from './main/Contact'
import About from './main/About'

export default function Main({pages, setHome}) {
    let page = {}
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].isActive) {
            page = pages[i]
        }
    }

    let content = 'Home'
    if (page.name === 'Home') {
        content = <Home pages={page} />
    } else if (page.name === 'About') {
        content = <About pages={page} />
    } else if (page.name === 'Products') {
        content = <Products pages={page} />
    } else if (page.name === 'Recognition') {
        content = <Recognition pages={page} />
    } else if (page.name === 'Contact') {
        content = <Contact pages={page} />
    } 
    return (
        <main className="mb-full">
            {content}
        </main>
    )
}