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
  { id: "1", src: "/img/image1.jpg", alt: "Image 1", caption: "Caption 1" },
  { id: "2", src: "/img/image2.jpg", alt: "Image 2", caption: "Caption 2" },
  { id: "3", src: "/img/image3.jpg", alt: "Image 3", caption: "Caption 3" },
  { id: "4", src: "/img/image4.jpg", alt: "Image 4", caption: "Caption 4" },
  { id: "5", src: "/img/image5.jpg", alt: "Image 5", caption: "Caption 5" }
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
          style={{ cursor: "pointer", marginBottom: "10px" }}
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
