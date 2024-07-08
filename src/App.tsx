import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
	let items = [
		"GTA V",
		"The Witcher 3",
		"Cyberpunk 2077",
		"Red Dead Redemption 2",
		"Minecraft",
	];

	const handleSelectedItem = (item: string) => {
		console.log(item);
	};

	return (
		<div>
			<Alert>Hello</Alert>
			<ListGroup
				items={items}
				heading="Games"
				onSelectedItem={handleSelectedItem}
			/>
			<Button />
		</div>
	);
}

export default App; //default export
