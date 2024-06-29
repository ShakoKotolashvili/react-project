import { NavLink, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Messages from "./components/Messages";

export default function App() {
	return (
		<>
			<h1 className="text-4xl text-red-800 font-bold text-center">ღვინოები</h1>
			<nav className="bg-pink-200 p-1 mt-2">
				<ul className="flex justify-center gap-4 text-2xl font-semibold uppercase">
					<li>
						<NavLink to={'/dashboard'}>TOP ადგილები</NavLink>
					</li>
					<li>
						<NavLink to={'/wines'} end>ღვინოების ჩამონათვალი</NavLink>
					</li>
				</ul>
			</nav>

			<div className="mt-5 container mx-auto flex justify-between gap-6">
				<div className="flex-1">
					<Outlet />
				</div>
				<div className="flex-1">
					<Messages />
				</div>
			</div>

			<Footer />
		</>
	)
}