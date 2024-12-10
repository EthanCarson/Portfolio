export default function Header({ data, HImage, Heading, children }: Props) {
  const referenceName = typeof children === "string" ? children : "";

  // Ensure data and data.Projects exist before attempting to access them
  const headerData = data?.Projects ? data.Projects[referenceName] : undefined;

  if (!headerData && !(HImage || Heading)) {
    console.error(`Header data not found for reference name: ${referenceName}`);
    return null;
  }

  // Destructure with fallback if properties are missing
  const { HImage: dynamicHImage = "", Heading: dynamicHeading = "" } =
    headerData || {};

  const finalHImage = dynamicHImage || HImage;
  const finalHeading = dynamicHeading || Heading;

  return (
    <header style={{ backgroundImage: `url(${finalHImage})` }}>
      <h1>{finalHeading}</h1>
    </header>
  );
}
