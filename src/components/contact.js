import React, { useContext } from "react";
import { screenPadding } from "../App";

const Contact = () => {
  const padding = useContext(screenPadding);
  return (
    <div
      className="flex flex-col mt-10 ml-20"
      style={{ paddingLeft: padding, paddingRight: padding }}
    >
      <div className="font-semibold text-6xl poppins mb-5">Contact</div>
      <div className="mb-3">
        <input
          className="border-b-2 border-gray px-8 outline-none h-12 w-9/12"
          placeholder="Name"
        />
      </div>
      <div className="mb-14">
        <input
          className="border-b-2 border-gray px-8 outline-none h-12 w-9/12"
          placeholder="Email"
        />
      </div>
      <div className="mb-5">
        <textarea
          className="border-2 border-gray p-4 outline-none h-56 rounded-xl resize-none w-9/12"
          placeholder="Message"
        />
      </div>
      <div className="px-10 inter py-3 bg-pink text-white text-xl rounded-full mr-auto font-bold">
        Submit
      </div>
    </div>
  );
};

export default Contact;
