import Greeting from "./Greeting";

// Looping using map

function NameList({ names }) {
	if (!names) names = ["Parth", "Raj", "Rahul"];

	return (
		<>
			{names.map((n, i) => (
				<Greeting key={i} name={n} />
			))}
		</>
	);
}

export default NameList;
