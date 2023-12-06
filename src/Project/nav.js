import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  const links = [
    { to: "/Project/home", label: "Home" },
    { to: "/Project/signin", label: "Signin" },
    { to: "/Project/signup", label: "Signup" },
    { to: "/Project/account", label: "Account" },
    { to: "/Project/users", label:"User"},
  ];
  const active = (path) => (pathname.includes(path) ? "active" : "");
  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`list-group-item ${active(link.to)}`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export default Nav;