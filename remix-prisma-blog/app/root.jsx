import { Outlet, LiveReload, Link, Links, Meta, useLoaderData } from 'remix';
import globalStylesUrl from '~/styles/global.css';

import { getUser } from '~/utils/session.server';

export const links = () => [
  {
    rel: 'stylesheet',
    href: globalStylesUrl,
  },
];

export const meta = () => {
  const description = 'A cool blog built with Remix Prisma';
  const keywords = 'remix, react, prisma, blog, javascript';
  return { description, keywords };
};

export const loader = async ({ request }) => {
  const user = await getUser(request);
  const data = {
    user,
  };

  return data;
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
        <title>{title ? title : 'My Custom Default Title'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};

const Layout = ({ children }) => {
  const data = useLoaderData();

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
          {data.user ? (
            <li>
              <form action="/auth/logout" method="POST">
                <button className="btn" type="submit">
                  Logout {data.user.username}
                </button>
              </form>
            </li>
          ) : (
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
};

export const ErrorBoundary = ({ error }) => {
  console.log(error);
  return (
    <Document>
      <Layout>
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      </Layout>
    </Document>
  );
};
