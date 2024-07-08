import { useState } from "react";
import Alert from "./Alert";
interface Props {
	items: string[];
	heading: string;
	onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
	let selectedIndex = 0;
	//Hook -
	const arr = useState(-1);
	selectedIndex = arr[0];
	const setSelectedIndex = arr[1];

	return (
		<>
			<h1>{heading}</h1>

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
						onClick={() => {
							setSelectedIndex(index);
							onSelectedItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}
export default ListGroup; //default export
