import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';
import type { MetaFunction } from 'remix';

import globalStylesUrl from '~/styles/global.css';

export const meta: MetaFunction = () => {
  return { title: 'Dialect CaddyShack Subsidiary' };
};

export const links = () => [
  {
    rel: 'stylesheet',
    href: globalStylesUrl,
  },
];

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

type DocumentType = {
  children: any;
  //   title: string;
};

const Document = ({ children }: DocumentType) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {/* <title>{title ? title : 'My Custom Default Title'}</title> */}
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
};

const Layout = ({ children }: any) => {
  return <>{children}</>;
};
