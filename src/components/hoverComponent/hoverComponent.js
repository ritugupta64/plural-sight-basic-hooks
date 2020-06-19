import React, { useRef } from "react";

const HoverComponent = ({primary, secondary}) => {
  const imga = useRef(null);

  return (
    <>
      <img
        src={primary}
        onMouseOver={() => {
          imga.current.src = secondary;
        }}
        onMouseOut={() => {
          imga.current.src = primary;
        }}
        ref={imga}
        width="100"
        height="100"
      />
    </>
  );
};

export {HoverComponent};
