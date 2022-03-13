function Dashboard() {
	return (
		<>
			<div className="page-header">
				<h1>Home</h1>
				<button>Add Round</button>
			</div>
			<div>
				<table>
					<tr>
						<th>Date</th>
						<th>Owner</th>
						<th># Players</th>
						<th># Caddies</th>
					</tr>
					<tr>
						<td>Peter</td>
						<td>Griffin</td>
					</tr>
					<tr>
						<td>Lois</td>
						<td>Griffin</td>
					</tr>
				</table>
			</div>
		</>
	);
}

export default Dashboard;
