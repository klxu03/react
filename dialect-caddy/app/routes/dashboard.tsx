import { Outlet } from "remix";
import { Sidebar } from "~/components/Sidebar";

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
