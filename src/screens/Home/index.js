import React from "react";
import Slider from "../../components/Slider";
import About from "../../components/About";

import slides from "../../data/slider.json";

function Home() {
  return <div>
    <Slider slides={slides} />
    <About/>
    </div>
}

export default Home;
