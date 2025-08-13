import React, { useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followRef = useRef(null);

  return (
    <>
    {/* For main dot */}
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 bg-white rounded-full pointer-events-none
    mix-blend-difference z-[9999] transform -translate-x-1/2 -translate-y-1/2" />

    {/* For main dot */}


    </>
  );
};

export default CustomCursor;
