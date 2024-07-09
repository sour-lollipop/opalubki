import React from "react";
import img from "../Images/contents/secondScreen.jpg";
export const Second_Screen = () => {
  const handleClick = () => {
    const phoneNumber = '87072041208'; // замените на ваш номер телефона
    const url = `https://wa.me/${phoneNumber}`;
    const href = `https://wa.me/87072041208`;
    window.open(url, '_blank');
  };
  return (
    <div className="second_screen" id="second">
      <div className="content">
        <div className="leftC">
          <h5>О нас</h5>
          <h2>Компания «OPALUBKOFF.KZ»</h2>
          <p>
            Предлагаем профессиональное оборудование для монолитного
            строительства различных объектов по всему Казахстану. Наш
            колоссальный опыт на рынке строительства и 
            высококачественные материалы, используемые в строительстве,
            положительно зарекомендовали себя как в лице наших партнеров так и в
            высоком уровне качества строительства объектов. Квалифицированные
            специалисты не только помогут с выбором продукции, но и предложат
            самые оптимальные решения, которые позволят Вам сэкономить средства
            и время в реализации проектов. Мы сопровождаем своих Клиентов полным
            спектром услуг до конечного результата.
          </p>{" "}
          <div className="button v1" onClick={handleClick}>
            <a>ОСТАВИТЬ ЗАЯВКУ</a>
          </div>
        </div>

        <img src={img} />
      </div>
    </div>
  );
};

export default Second_Screen;
