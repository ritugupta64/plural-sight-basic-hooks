import React from "react";
import { OnPageScroll } from "../src/components/onScrollComponent/onScrollComponent";

const hoverOnImage = () => {
  return (
    <>
      <OnPageScroll primary="/images/img-1.jpg" secondary="/images/img-2.jpg" />

      <br />

      <OnPageScroll primary="/images/img-3.jpg" secondary="/images/img-4.jpg" />

      <br />

      <OnPageScroll primary="/images/img-1.jpg" secondary="/images/img-2.jpg" />

      <br />

      <OnPageScroll primary="/images/img-3.jpg" secondary="/images/img-4.jpg" />

      <br />
      
      <OnPageScroll primary="/images/img-1.jpg" secondary="/images/img-2.jpg" />

      <br />

      <OnPageScroll primary="/images/img-3.jpg" secondary="/images/img-4.jpg" />

      <br />

      <OnPageScroll primary="/images/img-1.jpg" secondary="/images/img-2.jpg" />

      <br />

      <OnPageScroll primary="/images/img-3.jpg" secondary="/images/img-4.jpg" />
    </>
  );
};

export default hoverOnImage;
