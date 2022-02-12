import NavBar from "./components/navbar";
import MainScreen from "./components/mainscreen";
import Details from "./components/details";
import WhytoJoin from "./components/whytojoinus";
// import Contact from "./components/contact";
// import Modal from "./components/modal";
import Footer from "./components/footer";
import React, { useState, useEffect, createContext } from "react";

const screenPadding = createContext();

function App() {
  // create a state of screen width
  const [padding, setPadding] = useState((window.innerWidth - 1400) / 2);

  // listen to screen width on effect
  useEffect(() => {
    window.addEventListener("resize", () =>
      setPadding((window.innerWidth - 1400) / 2)
    );
  }, []);

  return (
    <div className="App">
      <screenPadding.Provider value={padding + 20}>
        <NavBar />
        <MainScreen />
        <Details />
        <WhytoJoin />
        <Footer />
      </screenPadding.Provider>
    </div>
  );
}

export default App;
export { screenPadding };
