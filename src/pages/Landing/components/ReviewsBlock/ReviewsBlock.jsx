import React, { useState, useEffect } from "react";
import "./ReviewsBlock.styles.scss";
import Client1 from "@assets/images/clients/client1.png";
import Client2 from "@assets/images/clients/client2.png";
import Client3 from "@assets/images/clients/client3.png";
import Client7 from "@assets/images/clients/client7.png";
import { ReactComponent as NextArrowIcon } from "@assets/icons/next_arrow_green.svg";
import { ReactComponent as QuoteIcon } from "@assets/icons/quote.svg";
import CubeElement from "@assets/elements/cube.png";
import ReviewDocument1 from "@assets/images/reviews/review1.png";
import ReviewDocument2 from "@assets/images/reviews/review2.png";
import ReviewDocument3 from "@assets/images/reviews/review3.png";
import ReviewDocument4 from "@assets/images/reviews/review4.png";
import { ReactComponent as CloseIcon } from "@assets/icons/close.svg";

const reviews = [
  {
    image: Client2,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  ",
    document: ReviewDocument1,
  },
  {
    image: Client7,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  ",
    document: ReviewDocument2,
  },
  {
    image: Client7,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  ",
    document: ReviewDocument3,
  },
  {
    image: Client1,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  ",
    document: ReviewDocument4,
  },
  {
    image: Client3,
    text: "Lorem ipsum dolor sit amet consectetur. Pulvinar neque tellus magna nisl felis vitae. Elit non nunc quam lorem praesent sit quis amet. At velit nunc tristique mauris ac ultricies faucibus dui semper.  ",
    document: ReviewDocument1,
  },
];

const ReviewsBlock = () => {
  const [startIndex, setStartIndex] = useState(1);
  const [selectedReview, setSelectedReview] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(3);

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
    const parallax = document.getElementById("parallax");
    const topCube = document.getElementById("topCube");
    const bottomCube = document.getElementById("bottomCube");
    const walk = { x: 50, y: 10 };

    const handleMouseMove = (e) => {
      const width = parallax.offsetWidth;
      const height = parallax.offsetHeight;

      const xWalk = Math.round((e.clientX / width / 2) * walk.x - walk.x / 2);
      const yWalk = Math.round((e.clientY / height / 2) * walk.y - walk.y / 2);

      topCube.style.transform = `translateX(${xWalk}px) translateY(${yWalk}px)`;
      bottomCube.style.transform = `translateX(${-xWalk}px) translateY(${-yWalk}px)`;
    };

    if (parallax) {
      parallax.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (parallax) {
        parallax.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="reviews-block" id="parallax">
      <h2 className="title">Отзывы</h2>
      <div className="reviews-container">
        {displayedReviews.map((review, index) => (
          <div
            key={index + 1}
            className="item"
            onClick={() => handleReviewClick(review)}
          >
            <div className="image-container">
              <img
                src={review.image}
                alt={`Отзыв ${index + 1}`}
                className="image"
              />
            </div>
            <QuoteIcon className="quote" />
            <p className="text">{review.text}</p>
          </div>
        ))}
        <NextArrowIcon className="next-button" onClick={nextReviews} />
      </div>

      {selectedReview && (
        <div className="overlay" onClick={closeReview}>
          <div className="modal">
            <div className="image-container">
              <img
                src={selectedReview.document}
                alt="Review's document"
                className="review-document"
              />
              <CloseIcon className="close-button" onClick={closeReview} />
            </div>
          </div>
        </div>
      )}

      <img
        src={CubeElement}
        alt="Cube"
        className="top-cube no-select"
        id="topCube"
      />
      <img
        src={CubeElement}
        alt="Cube"
        className="bottom-cube no-select"
        id="bottomCube"
      />
    </div>
  );
};

export default ReviewsBlock;
