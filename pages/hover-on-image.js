import React from "react";
import { HoverComponent } from "../src/components/hoverComponent/hoverComponent";

const hoverOnImage = () => {
  return (
    <>
      <HoverComponent
        primary="/images/img-1.jpg"
        secondary="/images/img-2.jpg"
      />
    </>
  );
};

export default hoverOnImage;
