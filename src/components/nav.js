"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className="fixed-top min-vh-100 d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{
        width: "230px; ",
        transition: "transform 300ms ease-in",
        transform: menu ? "translateX(-100%)" : "none",
      }}
    >
      {/* <button
        onClick={() => setMenu(!menu)}
        className="btn btn-primary position-absolute end-0 z-3 top-0 rounded-0"
        type="submit"
        style={{ transform: "translateX(100%)" }}
      >
        {!menu ? "Close" : "Menu"}
      </button> */}
      <Link
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32"></svg>
        <span className="fs-6">MPUMALANGA ECONOMIC REGULATOR</span>
      </Link>
      <hr />
      <div className="nav-elements">
        <div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href="/" className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/profile" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/client/login" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Log in
          </Link>
        </li>
        <li>
          <Link href="/licenses/new" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            New License
          </Link>
        </li>
        <li>
          <Link href="/licenses/linked" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Linked Licenses
          </Link>
        </li>
        <li>
          <Link href="/client/all" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            All users
          </Link>
        </li>
        <li>
          <Link href="/licenses/all" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            All licenses
          </Link>
        </li>
        <li>
          <Link href="/documents" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Documents
          </Link>
        </li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default Nav;
