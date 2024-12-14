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
  const referenceName = typeof children === "string" ? children : "";

  // Safely access the project data from Projects or Highlights
  const headerData = Object.values(data?.Projects || {})
    .map((category: Record<string, ProjectData>) => category[referenceName])
    .find(Boolean);

  const { HImage: dynamicHImage = "", Heading: dynamicHeading = "" } =
    headerData || {};

  // Use the fallback value for image and heading if not available
  const finalHImage = dynamicHImage || HImage;
  const finalHeading = dynamicHeading || Heading;

  return (
    <header style={{ backgroundImage: `url(${finalHImage})` }}>
      <h1>{finalHeading}</h1>
    </header>
  );
}
