"use client";
//ChatGPT generated the basis and help edit this component.
import React, { useState } from "react";

// Define the type for the image data
type ImageData = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

// Define the type for the data object
type Data = {
  [key: string]: ImageData[];
};

// Sample data
const data: Data = {
  gallery: [
    { id: "1", src: "/img/image1.jpg", alt: "Image 1", caption: "Caption 1" },
    { id: "2", src: "/img/image2.jpg", alt: "Image 2", caption: "Caption 2" },
    { id: "3", src: "/img/image3.jpg", alt: "Image 3", caption: "Caption 3" }
  ],
  newGallery: [
    {
      id: "1",
      src: "/img/newimage1.jpg",
      alt: "New Image 1",
      caption: "New Caption 1"
    },
    {
      id: "2",
      src: "/img/newimage2.jpg",
      alt: "New Image 2",
      caption: "New Caption 2"
    }
  ]
};

interface AccomplishProps {
  children: string; // The key to look up the gallery name from data
}

const Accomplish: React.FC<AccomplishProps> = ({ children }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Get the image data dynamically based on the `children` prop
  const images = data[children] || [];

  const handleImageClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id); // Toggle expansion for the clicked image
  };

  const resetImages = () => {
    setExpandedId(null); // Reset all images to the default state
  };

  return (
    <div
      className="image-container"
      style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
    >
      {images.map((image) => (
        <div
          key={image.id}
          className={`image-wrapper ${
            expandedId === image.id
              ? "expanded"
              : expandedId
              ? "contracted"
              : ""
          }`}
          onClick={() => handleImageClick(image.id)}
          style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: expandedId === image.id ? "300px" : "150px",
              height: "auto",
              transition: "width 0.3s ease, height 0.3s ease"
            }}
          />
          <p>{image.caption}</p>
        </div>
      ))}
      {expandedId && (
        <button
          onClick={resetImages}
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "opacity 0.3s ease"
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Accomplish;
