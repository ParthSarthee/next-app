function Greeting({ name }) {
	return (
		<div className="p-2 m-2 border-2 border-indigo-500">
			<Hello name={name} />
			<Bye name={name} />
		</div>
	);
}

function Hello({ name }) {
	return <h1>Hello, {name}</h1>;
}

function Bye({ name }) {
	return <h1>Bye, {name}</h1>;
}

export default Greeting;
export { Hello, Bye };
