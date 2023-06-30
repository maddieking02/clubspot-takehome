import React from "react";
import Calendar from "./Calendar";
import Image from "./Image";

const App = () => {
  return (
    <div className="app-contain flex-align-content" style={{ border: "2px solid black" }}>
      <div className="flex-align-content" style={{ border: "2px solid pink" }}>
        <Image />
        <Calendar />
      </div>
    </div>
  )
}

export default App;