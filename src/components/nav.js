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
        width: "280px; ",
        transition: "transform 300ms ease-in",
        transform: menu ? "translateX(-100%)" : "none",
      }}
    >
      <button
        onClick={() => setMenu(!menu)}
        className="btn btn-primary position-absolute end-0 z-3 top-0 rounded-0"
        type="submit"
        style={{ transform: "translateX(100%)" }}
      >
        {!menu ? "Close" : "Menu"}
      </button>
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
        <li>
          <Link href="/licenses/new" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            New License
          </Link>
        </li>
        <li>
          <Link href="/licenses/approver" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Approvers New
          </Link>
        </li>
        <li>
          <Link href="/licenses/final" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Application final
          </Link>
        </li>
        <li>
          <Link href="/licenses/assigned" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Assigned License
          </Link>
        </li>
        <li>
          <Link href="/licenses/completed" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Completed License
          </Link>
        </li>
        <li>
          <Link href="/licenses/renew" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Renew License
          </Link>
        </li>
        <li>
          <Link href="/licenses/details" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            License details
          </Link>
        </li>
        <li>
          <Link href="/licenses/linked" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Linked Licenses
          </Link>
        </li>
        <li>
          <Link href="/license_internal" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            License internal
          </Link>
        </li>
        <li>
          <Link href="/licenses/edit" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            License edit
          </Link>
        </li>
        <li>
          <Link href="/finance/new" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Finance new
          </Link>
        </li>
        <li>
          <Link href="/finance/assigned" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Finance assigned
          </Link>
        </li>
        <li>
          <Link href="/finance/not_reflecting" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Payment not reflecting
          </Link>
        </li>
        <li>
          <Link href="/finance/verified" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Finance Verified
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
          <Link href="/client/details" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Client details
          </Link>
        </li>
        <li>
          <Link href="/documents" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Documents
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <Link
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <Image
            src="/logo.PNG"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>user</strong>
        </Link>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <Link className="dropdown-item" href="#">
              New project...
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" href="#">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Nav;
