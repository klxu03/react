import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
	return { title: "New Remix App" };
};

export default function App() {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

type DocumentType = {
	children: any;
	title: string;
};

const Document = ({ children, title }: DocumentType) => {
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
				<Scripts />
				<ScrollRestoration />
			</body>
		</html>
	);
};