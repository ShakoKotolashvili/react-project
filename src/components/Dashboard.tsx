import { useEffect, useRef, useState } from "react";
import { Wine } from "../types/wine";
import { Link } from "react-router-dom";
import { useMessages } from "../context/MessageContext";

const apiURL = import.meta.env.VITE_API_URL;

export default function Dashboard() {
	const [wines, setWines] = useState<Wine[]>([]);
	const { addMessage } = useMessages();
	const fetched = useRef(false);

	useEffect(() => {
		if (!fetched.current) {
			fetch(`${apiURL}/wines?_limit=3`).then(res => {
				return res.json();
			}).then(data => {
				setWines(data);
				addMessage("TOP ღვინოები.");
			})
			fetched.current = true;
		}
	}, [addMessage])

	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-2xl">TOP ღვინოები</h2>
			<div className="flex gap-3">
				{wines.map(wine => (
					<Link key={wine.id} to={`/wines/${wine.id}`} className="p-4 cursor-pointer bg-purple-950 text-white rounded-lg">
						{wine.name}
					</Link>
				))}
			</div>
		</div>
	)
}
