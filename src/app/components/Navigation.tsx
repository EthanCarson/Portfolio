"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Data } from "../components/DataTypes"; // Assuming your data types are exported here
import dataJson from "../../../data/data.json"; // Importing JSON data

const data: Data = dataJson; // Ensuring the data is typed correctly

export default function Navigation() {
  const pathname = usePathname(); // Get the current route

  // Define the basic navigation links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutme", label: "About Me" },
    { href: "/projects", label: "Projects", hasDropdown: true }, // Projects will have a dropdown
    { href: "/contact", label: "Contact" }
  ];

  // Extract project categories and their respective projects dynamically
  const projectsData = Object.entries(data.Projects).reduce((acc, [category, projects]) => {
    const projectLinks = Object.entries(projects).map(([projectKey]) => ({
      href: `/projects/${projectKey}`, // Use the projectKey to create the URL
      label: projectKey // Use the projectKey itself as the label
    }));

    acc[category] = projectLinks;
    return acc;
  }, {} as Record<string, { href: string; label: string }[]>);

  return (
    <nav>
      <ul>
        <li>
          <img src="/navlogo.svg" alt="Logo" />
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            {link.hasDropdown ? (
              <div className="dropdown">
                <span>{link.label}</span> {/* Projects will display as text */}
                <ul className="dropdown-menu">
                  {Object.entries(projectsData).map(([category, items]) => (
                    <li key={category}>
                      <span>{category}</span>
                      <ul>
                        {items.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ) : pathname === link.href ? (
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
