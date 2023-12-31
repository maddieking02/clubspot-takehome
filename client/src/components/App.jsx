import React from "react";
import Calendar from "./Calendar";
import Image from "./Image";

const App = () => {
  return (
    <div className="app-contain flex-align-content">
      <div className="component-contain">
        <Image />
        <Calendar />
      </div>
    </div>
  )
}

export default App;