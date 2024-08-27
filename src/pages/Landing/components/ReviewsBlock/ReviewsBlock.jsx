import React, { useState, useEffect } from "react";
import "./ReviewsBlock.styles.scss";
import Client1 from "@assets/images/clients/review_client1.png";
import Client2 from "@assets/images/clients/review_client2.png";
import Client3 from "@assets/images/clients/review_client3.png";
import Client4 from "@assets/images/clients/review_client4.png";
import { ReactComponent as NextArrowIcon } from "@assets/icons/next_arrow_green.svg";
import { ReactComponent as QuoteIcon } from "@assets/icons/quote.svg";
import CubeElement from "@assets/elements/cube.png";
import ReviewDocument1 from "@assets/images/reviews/review1.png";
import ReviewDocument2 from "@assets/images/reviews/review2.png";
import ReviewDocument3 from "@assets/images/reviews/review3.png";
import ReviewDocument4 from "@assets/images/reviews/review4.png";
import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";
import { useSwipeable } from "react-swipeable";
import { useBlockScrolling } from "@hook/scrolling";

const reviews = [
  {
    image: Client1,
    text: 'От лица ООО "НДВ-Комплект" выражаю благодарность ООО "Веон-консалт" за проведенный работы над сайтом. В ходе совместной работы сотрудники проявили профессионализм, компетентность и вовлеченность...',
    document: ReviewDocument1,
  },
  {
    image: Client2,
    text: "Выражаем благодарность студии разработки RIZOFT за качественную и своевременную сдачу поставленных задач. Работаем с вышеуказанной компанией уже более двух лет. Всегда чутко относятся ко всем просьбам...",
    document: ReviewDocument2,
  },
  {
    image: Client3,
    text: "We thank the RIZOFT team for a fruiful and pleasent cooperation. Your team has done a great job of creating mobile application for our internal use from scratch and before including the product in our business process - clearly, quickly, in accordance with the terms of reference...",
    document: ReviewDocument3,
  },
  {
    image: Client4,
    text: "Сотрудничаем с компанией RIZOFT уже долгое время: команда показывает себя исключительно с хорошей стороны. Всегда со знанием дела подходят к выполнению поставленных задач, работа сдается в срок и главное качетсвенно...",
    document: ReviewDocument4,
  },
];

const ReviewsBlock = () => {
  const [startIndex, setStartIndex] = useState(1);
  const [selectedReview, setSelectedReview] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width > 1280) {
        setItemsToShow(3);
      } else if (width > 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };

    updateItemsToShow();

    window.addEventListener("resize", updateItemsToShow);
    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const nextReviews = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setAnimate(true);
  };

  const displayedReviews = Array.from({ length: itemsToShow }, (_, index) => {
    const reviewIndex = (startIndex + index) % reviews.length;
    return reviews[reviewIndex];
  });

  const handleReviewClick = (review) => {
    setSelectedReview(review);
  };

  const closeReview = () => {
    setSelectedReview(null);
  };

  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setAnimate(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [animate]);

  useBlockScrolling(selectedReview);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextReviews,
  });

  return (
    <div className="reviews-block" id="reviews">
      <h2 className="title" data-aos="fade-right">
        Отзывы
      </h2>
      <div className="reviews-container" data-aos="fade-up">
        <div className="reviews-list" {...swipeHandlers}>
          {displayedReviews.map((review, index) => (
            <div key={index + 1} className={`item ${animate ? "animate" : ""}`}>
              <div className="image-container">
                <img
                  src={review.image}
                  alt={`Отзыв ${index + 1}`}
                  className="image"
                />
              </div>
              <QuoteIcon className="quote" />
              <p className="text">{review.text}</p>
              <button
                className="learn-more"
                onClick={() => handleReviewClick(review)}
              >
                Узнать подробнее
              </button>
            </div>
          ))}
        </div>

        <NextArrowIcon className="next-button scaled" onClick={nextReviews} />
      </div>

      {selectedReview && (
        <div className="overlay" onClick={closeReview}>
          <div className="modal">
            <div className="image-container" onClick={closeReview}>
              <img
                src={selectedReview.document}
                alt="Review's document"
                className="review-document"
              />
              <CloseIcon
                className="close-button scaled"
                onClick={closeReview}
              />
            </div>
          </div>
        </div>
      )}

      <img src={CubeElement} alt="Cube" className="top-cube no-select" />
      <img
        src={CubeElement}
        alt="Cube"
        className="bottom-cube no-select cube"
      />
    </div>
  );
};

export default ReviewsBlock;
