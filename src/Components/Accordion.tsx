// src/components/Accordion.js
import React, { useState, ReactNode } from "react";

interface AccordionProps {
  title?: string;
  content?: string;
  right?: boolean;
  image?: string;
  children?: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  right,
  image,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    const phoneNumber = '87072041208'; // замените на ваш номер телефона
    const url = `https://wa.me/${phoneNumber}`;
    const href = `https://wa.me/87072041208`;
    window.open(url, '_blank');
  };
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
      </div>
      {children ? (
        <div
        className={`accordion-content ${isActive ? "active" : ""} children`}
      >
        {children}
        </div>
      ) : (
        <div
          className={`accordion-content ${isActive ? "active" : ""} ${
            right ? "right" : "left"
          }`}
        >
          {right ? (
            <>
              <p>{content}</p>
              <div className="cont">
                {" "}
                <img src={image} alt="Accordion content" />
                <div className="buttonv v1" onClick={handleClick}>ОСТАВИТЬ ЗАЯВКУ</div>
              </div>
            </>
          ) : (
            <>
              <div className="cont">
                {" "}
                <img src={image} alt="Accordion content" />
                <div className="buttonv v1 " onClick={handleClick}>ОСТАВИТЬ ЗАЯВКУ</div>
              </div>
              <p>{content}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
