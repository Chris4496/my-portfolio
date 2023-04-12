import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

function Menu() {
  const slideAnimation = useSpring({
    from: {
      transform: "translateX(-36%) translateY(15.7%)", opacity: 0 },
    to: { transform: "translateX(0%) translateY(0%)", opacity: 1 },
    config: { duration: 500 },
    delay: 800,
  });

  return (
    <animated.div style={slideAnimation} className="my-24 flex flex-col h-fit">
      <Link
        to="/about"
        className="text-[#E01A4F] text-8xl font-bold my-6 -rotate-[25deg] hover:underline"
      >
        About
      </Link>
      <Link
        to="/work"
        className="text-[#53B3CB] text-8xl font-bold my-6 -rotate-[25deg] hover:underline"
      >
        Work
      </Link>
      <Link
        to="/contact"
        className="text-[#F9C22E] text-8xl font-bold my-6 -rotate-[25deg] hover:underline"
      >
        Contact
      </Link>
    </animated.div>
  );
}

export default Menu;
