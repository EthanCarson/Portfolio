import { Data } from "./DataTypes";
import dataJson from "../../../data/data.json";
import Image from "next/image";
import Link from "next/link";

const data: Data = dataJson;

type CardProps = {
  children: React.ReactNode;
  isHomePage: boolean;
};

export default function Card({ children, isHomePage }: CardProps) {
  const referenceName = typeof children === "string" ? children : "";

  // Check if referenceName exists under Projects or Highlights
  const cardData =
    Object.values(data.Projects)
      .map((category) => category[referenceName])
      .find(Boolean) || data.Highlights[referenceName];

  if (!cardData) {
    console.error(`Card data not found for reference: ${referenceName}`);
    return null;
  }

  const {
    CardImage,
    HCaption,
    SCaption,
    Link: link = "#",
    ImgAlt = "Card image"
  } = cardData;

  const isProject = referenceName in data.Projects;

  const caption = isHomePage && HCaption ? HCaption : SCaption;

  const renderCardContent = (
    <>
      <Image
        src={CardImage}
        alt={ImgAlt}
        width={251}
        height={251}
        layout="intrinsic"
      />
      <div>
        {isHomePage && isProject && <em>Project: </em>}
        {caption}
      </div>
    </>
  );

  return (
    <div className="Card">
      {link !== "#" ? (
        <Link href={link}>{renderCardContent}</Link>
      ) : (
        renderCardContent
      )}
    </div>
  );
}
