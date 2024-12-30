"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // Import useState hook

export default function Navbar() {
  const pathname = usePathname(); // To determine the current route

  // State to manage whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the menu state
  };

  return (
    <nav>
      <ul>
        <li>
          <img src="/navlogo.svg" alt="Logo" height="40px" />
        </li>
        {/* Hamburger Icon */}
        <li className="sandwhich" onClick={toggleMenu}>
          <img src="/hamburger.svg" alt="Hamburger Menu" height="20px" />
        </li>

        {/* Mobile Menu Items */}

        <li className={`mobile ${isMenuOpen ? "open" : ""}`}>
          {pathname === "/" ? "Home" : <Link href="/">Home</Link>}
        </li>

        <li className={`mobile ${isMenuOpen ? "open" : ""}`}>
          {pathname === "/aboutme" ? (
            "About Me"
          ) : (
            <Link href="/aboutme">About Me</Link>
          )}
        </li>

        <li id="ProjectNav" className={`mobile ${isMenuOpen ? "open" : ""}`}>
          Projects:
          <ul>
            <li>
              {pathname === "/projects" ? (
                "Showcase"
              ) : (
                <Link href="/projects">Showcase</Link>
              )}
            </li>

            <li className={`mobile ${isMenuOpen ? "open" : ""}`}>
              {pathname === "/projects" ? (
                "Websites"
              ) : (
                <Link href="/projects#Websites">Websites</Link>
              )}
            </li>

            <li>
              {pathname === "/projects" ? (
                "Pixel Art"
              ) : (
                <Link href="/projects#Pixel Art">Pixel Art</Link>
              )}
            </li>
            <li>
              {pathname === "/projects" ? (
                "College"
              ) : (
                <Link href="/projects#College Projects">College</Link>
              )}
            </li>
          </ul>
        </li>

        <li id="ProjectNav" className={`mobile ${isMenuOpen ? "open" : ""}`}>
          {pathname === "/contact" ? (
            "Contact"
          ) : (
            <Link href="/contact">Contact</Link>
          )}
          <ul>
            <li>
              {pathname === "/contact/resume" ? (
                "Resume"
              ) : (
                <Link href="/contact/resume">Resume</Link>
              )}
            </li>
          </ul>
        </li>
      </ul>

      <style jsx>{`
        /* Mobile Menu */

        .mobile.open {
          display: block; /* Show when menu is open */
        }

        /* Hamburger Icon toggle on mobile */
        .sandwhich {
          cursor: pointer;
        }

        /* Show hamburger on mobile */
        @media only screen and (max-width: 700px) {
          .mobile.open {
            display: block; /* Show when clicked */
          }
        }
      `}</style>
    </nav>
  );
}
