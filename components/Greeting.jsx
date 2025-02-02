function Greeting({ name }) {
	return (
		<>
			<Hello name={name} />
			<Bye name={name} />
		</>
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
