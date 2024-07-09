import React from "react";
// import footer_L from "../Images/Footer_web.png";
// import footer_S from "../Images/Footer_mobile.png";

export const Footer = () => {
  return (
    <div className="footer" >
      {/* <img src={footer_L}/> */}
      <div className="footer_content">
        <p className="footer_title">Группа компаний «TOO OPALUBKOFF.KZ» 2023 © Аренда опалубки, продажа арматура в ассортименте, лес, струбцины, фанера, колонны в Алматы по выгодной цене </p>
        <div className="devoleper_content">
          <a href="t.me/Dossymkhanova_A">РАЗРАБОТКА САЙТА</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
