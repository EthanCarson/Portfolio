import { Data } from "./DataTypes";
import dataJson from "../../../data/data.json";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link"; // Import Link component for internal routing

const data: Data = dataJson;

type CardProps = {
  children: React.ReactNode;
  isHomePage: boolean; // Make isHomePage a required prop
};

export default function Card({ children, isHomePage }: CardProps) {
  const referenceName = typeof children === "string" ? children : "";

  const cardData =
    data.Projects[referenceName] || data.Highlights[referenceName];

  if (!cardData) {
    console.error(`Card data not found for reference: ${referenceName}`);
    return null; // Graceful fallback
  }

  const {
    CardImage,

    HCaption, // Add HCaption for home page
    SCaption, // Add SCaption for project page
    Link: link = "#",
    ImgAlt = "Card image"
  } = cardData;

  const isProject = referenceName in data.Projects;

  // Dynamically choose the caption based on isHomePage
  const caption = isHomePage && HCaption ? HCaption : SCaption;

  const renderCardContent = (
    <div className="Card">
      <Image
        src={CardImage}
        alt={ImgAlt}
        width={251}
        height={251}
        layout="intrinsic" // Optional: You can also use 'responsive' or 'fill' if needed
      />
      <div>
        {isHomePage && isProject && <em>Project: </em>}
        {caption} {/* Display the selected caption */}
      </div>
    </div>
  );

  // If Link is provided (i.e. not "#"), use Next.js Link for routing
  return (
    <div className="card">
      {link !== "#" ? (
        <Link href={link}>{renderCardContent}</Link>
      ) : (
        renderCardContent // Render the content without anchor tag if no Link
      )}
    </div>
  );
}
