/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, PageProps } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";
import Meta from "../../components/Meta.tsx";
import Nav from "../../components/Nav.tsx";

interface Project {
  id: string;
  name: string;
  description: string;
  src: string | null;
}

const Portfolio = ({ data }: PageProps<Project[]>) => {
  return (
    <>
      <Meta />
      <Nav active="Portfolio" />
      <Content props={data} />
    </>
  );
};

const Content = ({ props }: { props: Project[] }) => {
  return (
    <>
      <h1>Projects</h1>
      <hr />
      <div>
        {props.map((
          proj: Project,
          i: number,
        ) => {
          return (
            <div
              className="project"
              style={{
                paddingBottom: "20px",
              }}
            >
              <h3>
                {proj.name}
              </h3>
              <p>{proj.description}</p>
              {<a href={`/portfolio/${proj.id}`}>[Open]</a>}
              {proj.src && <a href={proj.src} target="_blank">[Source]</a>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export const handler: Handlers<Project[]> = {
  // deno-lint-ignore require-await
  async GET(req, context) {
    console.log(
      `GET: ${(context.remoteAddr as Deno.NetAddr).hostname} connected to ${req.url}`,
    );

    const projects: Project[] = [
      {
        "id": "riscv",
        "name": "RISC V Implementation [WIP]",
        "description":
          "A RISC V simulator, assembler, and implementation. The implementation is multiscalar, has a cache, and used branch prediction.",
        "src": "https://github.com/AidenPetersen/riscv-impl",
      },
      {
        "id": "mercury",
        "name": "Mercury",
        "description": "A simple Elixir chat server over TCP.",
        "src": "https://github.com/AidenPetersen/mercury",
      },
      {
        "id": "swimscript",
        "name": "Swimscript [WIP]",
        "description": "A markdown language built specifically for swimming.",
        "src": "https://github.com/AidenPetersen/swimscript",
      },
      {
        "id": "site",
        "name": "This Site",
        "description": "A simple preact site written purely in Deno.",
        "src": "https://github.com/AidenPetersen/site",
      },
      {
        "id": "hchess",
        "name": "HChess",
        "description": "A chess game written in Haskell.",
        "src": "https://github.com/AidenPetersen/HChess",
      },
      {
        "id": "mips",
        "name": "Mips CPU",
        "description": "A 32 bit pipelined CPU written in VHDL.",
        "src": null,
      },
    ];
    return context.render(projects);
  },
};

export default Portfolio;
