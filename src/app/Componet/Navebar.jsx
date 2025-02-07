
"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import React, { useState } from "react";
import logo from "../../../public/img/logomain.png";

const Navbar = () => {
  
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Project", path: "/project" }, 
    { name: "Gallery", path: "/gallery" }, 
    { name: "Blog", path: "/services" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  return (
    <div>
      <section className="container-fluid mt-0">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <Image src={logo} alt="logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>

            <div className="justify-content-end collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {navLinks.map((link, index) => (
                 <li key={index} className={`mx-3  nav-item ${pathname === link.path ? "active" : ""}`}>
                 <Link
                   className="nav-link text-light"
                   href={link.path}
                 >
                   {link.name}
                 </Link>
               </li>
               
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
