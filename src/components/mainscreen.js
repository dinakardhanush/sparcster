import React, { useContext } from "react";
import { screenPadding } from "../App";
// import Background from "../assets/background.svg";
// import Brand from "../assets/brand.svg";

const MainScreen = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const padding = useContext(screenPadding);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div
      className="relative flex"
      style={{ paddingLeft: padding, paddingRight: padding }}
    >
      <div className="absolute -z-10 left-0">
        <img
          src={require("../assets/background.svg").default}
          alt="background"
          width={width}
        />
      </div>
      <div className="flex flex-col p-10 w-3/5 mt-7">
        <div className="mb-8 poppins text-5xl font-semibold">
          Marketplace For <span className="text-pink">Brands</span> And{" "}
          <span className="text-pink">Influencers</span> To Collab
        </div>
        <div className="mb-10 inter text-gray text-xl w-8/12">
          Helping brands to choose influencer based on their industry and
          helping influencer to have the freedom of whom they should work with
          no scam.
        </div>
        <div className="px-10 inter py-3 bg-pink text-white text-xl rounded-full mr-auto font-bold">
          <a href="mailto:dinakardhanush@gmail.com">Contact Us</a>
        </div>
      </div>
      <div className="mt-8 mr-12">
        <img
          src={require("../assets/brand.svg").default}
          alt="brand"
          width={width * 0.4}
        />
      </div>
    </div>
  );
};

export default MainScreen;
