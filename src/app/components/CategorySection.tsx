// CategorySection.tsx
// Generated with the help of AI
import React from "react";
import Card from "../components/Card";
import { Data } from "../components/DataTypes"; // Assuming your data types are exported here
import dataJson from "../../../data/data.json";

/*

This component picks all keys from a given Category of Data and displays the Category Name and Cards for each key (assuming the key has Card Data)
Using this component requires the category attribute

Optimized 1/2/2025
Ethan Carson
Made with help from ChatGPT

*/

const data: Data = dataJson;

type CategorySectionProps = {
  category: string; // Category name like 'Websites', 'PixelArt', etc.
};

export default function CategorySection({ category }: CategorySectionProps) {
  // Get the projects for the given category (like Websites, PixelArt, etc.)
  const categoryProjects = data.Projects[category];

  if (!categoryProjects) {
    return null; // If no projects exist for this category, return nothing
  }

  return (
    <article>
      <h2>{category}</h2> {/* Render the category name */}
      <div id={category}>
        {Object.keys(categoryProjects).map((projectType) => {
          // `projectType` is the type of project (like 'Websites', 'PixelArt', etc.)

          return (
            <Card key={projectType} isHomePage={false}>
              {`Projects.${category}.${projectType}`}
            </Card>
          );
        })}
      </div>
    </article>
  );
}
