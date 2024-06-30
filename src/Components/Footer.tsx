import React from "react";
// import footer_L from "../Images/Footer_web.png";
// import footer_S from "../Images/Footer_mobile.png";

export const Footer = () => {
  return (
    <div className="footer" >
      {/* <img src={footer_L}/> */}
      <div className="footer_content">
        <p className="footer_title">Наши контакты</p>
        <div className="contact_content">
          <a>+70000000000</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
