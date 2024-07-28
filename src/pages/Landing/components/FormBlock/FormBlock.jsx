import React, { useState } from "react";
import { ReactComponent as ClipIcon } from "@assets/icons/clip.svg";
import "./FormBlock.styles.scss";

const radioOptions = [
  { value: "email", label: "По Email" },
  { value: "phone", label: "По телефону" },
  { value: "telegram", label: "В Telegram" },
  { value: "viber", label: "В Viber" },
  { value: "whatsapp", label: "В WhatsAPP" },
];

const FormBlock = () => {
  // eslint-disable-next-line
  const [selectedFile, setSelectedFile] = useState(null);

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

  return (
    <div className="form-block">
      <h2 className="title">Оставьте заявку</h2>
      <p className="subtitle">
        или свяжитесь с нами по телефону<br></br>
        <a href="tel:+375293134627">+375 29 313-46-27</a>
      </p>

      <div className="form">
        <div className="input-container">
          <div className="item">
            <p>Ваше имя</p>
            <input placeholder="Ваше имя" />
          </div>
          <div className="item">
            <p>Телефон или Email</p>
            <input placeholder="Телефон или email" />
          </div>
        </div>

        <div className="file-container">
          <ClipIcon className="clip-icon" onClick={handleClick} />
          <p>
            Бриф/ТЗ/Ваши мысли <span>(необязательно)</span>
          </p>
        </div>

        <div className="select-container">
          <p>Как удобнее всего с вами связаться</p>
          <div className="radio-container">
            {radioOptions.map((option) => (
              <label key={option.value} className="radio-label">
                <input type="radio" name="options" value={option.value} />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div className="button-container">
          <button>Отправить</button>
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
