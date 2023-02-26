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
        class="btn btn-primary position-absolute end-0 z-3 top-0 rounded-0"
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
        <span className="fs-4">MPUMALANGA ECONOMIC REGULATOR</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href="/" className="nav-link active" aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Home
          </Link>
        </li>
        <li>
          <Link href="/new_license" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            New License
          </Link>
        </li>
        <li>
          <Link href="/approver_new" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Approve New
          </Link>
        </li>
        <li>
          <Link href="/final_license" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Application date
          </Link>
        </li>
        <li>
          <Link href="/assigned_license" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Assigned License
          </Link>
        </li>
        <li>
          <Link href="/license_renew" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            Renew License
          </Link>
        </li>
        <li>
          <Link href="/license_details" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            License details
          </Link>
        </li>
        <li>
          <Link href="/linked_licenses" className="nav-link text-white">
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
          <Link href="/license_edit" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            License edit
          </Link>
        </li>
        <li>
          <Link href="/all_users" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            All users
          </Link>
        </li>
        <li>
          <Link href="/all_licenses" className="nav-link text-white">
            <svg className="bi pe-none me-2" width="16" height="16"></svg>
            All licenses
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
  );
};

export default Nav;
