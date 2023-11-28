import React from 'react'

export default function Home({ startChat }) {
	return (
		<div>
			<h1>ChatGPT Clone with React.js</h1>
			<p>Click the button to get started!</p>
			<button onClick={startChat}>Start Chatting Universitas</button>
		</div>
	)
}
