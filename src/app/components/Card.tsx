import Image from "next/image";
import Link from "next/link";
import Fetcher from "./Fetcher";
import { Project, Highlight } from "./DataTypes"; // Import types
import * as motion from "motion/react-client";

/*
This Component Creates a Card with an Image and Caption
There are 2 possible Captions which can be set with the isHomePage attribute
Component requires both Children and the isHomePage attribute

Optimized 1/2/2025
Ethan Carson
Made with help from ChatGPT

*/

type CardProps = {
  children: string;
  isHomePage: boolean;
};

export default function Card({ children, isHomePage }: CardProps) {
  const referenceName = children;
  return (
    <Fetcher data={referenceName}>
      {(fetchedData: Project | Highlight) => {
        // Explicitly specify the type
        if (!fetchedData) {
          console.error(
            `Fetched data not found for reference: ${referenceName}`
          );
          return null;
        }

        const {
          CardImage,
          HCaption,
          SCaption,
          Link: link = "#",
          ImgAlt = "Card image"
        } = fetchedData;

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
            <div>{caption}</div>
          </>
        );

        return (
          <div className="Card">
            {link !== "#" ? (
              <Link href={link}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {renderCardContent}
                </motion.div>
              </Link>
            ) : (
              <div>{renderCardContent}</div> // Regular div when no Link
            )}
          </div>
        );
      }}
    </Fetcher>
  );
}
