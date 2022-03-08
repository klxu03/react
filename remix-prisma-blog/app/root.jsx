import { Outlet, LiveReload, Link, Links, Meta } from "remix";
import globalStylesUrl from "~/styles/global.css";

export const links = () => [
	{
		rel: "stylesheet",
		href: globalStylesUrl,
	},
];

export const meta = () => {
	const description = "A cool blog built with Remix Prisma";
	const keywords = "remix, react, prisma, blog, javascript";
	return { description, keywords };
};

export default function App() {
	return (
		<Document title="Remix Prisma Blog">
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	);
}

const Document = ({ children, title }) => {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				<title>{title ? title : "My Custom Default Title"}</title>
			</head>
			<body>
				{children}
				{process.env.NODE_ENV === "development" && <LiveReload />}
			</body>
		</html>
	);
};

const Layout = ({ children }) => {
	return (
		<>
			<nav className="navbar">
				<Link to="/" className="logo">
					Remix Prisma
				</Link>

				<ul className="nav">
					<li>
						<Link to="/posts">Posts</Link>
					</li>
				</ul>
			</nav>

			<div className="container">{children}</div>
		</>
	);
};
