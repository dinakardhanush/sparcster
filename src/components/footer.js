import React, { useContext } from "react";
import { screenPadding } from "../App";

const Footer = () => {
  const padding = useContext(screenPadding);

  return (
    <div
      className="flex items-center justify-center h-24"
      style={{ paddingLeft: padding, paddingRight: padding }}
    >
      Copyright © 2020-2032{" "}
      <span className="text-pink px-2">Onsparkventures</span> Company. All
      rights reserved.
    </div>
  );
};

export default Footer;
