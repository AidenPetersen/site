/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, PageProps } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import Meta from "../../components/Meta.tsx";
import Nav from "../../components/Nav.tsx";
import { micromark } from "https://esm.sh/micromark@3";

interface Data {
  content: string | null;
}

const Project = (props: PageProps<Data>) => {
  return (
    <>
      <Meta />
      <Nav active="Portfolio" />
      <Contents page={props.data} />
    </>
  );
};

const Contents = (props: { page: Data }) => {
  if (props.page.content === null) {
    return <h1>404</h1>;
  }
  return (
    <body>
      <div
        id="markdown"
        dangerouslySetInnerHTML={{ __html: props.page.content }}
      >
      </div>
    </body>
  );
};

export const handler: Handlers<Data> = {
  async GET(req, context) {
    console.log(
      `GET: ${(context.remoteAddr as Deno.NetAddr).hostname} connected to ${req.url}`,
    );

    try {
      const markdown = await Deno.readTextFile(
        `${Deno.cwd()}/static/projects/${context.params.project}.md`,
      );
      const htm = micromark(markdown);
      const resp = context.render({ content: htm });
      return resp;
    } catch (e) {
      return context.render({ content: null });
    }
  },
};

export default Project;
