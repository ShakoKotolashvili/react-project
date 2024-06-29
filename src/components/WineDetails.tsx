import { useEffect, useRef, useState } from "react";
import { Wine } from "../types/wine";
import { useParams } from "react-router-dom";
import { useMessages } from "../context/MessageContext";
import WineForm from "./WineForm";

const apiUrl = import.meta.env.VITE_API_URL;

export default function WineDetails() {
	const [wine, setWine] = useState<Wine | null>(null);
	const params = useParams();
	const fetched = useRef(false);
	const { addMessage } = useMessages();

	useEffect(() => {
		if (!fetched.current) {
			fetch(`${apiUrl}/wines/${params.id}`).then(res => {
				return res.json();
			}).then(data => {
				setWine(data);
				addMessage(`ღვინო ${data.name}`);
			})
			fetched.current = true;
		}
	}, [params.id, addMessage])

	if (!wine) return null;

	return (
		<>
			<h2 className="text-2xl">დეტალები</h2>
			<div>
				<span className="font-bold">პოზიცია:</span> {wine.id}
			</div>
			<div className="space-x-2">
				<span className="font-bold">ღვინის სახელი:</span>
				<span className="uppercase">{wine.name}</span>
			</div>
			<div className="flex flex-col gap-2 mt-3 border-t">
				<WineForm wine={wine} setWine={setWine} />
			</div>
		</>
	)
}
