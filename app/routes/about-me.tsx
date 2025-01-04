import { cssBundleHref } from "@remix-run/css-bundle";
import { LinksFunction } from "@remix-run/node";

import commonThemePage from "~/stylesheets/common-page-themes.css";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: commonThemePage },
];

const AboutMePage = () => {
  return <section className="page french"></section>;
};

export default AboutMePage;
