/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import Nav from "../components/Nav.tsx";
import Meta from "../components/Meta.tsx";

export default function Home() {
  return (
    <>
      <Meta />
      <Nav active="Home" />
      <h1>Welcome to Aiden's Website</h1>
      <hr />
      <h3>What is this site?</h3>
      <p>
        This is a site to display the projects that I've been working on, and
        general information about myself.
      </p>
      <h3>Who am I?</h3>
      <p>
        I'm a Computer Engineering and Math student at Iowa State University. If
        you want to find more information about me, go to the about tab.
      </p>
    </>
  );
}

export const handler: Handlers<""> = {
  // deno-lint-ignore require-await
  async GET(req, context){
    console.log(req)
    console.log(context)
    return context.render("");
  }
}
