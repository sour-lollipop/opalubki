import React from "react";
import logo from "./logo.svg";

import { Header } from "./Components/Header";
import First_Screen from "./Components/FirstScreen";
import Second_Screen from "./Components/SecondScreen";
import Third_Screen from "./Components/ThirdScreen";
function App() {
  return (
    <>
      <div className="App">
       <Header />
      <First_Screen/>
      <Second_Screen/>
      <Third_Screen/>
      </div>
    </>
  );
}

export default App;
