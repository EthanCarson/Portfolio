"use client";
import React, { useState } from "react";
import * as motion from "motion/react-client";
/* 

This component is an extension of the About Me page. It renders 5 pre-determined Images. When an image is selected, other images disappear. A caption and a button are added as well. The button resets the component.
Ethan Carson
Optimized 12/31/2024
Created with help from ChatGPT

*/
export default function Accomplish() {
  // State to manage which element is visible. It can be a string or null.
  const [visibleKey, setVisibleKey] = useState<string | null>(null);

  // Array of accomplishments to render.
  const accomplishments = [
    {
      id: "1",
      src: "/img/nhs.jpg",
      alt: "Candle",
      caption: "Entered into local National Honors Society"
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
        "Performed lead roles in The Wizard of Oz, the Musical and A Christmas Story: The Musical"
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

  // Handle image click and button click.
  const handleImageClick = (key: string | null) => {
    setVisibleKey(key); // Set the visible key to the clicked image's key or reset it to null.
  };

  return (
    <aside>
      <h1>Accomplishments:</h1>
      <section>
        {accomplishments.map((item) => (
          <React.Fragment key={item.id}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              src={item.src}
              width={231}
              height={231}
              alt={item.alt}
              onClick={() => handleImageClick(item.id)}
              style={{
                display:
                  visibleKey === item.id || visibleKey === null
                    ? "block"
                    : "none"
              }}
            />
            <p
              style={{
                display: visibleKey === item.id ? "block" : "none"
              }}
            >
              {item.caption}
            </p>
          </React.Fragment>
        ))}

        {/* Button to reset the visible state to default */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          style={{ display: visibleKey !== null ? "block" : "none" }}
          onClick={() => handleImageClick(null)}
        >
          See More:
        </motion.button>
      </section>
    </aside>
  );
}
