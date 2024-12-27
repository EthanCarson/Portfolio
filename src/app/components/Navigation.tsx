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
    setIsMenuOpen(prevState => !prevState); // Toggle the menu state
  };

  return (
    <nav>
      <ul>
        <li>
          <img src="/navlogo.svg" alt="Logo" height="40px" />
        </li>
        {/* Hamburger Icon */}
        <li className="sandwhich" onClick={toggleMenu}>
          &#9776;
        </li>

        {/* Mobile Menu Items */}
        <div className={`mobile ${isMenuOpen ? "open" : ""}`}>
          <li>
            {pathname === "/" ? (
              "Home"
            ) : (
              <Link href="/">Home</Link>
            )}
          </li>

          <li>
            {pathname === "/aboutme" ? (
              "About Me"
            ) : (
              <Link href="/aboutme">About Me</Link>
            )}
          </li>

          <li id="ProjectNav">
            Projects:
            <ul>
              <li>
                {pathname === "/projects" ? (
                  "Showcase"
                ) : (
                  <Link href="/projects">Showcase</Link>
                )}
              </li>

              <li>
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

          <li id="ProjectNav">
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
        </div>
      </ul>

      <style jsx>{`
        /* Mobile Menu */
        .mobile {
          display: none; /* Hidden by default */
        }

        .mobile.open {
          display: block; /* Show when menu is open */
        }

        /* Hamburger Icon toggle on mobile */
        .sandwhich {
          font-size: 30px;
          cursor: pointer;
        }

        /* Show hamburger on mobile */
        @media only screen and (max-width: 700px) {
          .sandwhich {
            display: block;
          }

          .mobile {
            width: 100%;
            background-color: #333;
          }

          .mobile.open {
            display: block; /* Show when clicked */
          }
        }
      `}</style>
    </nav>
  );
}
