import React from 'react'

export default function Products(props) {
    return (
        <div className={`${props.pages.name === "Products" ? "" : "hidden"}`}>
            This is the Products page
        </div>
    )
}