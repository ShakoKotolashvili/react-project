import { useState, useRef, useEffect } from "react";
import { Wine } from "../types/wine";
import { Link } from "react-router-dom";
import { useMessages } from "../context/MessageContext";

const apiURL = import.meta.env.VITE_API_URL;

export default function WinesList() {
	const [wines, setWines] = useState<Wine[]>([]);
	const fetched = useRef(false);
	const { addMessage } = useMessages();

	useEffect(() => {
		if (!fetched.current) {
			fetch(`${apiURL}/wines`).then(res => {
				return res.json();
			}).then(data => {
				setWines(data);
				addMessage("ღვინოები:");
			})
			fetched.current = true;
		}
	}, [addMessage])

	async function deleteWine(wine: Wine) {
		try {
			const response = await fetch(`${apiURL}/wines/${wine.id}`, {
				method: "DELETE"
			});

			if (!response.ok) throw new Error("Request failed" + response.statusText);

			setWines(prevWines => prevWines.filter(w => w.id !== wine.id));
			addMessage(`ღვინო ${wine.name} წაშლილია`);
		} catch (error) {
			console.log(error);
			addMessage("დაფიქსირდა შეცდომა");
		}
	}

	return (
		<>
			<div className="flex gap-3">
				<h2 className="text-2xl">ჩემი ღვინოები</h2>
				<Link to="/wines/create" className="btn">დაამატეთ ღვინო</Link>
			</div>
			<ul className="flex flex-col gap-2 my-3">
				{wines.map(wine => (
					<Link to={`/wines/${wine.id}`} key={wine.id} className="flex cursor-pointer">
						<span className="bg-red-950 text-white rounded-l p-2">
							{wine.id}
						</span>
						<div className="p-2 bg-red-100 rounded-r w-full flex justify-between">
							<span className="">
								{wine.name}
							</span>
							<span
								onClick={(e) => {
									e.preventDefault();
									deleteWine(wine);
								}}
								className="bg-red-500 px-1 cursor-pointer text-pink-200 font-bold">
								X
							</span>
						</div>
					</Link>
				))}
			</ul>
		</>
	)
}