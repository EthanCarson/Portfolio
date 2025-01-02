import { Data } from "./DataTypes"; // Assuming DataTypes.tsx is in the same directory
import { ReactNode } from "react";
import dataJson from "../../../data/data.json"; // Importing data.json correctly

/*

This Reuseable Component Fetches Data from data.json
This component can fetch from anywhere on the data tree
Using this component requires a data attribute which specifies the path to the requested data
Ex: Projects.Websites.CorningTravelSite is valid

Optimized 1/2/2025
Ethan Carson
Made with help from ChatGPT

*/

interface FetcherProps<T> {
  data: keyof Data | string; // Accept top-level keys or a string for nested traversal
  children: (fetchedData: T) => ReactNode; // Function to render children with fetched data
}

export default function Fetcher<T>({ data, children }: FetcherProps<T>) {
  let fetchedData: T | undefined;

  if (typeof data === "string") {
    // Split the string to traverse nested keys
    const keys = data.split(".");

    // Traverse the data structure
    fetchedData = keys.reduce((acc, key) => {
      if (acc && typeof acc === "object" && key in acc) {
        return acc[key as keyof typeof acc];
      }
      return undefined; // Return undefined if the key is invalid
    }, dataJson as unknown) as T;
  } else {
    // Directly access top-level key
    fetchedData = dataJson[data] as T;
  }

  if (!fetchedData) {
    console.error(`Data not found for key: ${data}`);
    return null;
  }

  return <>{children(fetchedData)}</>;
}
