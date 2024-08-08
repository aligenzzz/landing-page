import React, { useState } from "react";
import "./CasesBlock.styles.scss";
import { ReactComponent as ArrowIcon } from "@assets/icons/next_arrow.svg";
import { Case } from "./components";
import CaseImage from "@assets/images/case.png";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useSwipeable } from "react-swipeable";

const cases = [
  {
    name: "Кейс 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.",
    image: CaseImage,
    rating: "5",
    age: "17 +",
    category: "Автомобили",
    gradient: "#6eec4e",
  },
  {
    name: "Кейс 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.",
    image: CaseImage,
    rating: "4",
    age: "16 +",
    category: "Автомобили",
    gradient: "#77dd77",
  },
  {
    name: "Кейс 3",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.",
    image: CaseImage,
    rating: "5",
    age: "12 +",
    category: "Автомобили",
    gradient: "#31aa12",
  },
  {
    name: "Кейс 4",
    description:
      "Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.Lorem ipsum dolor sit amet consectetur. Cras molestie scelerisque ornare aliquam nisl id amet dolor non.",
    image: CaseImage,
    rating: "3",
    age: "14 +",
    category: "Автомобили",
    gradient: "#228b22",
  },
];

const CasesBlock = () => {
  const [activeCase, setActiveCase] = useState(0);

  const handleNext = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
  });

  return (
    <div className="cases-block" data-aos="fade-right">
      <div className="vertical-nav">
        {cases.map((_, index) => (
          <div
            key={index + 1}
            className={`nav-item ${activeCase === index ? "active" : ""}`}
          >
            {`0${index + 1}`}
          </div>
        ))}
      </div>
      <div
        className="content"
        style={{ "--gradient-color": cases[activeCase].gradient }}
      >
        <div className="case-item">
          <h2 className="title">Кейсы</h2>
          <div className="case-container" {...swipeHandlers}>
            <SwitchTransition>
              <CSSTransition key={activeCase} timeout={600} classNames="case">
                <Case caseData={cases[activeCase]} />
              </CSSTransition>
            </SwitchTransition>
            <ArrowIcon className="arrow scaled" onClick={handleNext} />
          </div>
        </div>
        <div className="case-footer">
          <div className="status-line">
            {cases.map((_, index) => (
              <div
                key={index + 1}
                className={`line ${activeCase === index ? "active" : ""}`}
              ></div>
            ))}
          </div>

          <div className="circles">
            {cases.map((_, index) => (
              <div
                key={index + 1}
                className={`circle ${activeCase === index ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasesBlock;
