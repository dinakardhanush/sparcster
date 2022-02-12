import React, { useContext } from "react";
import { screenPadding } from "../App";
// import Influencer from "../assets/influencer.svg";

const Details = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const padding = useContext(screenPadding);

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div
      className="flex mt-10 justify-evenly"
      style={{ paddingLeft: padding, paddingRight: padding }}
    >
      <div>
        <img
          src={require("../assets/influencer.svg").default}
          alt="influencer"
          width={width * 0.35}
        />
      </div>
      <div className="flex flex-col w-4/12 justify-center">
        <div>
          <div className="text-5xl mb-5 poppins font-semibold">Brands</div>
          <div className="inter text-gray text-xl mb-14">
            Make your brand visible to more clients who all are interested in
            your in your products.
          </div>
        </div>
        <div>
          <div className="text-5xl mb-5 poppins font-semibold">Influencers</div>
          <div className="inter text-gray text-xl mb-10">
            No more scam brands. No more emails from fake brands and have your
            own freedom to choose the you want to work with.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
