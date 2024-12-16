import { ReactNode } from "react";

interface ProjectData {
  HImage?: string;
  Heading?: string;
}

interface Props {
  data?: {
    Projects?: Record<string, Record<string, ProjectData>>;
  };
  HImage?: string;
  Heading?: string;
  children?: ReactNode;
}

export default function Header({ data, HImage, Heading, children }: Props) {
  // Ensure 'children' is used properly, assuming it represents the reference name
  const referenceName = typeof children === "string" ? children : "";

  // Safely access the project data from Projects
  const headerData = Object.values(data?.Projects || {})
    .map((category: Record<string, ProjectData>) => category[referenceName])
    .find(Boolean);  // Find the first non-falsy match

  // Destructure and provide default values if no match is found
  const { HImage: dynamicHImage = "", Heading: dynamicHeading = "" } =
    headerData || {}; // fallback to empty string if headerData is undefined

  // Final fallback values
  const finalHImage = dynamicHImage || HImage || ''; // If dynamicHImage is missing, fallback to HImage or empty string
  const finalHeading = dynamicHeading || Heading || ''; // Same for Heading

  return (
    <header style={{ backgroundImage: `url(${finalHImage})` }}>
      <h1>{finalHeading}</h1>
      {children && <div>{children}</div>} {/* Render children if provided */}
    </header>
  );
}
