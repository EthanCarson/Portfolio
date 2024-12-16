// CategorySection.tsx
// Generated with the help of AI
import React from "react";
import Card from "../components/Card";
import { Data } from "../components/DataTypes"; // Assuming your data types are exported here
import dataJson from "../../../data/data.json";

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
              {projectType}
              {/* Now referencing the individual project */}
            </Card>
          );
        })}
      </div>
    </article>
  );
}
