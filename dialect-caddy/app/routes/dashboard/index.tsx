import { useState } from "react";
import type { ActionFunction } from "remix";
import dashboardStyles from "~/styles/dashboard/styles.css";

export const links = () => [
	{
		rel: "stylesheet",
		href: dashboardStyles,
	},
];

const Row = ({ round }: any) => {
	const [active, setActive] = useState<Boolean>(false);

	return (
		<tr>
			<td>
				<input type="checkbox" />
			</td>
			<td>{round.date}</td>
			<td>{round.owner}</td>
			<td>{round.players}</td>
			<td>{round.caddies}</td>
			<td
				onClick={() => {
					setActive(!active);
				}}>
				{active ? (
					<div className="dropdown">
						<div className="dropdown-content">
							<button
								onClick={() => {
									setActive(false);
									console.log("active", active);
								}}>
								Close
							</button>
							<p>Delete</p>
							<p>View</p>
							<p>Edit</p>
						</div>
					</div>
				) : (
					<button>...</button>
				)}
			</td>
		</tr>
	);
};

const AddRound = () => {
	const [date, setDate] = useState<string>("");

	const [players, setPlayers] = useState<string[]>([]);
	const [player, setPlayer] = useState<string>("");

	const [caddies, setCaddies] = useState<string[]>([]);
	const [caddy, setCaddy] = useState<string>("");
	const [numCaddies, setNumCaddies] = useState<number>(0);

	return (
		<form method="post" action="/dashboard">
			<label htmlFor="date">Date</label>
			<input
				type="datetime-local"
				onChange={(e) => {
					setDate(e.target.value);
				}}
			/>

			<br />
			<br />

			<label htmlFor="player">Search Players </label>
			<input
				type="text"
				name="Add Players"
				value={player}
				onChange={(event) => {
					setPlayer(event.target.value);
				}}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					setPlayers([...players, player]);
					setPlayer("");
				}}>
				Add
			</button>

			<div style={{ display: "flex" }}>
				<h3>Currently Added Players: </h3>

				{players.map((player) => {
					return (
						<div key={player} style={{ display: "flex" }}>
							<p>({player})</p>
							<button
								onClick={(e) => {
									e.preventDefault();
									setPlayers(
										players.filter((currPlayer) => currPlayer !== player)
									);
								}}>
								X
							</button>
						</div>
					);
				})}
			</div>

			<br />
			<br />

			<label htmlFor="caddy">Search Caddies </label>
			<input
				type="text"
				name="Add Caddies"
				value={caddy}
				onChange={(event) => {
					setCaddy(event.target.value);
				}}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					if (caddies.length + 1 <= numCaddies) {
						setCaddies([...caddies, caddy]);
						setCaddy("");
					}
				}}>
				Add
			</button>

			<br />
			<div style={{ display: "flex" }}>
				<h3>How many caddies?</h3>
				<button
					onClick={(e) => {
						e.preventDefault();
						setNumCaddies(Math.max(numCaddies - 1, caddies.length));
					}}>
					-
				</button>
				<p>{numCaddies}</p>
				<button
					onClick={(e) => {
						e.preventDefault();
						setNumCaddies(numCaddies + 1);
					}}>
					+
				</button>
			</div>

			<div style={{ display: "flex" }}>
				<h3>Currently Added Caddies: </h3>

				{caddies.map((caddy) => {
					return (
						<div key={caddy} style={{ display: "flex" }}>
							<p>({caddy})</p>
							<button
								onClick={(e) => {
									e.preventDefault();
									setCaddies(
										caddies.filter((currCaddy) => currCaddy !== caddy)
									);
								}}>
								X
							</button>
						</div>
					);
				})}
			</div>

			<br />
			<br />

			<input type="hidden" name="date" value={date} />
			<input type="hidden" name="players" value={players} />
			<input type="hidden" name="caddies" value={caddies} />
			<button type="submit">Save Round</button>
		</form>
	);
};

function Dashboard() {
	const [modalActive, setModalActive] = useState<boolean>(true);

	const data = [
		{
			id: 1,
			date: "3/17 @ 12:51 PM",
			owner: "KurtisPlayer1",
			players: 2,
			caddies: 1,
		},
		{
			id: 2,
			date: "3/18 @ 12:51 PM",
			owner: "KurtisPlayer2",
			players: 5,
			caddies: 2,
		},
	];

	return (
		<>
			<div className="page-header">
				<h1>Home</h1>
				<button
					onClick={() => {
						setModalActive(!modalActive);
					}}>
					{modalActive ? "Close Round" : "Add Round"}
				</button>
			</div>

			<div>
				{modalActive ? (
					<AddRound />
				) : (
					<table>
						<tr>
							<th>
								<input type="checkbox" />
							</th>
							<th>Date</th>
							<th>Owner</th>
							<th># Players</th>
							<th># Caddies</th>
							<th>R</th>
						</tr>
						{data.map((round) => {
							return <Row key={round.id} round={round} />;
						})}
					</table>
				)}
			</div>
		</>
	);
}

export default Dashboard;
