import React, { useState } from "react";
import HumanBodySVG from "./assets/human-body-detail.svg?react"; // Import as React component
import "./styles/human-body.css";

const ClickableHumanBody = () => {
  const [hoveredPart, setHoveredPart] = useState(null);
  const [selectedParts, setSelectedParts] = useState([]);

  const handleHover = (event) => {
    setHoveredPart(event.target.id);
  };

  const handleLeave = () => {
    setHoveredPart(null);
  };

  const handleClick = (event) => {
    const partId = event.target.id;
    if (!partId) return;

    setSelectedParts((prevSelected) => {
      const newSelection = prevSelected.includes(partId)
        ? prevSelected.filter((id) => id !== partId) // Deselect
        : [...prevSelected, partId]; // Select new part

      // Apply the class dynamically
      document.querySelectorAll(".human-body path").forEach((path) => {
        path.classList.toggle("selected", newSelection.includes(path.id));
      });

      return newSelection;
    });
  };


  return (
    <div className="human-body-container">
      <HumanBodySVG
        className="human-body"
        onClick={handleClick}
        onMouseOver={handleHover}
        onMouseOut={handleLeave}
      />
      {/* <p>Selected Parts: {selectedParts.join(", ")}</p> */}
      {/* {hoveredPart && <p className="hover-info">Hovered on: {hoveredPart}</p>} */}
    </div>
  );
};

export default ClickableHumanBody;