import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const links = (
    <>
      <Link to="/"><li className="mr-4">Home</li></Link>
      <Link to="/About"><li className="mr-4">About</li></Link>
      <Link to="/readList"><li>ReadList</li></Link>
    </>
  );

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow-sm px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Boi Poka</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-2">
          <button
            onClick={() => setLoginOpen(true)}
            className="btn bg-blue-600 text-white hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={() => setSignupOpen(true)}
            className="btn bg-green-600 text-white hover:bg-green-700"
          >
            Sign in
          </button>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {loginOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Login</h3>

            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-4"
            />

            <div className="modal-action">
              <button
                className="btn btn-primary"
                onClick={() => setLoginOpen(false)}
              >
                Login
              </button>
              <button
                className="btn"
                onClick={() => setLoginOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}

      {/* SIGN UP MODAL */}
      {signupOpen && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Sign in</h3>

            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-4"
            />

            <div className="modal-action">
              <button
                className="btn bg-green-600 text-white hover:bg-green-700"
                onClick={() => setSignupOpen(false)}
              >
                Create Account
              </button>
              <button
                className="btn"
                onClick={() => setSignupOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Navbar;
