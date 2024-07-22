import React from "react";
import logo from "./logo.svg";
import { BsWhatsapp } from "react-icons/bs";

import { Header } from "./Components/Header";
import First_Screen from "./Components/FirstScreen";
import Second_Screen from "./Components/SecondScreen";
import Third_Screen from "./Components/ThirdScreen";
import Footer from "./Components/Footer";
import './styles/index.scss';

function App() {
  const handleClick = () => {
    const phoneNumber = '87072041208'; // замените на ваш номер телефона
    const url = `https://wa.me/${phoneNumber}`;
    const href = `https://wa.me/87072041208`;
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="App">
       <Header />
      <First_Screen/>
      <Second_Screen/>
      <Third_Screen/>
      <Footer/>
      <button className="pulse-button" onClick={handleClick}>
        <BsWhatsapp className="pulse-button__icon" color="white"/>

        <span className="pulse-button__text">WhatsApp</span>

        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
        <span className="pulse-button__rings"></span>
      </button>
      </div>
    </>
  );
}

export default App;
