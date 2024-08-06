import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";



console.log(blogData);

function App() {
  return (
		<div className='App'>
			<Header />
			<aside>
				<About />
			</aside>
			<main>
		
			</main>
		</div>
  );
}

export default App;
