import { useState, useEffect } from "react";

function Counter() {
	// useEffect and useState
	// Hooks are ALWAYS functions
	// Hooks ALWAYS start with "use"
	// Hooks can NEVER be used inside another function

	//State = > A variable which is reactive
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);

	// Lifecycle of Components
	// Loading => Mounts => Updates => Unmounts
	useEffect(() => console.log("Just the counter changed!"), [counter]);
	useEffect(() => console.log("Just the counter2 changed!"), [counter2]);

	function incrementCounter() {
		setCounter(counter + 1);
	}

	function incrementCounter2() {
		setCounter2(counter2 + 1);
	}

	return (
		<>
			<h1>Counter: {counter}</h1>
			<button className=" px-2 py-1 bg-indigo-400" onClick={incrementCounter}>
				Increment
			</button>

			<h1>Counter2: {counter2}</h1>
			<button className=" px-2 py-1 bg-indigo-400" onClick={incrementCounter2}>
				Increment 2
			</button>
		</>
	);
}

export default Counter;
