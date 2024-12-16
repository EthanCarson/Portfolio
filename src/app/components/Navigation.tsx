"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname(); // Get the current route

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutme", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav>
      <ul>
        <li>
          <img src="/navlogo.svg" alt="Logo" />
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            {pathname === link.href ? (
              <span>{link.label}</span> // Display as text only for current page
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
