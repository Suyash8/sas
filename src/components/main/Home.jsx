import React from 'react'
import { useCookies } from "react-cookie";

export default function Home(props) {
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("user", "gowtham", {
      path: "/"
    });
  }
	return (
		<div className={`${props.pages.name === "Home" ? "" : "hidden"}`}>
			This is the Home page
			{cookies.user && <p>{cookies.user}</p>}
      <button onClick={handleCookie}>Set Cookie</button>
			<button onClick={() => removeCookie('user')}>Remove Cookie</button>
		</div>
	)
}