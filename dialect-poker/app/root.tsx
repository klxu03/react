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
		<Document title="Dialect Poker Subsidiary">
			<Layout>
				<Outlet />
			</Layout>
		</Document>
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
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
				<title>{title ? title : "My Custom Default Title"}</title>
			</head>
			<body>
				{children}
				{process.env.NODE_ENV === "development" && <LiveReload />}
				<Scripts />
				<ScrollRestoration />
				<LiveReload />
			</body>
		</html>
	);
};

const Layout = ({ children }: any) => {
	return (
		<>
			<div>Layout</div>
			{children}
		</>
	);
};
