"use client";
import { useState } from "react";

function ConditionalGreeting() {
	const [show, setShow] = useState(true);

	return (
		<>
			{show == true ? <h1>Hello, World!</h1> : <h1>Bye, World!</h1>}
			<button
				onClick={() => setShow(!show)}
				className="p-2 m-2 bg-indigo-500 text-white rounded-md"
			></button>
		</>
	);
}

export default ConditionalGreeting;
