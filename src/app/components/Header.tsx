import { ReactNode } from "react";

interface ProjectData {
  HImage?: string;
  Heading?: string;
}

interface Props {
  data?: {
    Projects?: Record<string, ProjectData>;
  };
  HImage?: string;
  Heading?: string;
  children?: ReactNode;
}

export default function Header({ data, HImage, Heading, children }: Props) {
  // Determine the reference name from children if it's a string
  const referenceName = typeof children === "string" ? children : "";

  // Safely access project data
  const headerData = data?.Projects?.[referenceName];

  // Destructure with fallback values
  const { HImage: dynamicHImage = "", Heading: dynamicHeading = "" } =
    headerData || {};

  // Final values for header image and heading
  const finalHImage = dynamicHImage || HImage;
  const finalHeading = dynamicHeading || Heading;

  return (
    <header style={{ backgroundImage: `url(${finalHImage})` }}>
      <h1>{finalHeading}</h1>
    </header>
  );
}
