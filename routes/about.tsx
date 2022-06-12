/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "$fresh/runtime.ts";
import Nav from "../components/Nav.tsx";
import Meta from "../components/Meta.tsx";
import { Handlers } from "$fresh/server.ts";

export default function About() {
  return (
    <>
      <Meta />
      <Nav active="About" />
      <h1>About Me</h1>
      <hr />
      <h3>Education</h3>
      <p>
        Currently I'm a Junior at Iowa State University in Computer Engineering
        and Math. I'm planning on pursuing a MS in Computer Engineering at Iowa
        State.
      </p>
      <p>
        At ISU I am also a very avid swimmer. I am president of the Swim Club
        and qualified for collegiate club nationals in 2022.
      </p>
      <h3>Interests</h3>
      <p>
        My primary interest withing the realm of computer engineering is
        computer architecture. I find developing systems to optimize processor
        speed very interesting.
      </p>
      <p>
        I also enjoy functionaly programming. I find the alternative design
        patterns very enjoyable to use and much easier to follow.
      </p>
      <h3>Socials</h3>
      <p>Here are the places can contact me at:</p>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/aiden-l-petersen/"
            target="__blank"
          >
            [linkedin]
          </a>
        </li>
        <li>
          <a href="https://github.com/AidenPetersen" target="__blank">
            [github]
          </a>
        </li>
        <li>
          <a href="mailto:aidenpetersen@protonmail.com">[mail]</a>
        </li>
      </ul>
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
