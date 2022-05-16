import React from "react";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="App">
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
