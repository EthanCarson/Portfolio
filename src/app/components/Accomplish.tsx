"use client";
import React, { useState } from "react";

/* 

This component is an extension of the About Me page. It renders 5 pre-determined Images. When an image is selected, other images dissapear. A caption and a button are added as well. The button resets the component.
Ethan Carson
Optimized 12/31/2024
Created with help from ChatGPT

*/
export default function Accomplish() {
  // State to manage which element is visible. It can be a string or null.
  const [visibleKey, setVisibleKey] = useState<string | null>(null);

  // Handle image click and button click. Accepts both string and null as arguments.
  const handleImageClick = (key: string | null) => {
    setVisibleKey(key); // Set the visible key to the clicked image's key or reset it to null.
  };

  return (
    <aside>
      <h1>Accomplishments:</h1>
      <section>
        <img
          src="/img/nhs.jpg"
          alt="Candle"
          key="1"
          onClick={() => handleImageClick("1")}
          style={{
            display:
              visibleKey === "1" || visibleKey === null ? "block" : "none"
          }}
        />
        <p key="1" style={{ display: visibleKey === "1" ? "block" : "none" }}>
          Entered into local National Honors Society
        </p>

        <img
          src="/img/everyday.jpg"
          alt="Hero"
          key="2"
          onClick={() => handleImageClick("2")}
          style={{
            display:
              visibleKey === "2" || visibleKey === null ? "block" : "none"
          }}
        />
        <p key="2" style={{ display: visibleKey === "2" ? "block" : "none" }}>
          Won the EveryDay Heroes Award from First Heritage
        </p>

        <img
          src="/img/musical.jpg"
          alt="Musical"
          key="3"
          onClick={() => handleImageClick("3")}
          style={{
            display:
              visibleKey === "3" || visibleKey === null ? "block" : "none"
          }}
        />
        <p key="3" style={{ display: visibleKey === "3" ? "block" : "none" }}>
          Performed lead roles in The Wizard of Oz, the Musical and A Christmas
          Story: The Musical
        </p>

        <img
          src="/img/allcounty.jpg"
          alt="Choir"
          key="4"
          onClick={() => handleImageClick("4")}
          style={{
            display:
              visibleKey === "4" || visibleKey === null ? "block" : "none"
          }}
        />
        <p key="4" style={{ display: visibleKey === "4" ? "block" : "none" }}>
          Part of All-County Band and Choir Throughout High-School
        </p>

        <img
          src="/img/top10.jpg"
          alt="Rockstar"
          key="5"
          onClick={() => handleImageClick("5")}
          style={{
            display:
              visibleKey === "5" || visibleKey === null ? "block" : "none"
          }}
        />
        <p key="5" style={{ display: visibleKey === "5" ? "block" : "none" }}>
          Top 10 of Class (#3)
        </p>

        {/* Button to reset the visible state to default */}
        <button
          type="button"
          style={{ display: visibleKey !== null ? "block" : "none" }}
          onClick={() => handleImageClick(null)}
        >
          See More:
        </button>
      </section>
    </aside>
  );
}
