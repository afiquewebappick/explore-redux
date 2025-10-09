import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contract</a>
            </li>
            <li>
              <a>
                <button className="btn text-xs bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white">
                  <FontAwesomeIcon icon={faPlus} /> New Ticket
                </button>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">CS — Ticket System</h3>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Changelog</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Download</a>
          </li>
          <li>
            <a>Contract</a>
          </li>
        </ul>
        <button className="btn bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white">
          <FontAwesomeIcon icon={faPlus} /> New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
