import { Outlet } from "remix";
import { Sidebar } from "~/components/Sidebar";
import { ActionFunction } from "remix";

export let action: ActionFunction = async ({ request }) => {
	let form = await request.formData();
	let players = form.get("players");
	if (typeof players !== "string") {
		throw new Error("players is not a string");
	}

	const playersArr = players.split(",");
	console.log(playersArr);
	return Promise.resolve(true);
};

function Dashboard() {
	return (
		<>
			<Sidebar />
			<div className="body-container">
				<Outlet />
			</div>
		</>
	);
}

export default Dashboard;
