import { Data } from './DataTypes'; // Assuming DataTypes.tsx is in the same directory
import { ReactNode } from 'react';
import dataJson from "../../../data/data.json"; // Importing data.json correctly

interface FetcherProps<T> {
  data: string | keyof Data | keyof Data['Projects'];  // We can also have keys for nested structures if needed
  children: (fetchedData: T) => ReactNode;  // Now 'T' will be inferred based on the data
}

export default function Fetcher<T>({ data, children }: FetcherProps<T>) {
  let fetchedData: T;

  if (typeof data === "string") {
    // If data is a string, treat it as a reference key (e.g., "Projects.Websites.CorningTravelSite")
    const keys = data.split(".") as (keyof Data | keyof Data['Projects'])[]; // Ensure keys are valid for Data structure
    fetchedData = keys.reduce((acc, key) => acc?.[key], dataJson as Data) as T; // Traverse the data structure based on keys
  } else {
    // If data is an object, use it directly
    fetchedData = dataJson[data] as T; // Assuming `dataJson` has keys as provided
  }

  return <>{children(fetchedData)}</>;
}
