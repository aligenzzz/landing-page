import React, { useState } from "react";
import "./FormBlock.styles.scss";
import { ReactComponent as UploadIcon } from "@assets/icons/upload.svg";
import { ReactComponent as DashedElement } from "@assets/elements/dashed.svg";

const sections = {
  Platform: ["IOS", "Android", "Cross-Platform"],
  Device: ["Мобильное", "Smart TV", "Часы", "Планшет", "Другое"],
  Stage: [
    "Идея",
    "MVP",
    "Прототип/спецификация",
    "Продуманное решение",
    "Разработка приложения",
  ],
};

const FormBlock = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    Platform: "",
    Device: "",
    Stage: "",
  });
  // eslint-disable-next-line
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOptionClick = (section, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [section]: option,
    }));
  };

  const renderButtons = (section, options) => {
    return options.map((option) => (
      <div
        key={option}
        className={`radio-button ${selectedOptions[section] === option ? "active" : ""}`}
        onClick={() => handleOptionClick(section, option)}
      >
        {option}
      </div>
    ));
  };

  const renderSection = (section, options, number) => (
    <div className="column" key={section}>
      <p>
        {number}. {section}
      </p>
      <div className="button-group">{renderButtons(section, options)}</div>
    </div>
  );

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
      <h2 className="title">Архитектор проекта</h2>
      <div className="form">
        <div className="sections">
          {renderSection("Платформа", sections.Platform, 1)}
          {renderSection("Устройство", sections.Device, 2)}
        </div>
        <div className="sections">
          {renderSection("Этап", sections.Stage, 3)}
        </div>
        <div className="comment-section">
          <p className="name">4. Комментарий</p>
          <div className="container">
            <textarea
              className="comment-input"
              placeholder="Расскажите о проекте"
            />
            <div className="upload-container" onClick={handleClick}>
              <DashedElement className="dashed" />
              <div className="upload-content">
                <UploadIcon />
                <p className="label">Загрузите файл</p>
              </div>
            </div>
          </div>
          <div className="container">
            <button className="send-button">Отправить</button>
            <p className="button-text">
              Отправляя форму, Вы даете согласие на обработку своих персональных
              данных в соответствии с
              <span className="highlight"> политикой конфиденциальности</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBlock;
