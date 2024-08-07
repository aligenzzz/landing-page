import React from "react";
import { ReactComponent as CheckIcon } from "@assets/icons/check.svg";
import { ReactComponent as CalendarIcon } from "@assets/icons/calendar.svg";
import { ReactComponent as CardIcon } from "@assets/icons/card.svg";
import { ReactComponent as SupportIcon } from "@assets/icons/support.svg";
import "./AdvantagesBlock.styles.scss";

const AdvantagesBlock = () => {
  return (
    <div className="advantages-block">
      <h1 className="title" data-aos="fade-up">
        Что получают наши заказчики
      </h1>
      <div className="content">
        <div className="item" data-aos="fade-right">
          <CheckIcon />
          <p className="item-title">Регулярная отчётность</p>
          <p className="item-text">
            Мы предоставляем два типа отчётов по проделанной работе для наших
            клиентов: еженедельные и ежемесячные. Регулярно проводим видеозвонки
            с заказчиками, чтобы продемонстрировать промежуточные результаты
            проекта и обсудить дальнейшие шаги.
          </p>
        </div>
        <div className="item" data-aos="fade-left">
          <CalendarIcon />
          <p className="item-title">Гарантия на проект — 6 месяцев</p>
          <p className="item-text">
            Предоставляем шестимесячную гарантию на наш проект. Если клиент
            обнаружит ошибку, мы обязуемся устранить её в течение 3 дней. Если
            исправление займёт больше времени, гарантийный срок будет продлён на
            период, необходимый для решения проблемы.
          </p>
        </div>
        <div className="item" data-aos="fade-right">
          <CardIcon />
          <p className="item-title">Гибкая система оплаты</p>
          <p className="item-text">
            Формат оплаты обсуждается индивидуально с каждым клиентом. Обычно
            мы работаем на условиях частичной предоплаты: клиент оплачивает 50%
            от стоимости каждого этапа до его начала и 50% — после завершения
            и приёма работ.
          </p>
        </div>
        <div className="item" data-aos="fade-left">
          <SupportIcon />
          <p className="item-title">Техподдержка и развитие продукта</p>
          <p className="item-text">
            Предлагаем различные варианты поддержки и развития вашего продукта:
            <br />
            <br />
            <strong>Постепенные доработки:</strong> Вносим улучшения в сервис
            или предоставляем регулярную техподдержку с круглосуточным
            мониторингом. Оплата производится по факту выполненных работ в конце
            месяца.
            <br />
            <br />
            <strong>Выкуп команды:</strong> Мы формируем специализированную
            команду для вашего проекта, которая работает исключительно над
            вашими задачами без отвлечения на другие проекты.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesBlock;
