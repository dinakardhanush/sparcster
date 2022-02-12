import React, { useState, useContext } from "react";
import { screenPadding } from "../App";

const Card = (props) => {
  // create a card hover state
  const [hover, setHover] = useState(false);
  return (
    <div className="relative">
      <div className="absolute h-10 w-10 bg-black text-white -top-14 rounded-full flex items-center justify-center">
        {props.number}
      </div>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative text-gray bg-white w-64 h-48 text-xl py-3 shadow-md rounded-xl text-center inter hover:text-white"
        style={{ transition: "color 0.3s" }}
      >
        <div
          className={
            (hover ? "h-48 " : "h-0 ") +
            "absolute w-64 bg-pink z-0 bottom-0 rounded-xl"
          }
          style={{ transition: "height 0.3s" }}
        ></div>
        <div className="absolute z-10">{props.children}</div>
      </div>
    </div>
  );
};

const WhytoJoin = () => {
  const padding = useContext(screenPadding);
  return (
    <>
      <div
        className="bg-lblue flex flex-col mt-10"
        style={{ paddingLeft: padding, paddingRight: padding }}
      >
        <div className="text-6xl font-bold mt-5 text-center mb-24">
          Why to join us?
        </div>
        <div className="flex items-center justify-evenly mb-12">
          <Card number="1">
            Search availability of Influencers to work and know about audience
            engagement rates and analytics
          </Card>
          <Card number="2">
            Get direct approach from the brand and have the freedom to select
            whom you want to work with.
          </Card>
          <Card number="3">
            Huge marketplace for brands and influencer to collab and with.
          </Card>
        </div>
      </div>
      <div className="flex justify-center items-center my-4">
        <div
          className="relative px-10 inter py-3 border-2 border-pink bg-white text-pink text-xl rounded-full font-bold overflow-hidden hover:text-white hover:bg-pink"
          style={{ transition: "background-color 300ms , color 300ms" }}
        >
          <a
            target="_blank"
            href="https://tripetto.app/run/ZO061NKZR8"
            className="z-10"
            rel="noreferrer"
          >
            Join Us
          </a>
        </div>
      </div>
    </>
  );
};

export default WhytoJoin;
