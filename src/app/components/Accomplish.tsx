"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

// Define the type for the image data
type ImageData = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

// Sample data for a single gallery
const gallery: ImageData[] = [
  {
    id: "1",
    src: "/img/nhs.jpg",
    alt: "Candle",
    caption: "Enetered into local National Honors Society"
  },
  {
    id: "2",
    src: "/img/everyday.jpg",
    alt: "Hero",
    caption: "Won the EveryDay Heroes Award from First Heritage"
  },
  {
    id: "3",
    src: "/img/musical.jpg",
    alt: "Musical",
    caption:
      "Preformed lead roles in The Wizard of Oz, the Musical and A Christmas Story: The Musical"
  },
  {
    id: "4",
    src: "/img/allcounty.jpg",
    alt: "Choir",
    caption: "Part of All-County Band and Choir Throughout High-School"
  },
  {
    id: "5",
    src: "/img/top10.jpg",
    alt: "Rockstar",
    caption: "Top 10 of Class (#3)"
  }
];

const Accomplish: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleImageClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id); // Toggle expansion for the clicked image
  };

  const resetImages = () => {
    setExpandedId(null); // Reset all images to the default state
  };

  return (
    <div className="image-container">
      {gallery.map((image) => (
        <motion.div
          key={image.id}
          onClick={() => handleImageClick(image.id)}
          style={{
            cursor: "pointer",
            marginBottom: "10px"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            style={{
              width: expandedId === image.id ? "300px" : "150px",
              height: "auto",
              display:
                expandedId === null || expandedId === image.id
                  ? "block"
                  : "none" // Show all images initially, hide others when clicked
            }}
          />
          {expandedId === image.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>{image.caption}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
      <motion.button
        onClick={resetImages}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{ display: expandedId ? "block" : "none" }} // Only show the reset button when an image is expanded
      >
        Reset
      </motion.button>
    </div>
  );
};

export default Accomplish;
