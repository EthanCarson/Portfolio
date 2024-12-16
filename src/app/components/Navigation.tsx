"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname(); // To determine the current route

  return (
    <nav>
      <ul>
        <li>
          <img src="/navlogo.svg" alt="Logo" height="40px" />
        </li>
        <li>
          {pathname === "/" ? (
            "Home" // Display as text only for current page
          ) : (
            <Link href="/">Home</Link>
          )}
        </li>

        <li>
          {pathname === "/aboutme" ? (
            "About Me" // Display as text only for current page
          ) : (
            <Link href="/aboutme">About Me</Link>
          )}
        </li>

        <li id="ProjectNav">
          Projects:
          <ul>
            <li>
              {pathname === "/projects" ? (
                "Showcase" // Display as text only for current page
              ) : (
                <Link href="/projects">Showcase</Link>
              )}
            </li>

            <li>
              {pathname === "/projects" ? (
                "Websites" // Display as text only for current page
              ) : (
                <Link href="/projects#Websites">Websites</Link>
              )}
            </li>

            <li>
              {pathname === "/projects" ? (
                "Pixel Art" // Display as text only for current page
              ) : (
                <Link href="/projects#Pixel Art">Pixel Art</Link>
              )}
            </li>
            <li>
              {pathname === "/projects" ? (
                "College" // Display as text only for current page
              ) : (
                <Link href="/projects#College Projects">College</Link>
              )}
            </li>
          </ul>
        </li>

        <li>
          {pathname === "/contact" ? (
            "Contact" // Display as text only for current page
          ) : (
            <Link href="/contact">Contact</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
