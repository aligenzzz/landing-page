import React, { useState } from "react";
import { ReactComponent as ClipIcon } from "@assets/icons/clip.svg";
import "./FormBlock.styles.scss";
import { useScroll } from "@store/ScrollContext";
import RoundedButton from "@components/shared/RoundedButton";

const radioOptions = [
  { value: "email", label: "По Email" },
  { value: "phone", label: "По телефону" },
  { value: "telegram", label: "В Telegram" },
  { value: "viber", label: "В Viber" },
  { value: "whatsapp", label: "В WhatsAPP" },
];

const FormBlock = () => {
  const targetRef = useScroll();
  // eslint-disable-next-line
  const [selectedFile, setSelectedFile] = useState(null);
  const [contactMethod, setContactMethod] = useState(radioOptions);

  const handleClick = async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
          {
            description: "All Files",
            accept: {
              "*/*": [".pdf", ".docx"],
            },
          },
        ],
      });
      const file = await fileHandle.getFile();
      setSelectedFile(file);
    } catch (err) {
      console.error("File selection canceled or failed", err);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
      setContactMethod(
        radioOptions.filter((option) => option.value === "email"),
      );
    } else if (/^\+?\d{9,12}$/.test(value)) {
      setContactMethod(
        radioOptions.filter((option) => option.value !== "email"),
      );
    } else {
      setContactMethod(radioOptions);
    }
  };

  return (
    <div className="form-block" ref={targetRef}>
      <h2 className="title" data-aos="fade-right">
        Оставьте заявку
      </h2>
      <p className="subtitle" data-aos="fade-up">
        или свяжитесь с нами по телефону<br></br>
        <a href="tel:+375293134627">+375 29 313-46-27</a>
      </p>

      <div className="form" data-aos="fade-up">
        <div className="input-container">
          <div className="item">
            <p>Ваше имя</p>
            <input placeholder="Ваше имя" />
          </div>
          <div className="item">
            <p>Телефон или Email</p>
            <input
              placeholder="Телефон или email"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="file-container">
          <ClipIcon className="clip-icon scaled" onClick={handleClick} />
          <p>
            Бриф/ТЗ/Ваши мысли <span>(необязательно)</span>
          </p>
        </div>

        <div className="select-container">
          <p>Как удобнее всего с вами связаться</p>
          <div className="radio-container">
            {contactMethod.map((option) => (
              <label key={option.value} className="radio-label">
                <input type="radio" name="options" value={option.value} />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div className="button-container">
          <RoundedButton text="Отправить" />
          <p>
            Заполняя данную форму, вы принимаете условия{" "}
            <a href="/landing-page">соглашения об использовании сайта</a> и
            соглашаетесь с{" "}
            <a href="/landing-page">
              правилами обработки и использования персональных данных
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;
