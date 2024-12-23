import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import fontsStylesheet from "~/stylesheets/fonts.css";
import resetStylesheet from "~/stylesheets/reset.css";
import rootStylesheet from "~/stylesheets/root.css";
import themesStylesheet from "~/stylesheets/themes.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: resetStylesheet },
  { rel: "stylesheet", href: fontsStylesheet },
  { rel: "stylesheet", href: themesStylesheet },
  { rel: "stylesheet", href: rootStylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="body">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
