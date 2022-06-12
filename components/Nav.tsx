/** @jsx h */

import { h } from "$fresh/runtime.ts";

const Nav = (props: { active: string }) => {
  const items = [
    {
      name: "Aiden Petersen",
      href: "/",
    },
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Resume",
      href: "/resume",
    },
  ];
  const groupItemClass = `${props.active }`
  return (
    <nav
      class="flex"
      style={{
        paddingBottom: "0.6em",
      }}
    >
      <ul>
        {items.map((item, idx) => {
          return (
            <li>
              {idx === 0
                ? <a href={item.href} class="name">{item.name}</a>
                : <a href={item.href} className={
                  item.name === props.active ? "active" : ""
                }>[{item.name}]</a>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
