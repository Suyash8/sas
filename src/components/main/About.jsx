import React from 'react'

export default function About(props) {
    return (
        <div className={`${props.pages.name === "About" ? "" : "hidden"}`}>
            This is the About page
        </div>
    )
}