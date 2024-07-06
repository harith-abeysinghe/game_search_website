import { useState } from "react";

function ListGroup() {
	let items = [
		"GTA V",
		"The Witcher 3",
		"Cyberpunk 2077",
		"Red Dead Redemption 2",
		"Minecraft",
	];

	let selectedIndex = 0;
	//Hook -
	const arr = useState(-1);
	selectedIndex = arr[0];
	const setSelectedIndex = arr[1];

	return (
		<>
			<h1>List Group</h1>

			{items.length === 0 && "No items found"}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => setSelectedIndex(index)}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}
export default ListGroup; //default export
