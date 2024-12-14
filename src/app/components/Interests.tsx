import React from "react";
import data from "../../../data/data.json"; // Import the JSON file

// Component props type
type InterestsProps = {
  children: React.ReactNode; // Allow any ReactNode for `children`
};

export default function Interests({ children }: InterestsProps) {
  // Convert children to string and ensure it's a valid key
  const key = String(children) as keyof typeof data.Interests;

  const interest = data.Interests[key]; // Safe access now

  if (!interest) {
    console.error(`Interest data not found for key: ${key}`);
    return null; // Optionally render fallback UI here
  }

  return (
    <div>
      <img src={interest.image} alt={interest.ImgAlt} />
      <p>{interest.Description}</p>
    </div>
  );
}
