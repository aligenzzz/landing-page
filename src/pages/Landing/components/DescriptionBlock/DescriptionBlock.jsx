import React from "react";
import "./DescriptionBlock.styles.scss";
import { ReactComponent as GraphTopElement } from "@assets/elements/graph_top.svg";
import { ReactComponent as GraphBottomElement } from "@assets/elements/graph_bottom.svg";

const DescriptionBlock = () => {
  return (
    <div className="description-block">
      <h2 className="title">Подход к разработке веб-приложений</h2>
      <p className="text">
        Мы действуем как расширение отделов разработки продуктов в
        технологических компаниях, обеспечивая удаленное пополнение штата. Наши
        междисциплинарные команды разработчиков постоянно сотрудничают с
        собственными отделами и постоянно совершенствуются, обеспечивая полную
        прозрачность процессов.
      </p>
      <div className="horizontal-line"></div>
      <h2 className="title">Наши возможности в сфере услуг веб-разработки</h2>
      <p className="text">
        Расширяя команды наших клиентов, мы обеспечиваем полный жизненный цикл
        разработки, включая UI/UX дизайн для собственных мобильных и
        веб-приложений, который помогает инновационным компаниям и признанным
        брендам достигать своих бизнес-целей.
      </p>

      <div className="vertical-block-container">
        <div className="vertical-block">
          <div className="word">SCRUM</div>
          <div className="line"></div>
          <div className="word">WATERFALL</div>
          <GraphTopElement className="graph-top" />
        </div>
      </div>

      <GraphBottomElement className="graph-bottom" />
    </div>
  );
};

export default DescriptionBlock;
