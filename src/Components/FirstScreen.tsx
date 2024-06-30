import React from "react";

export const First_Screen = () => {
  return (
    <div className="first_screen" id="first">
      <div className="content">
        {/* <h1>
          <span className="orange">ОПАЛБУКИ В АРЕНДУ,</span> ПРОДАЖА
          МЕТАЛЛОПPАКАТА, АРМАТУРА
        </h1> */}
          <h1>
          <span className="orange">МОНОЛИТНОЕ ОБОРУДОВАНИЕ </span>
           ДЛЯ СТРОИТЕЛЬСТВА ОБЪЕКТОВ
        </h1>
        <p>
          <span className="orange">ОПАЛУБКА КРУПНОЩИТОВАЯ, МЕЛКОЩИТОВАЯ</span>,
          УГЛЫ ВНУТРЕННИЕ, ЛЕСА ФАСАДНЫЕ, ЛЕСА МОНОЛИТНЫЕ, СТРУБЦИНЫ - ДОМКРАТЫ
          СТРОИТЕЛЬНЫЕ, ДВУТАВРОВАЯ БАЛКА, МЕТАЛЛОПРОКАТ И АРМАТУРА В
          АССОРТИМЕНТЕ.
        </p>
        <div className="buttons">
            <div className="button v1">
                <a>ЦЕНЫ УЗНАТЬ</a>
            </div>
            <div className="button v2">
                <a>КОНСУЛЬТАЦИЯ</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default First_Screen;
