"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, BRAND_NAME } from "@/constants/static_text";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('landing');

  return (
    <nav className="site-navbar navbar p-0 m-0" >
      <div className="container-fluid px-4 py-2 d-flex align-items-center" >
        {/* Brand */}
        <Link onClick={()=>setActiveLink('landing')} className="navbar-brand d-flex align-items-center gap-2 me-4 fs-3" href="/">
          <span>🚍</span>
          <span className="fw-bold" >
            {BRAND_NAME}
          </span>
        </Link>
        {/* Nav links - centered */}
        <ul className="nav flex-row align-items-center mx-auto gap-3" style={{minWidth:480}}>
          {NAV_LINKS.filter((val)=>val.label!='landing').map(({ label, href }, i) => {
            return (
              <li className="nav-item position-relative" key={href+label}>
                <Link
                  className={`nav-link rounded-pill  py-1 px-3 ${label==activeLink ? "active-link text-white" : "text-black"}`}
                  href={href}
                  
                  onClick={()=>setActiveLink(label)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Actions - right */}
        
        <div className="d-flex gap-2 justify-content-center align-items-center">
          <Link href="/signin" className="btn btn-outline-dark text-decoration-none border px-4 py-1 rounded-pill" >Sign In</Link>
          <Link href="/signup" className="btn btn-gradients text-light fw-medium px-4 py-1 m-0 my-auto text-decoration-none rounded-pill" >Sign Up</Link>
        </div>
      </div>
      
    </nav>
  );
}
