import React, { useContext } from "react";
import { screenPadding } from "../App";

const NavBar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const padding = useContext(screenPadding);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div
      className="flex h-16 justify-between items-center"
      width={width}
      style={{ paddingLeft: padding, paddingRight: padding }}
    >
      <div className="quick font-bold text-3xl pl-8">Sparcster</div>
      <div className="flex items-center">
        <a className="px-8 inter" href="mailto:dinakardhanush@gmail.com">
          Contact
        </a>
        <div className="px-8 inter py-2 bg-pink text-white rounded-full mr-8">
          <a
            target="_blank"
            href="https://tripetto.app/run/ZO061NKZR8"
            rel="noreferrer"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
