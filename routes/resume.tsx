/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "$fresh/runtime.ts";
import Nav from "../components/Nav.tsx";
import Meta from "../components/Meta.tsx";
import { Handlers } from "$fresh/server.ts";

export default function Resume() {
  return (
    <>
      <Meta />
      <Nav active="Resume" />
      <h1>Resume</h1>
      <hr />
      <p>Here is my resume. This one is a bit out of data</p>
      <p>TODO: Add the resume in plain text on this page.</p>
      <a href="/documents/resume.pdf">[pdf download]</a>
      <br />
      <a href="/documents/resume.tex">[tex download]</a>
    </>
  );
}

export const handler: Handlers<null> = {
  // deno-lint-ignore require-await
  async GET(req, context) {
    console.log(
      `GET: ${(context.remoteAddr as Deno.NetAddr).hostname} connected to ${req.url}`,
    );
    return context.render(null);
  },
};
