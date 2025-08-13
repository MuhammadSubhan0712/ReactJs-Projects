import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // To move cursor
      const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          Y: e.clientY,
          duration: 0.1,
        });

        // Follower with delay
        gsap.to(followerRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const hoverElements = document.querySelectorAll(
        "a, button, .hover-effect, [data-cursor-hover]"
      );

      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(followerRef.current, {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "#fff",
          });
        });
      });

      document.addEventListener("mousemove", moveCursor);
      return () => {
        document.removeEventListener("mousemove", moveCursor);
      };
    }
  }, []);

  return (
    <>
      {/* For main dot */}
      <div
        ref={cursorRef}
        className="fixed w-2.5 h-2.5 bg-white rounded-full pointer-events-none
    mix-blend-difference z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Follower (larger ring) */}
      <div
        ref={followRef}
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none mix-blend-difference z-[9998]
    transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
      />
    </>
  );
};

export default CustomCursor;
