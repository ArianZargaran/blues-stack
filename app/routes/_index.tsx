import { json, LoaderFunctionArgs } from "@remix-run/node";
import React from "react";

interface HelloProps {
  greetings?: string;
}

export const loader = async (args: LoaderFunctionArgs) => {
  console.log(args);
  return json({ foo: "foo" });
};

const Hello: React.FC<HelloProps> = ({ greetings = "Hello!" }) => {
  return <div>{greetings}</div>;
};

export default Hello;
