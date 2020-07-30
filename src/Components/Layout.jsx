import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Google", url: "https://www.google.com/" },
  { name: "Amazon", url: "https://aws.amazon.com" }
];

export default ({ children }) => (
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink class="navbar-brand" to="/">
        React Test
      </NavLink>
      <span className="float-right">
        {links &&
          links.map((l, i) => {
            return (
              <a className="pr-4" key={i} href={l.url}>
                {l.name}
              </a>
            );
          })}
      </span>
    </nav>
    <div className="container">{children}</div>
  </Fragment>
);
