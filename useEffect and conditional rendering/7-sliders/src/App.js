import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [active]);

  const selectClass = (index) => {
    if (active === index) {
      return "activeSlide";
    }
    if (index === active - 1 || (active === 0 && index === people.length - 1)) {
      return "lastSlide";
    }
    return "nextSlide";
  };

  const prevSlide = () => {
    setActive((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return people.length - 1;
    });
  };
  const nextSlide = () => {
    setActive((prev) => {
      if (prev < people.length - 1) return prev + 1;
      return 0;
    });
  };

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>Reviews</h2>
        </div>
        <div className="section-center">
          {people.map((person, index) => {
            const { id, name, image, quote, title } = person;
            console.log(index);
            return (
              <article key={id} className={selectClass(index)}>
                <img src={image} alt={name} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon"></FaQuoteRight>
              </article>
            );
          })}
          <button className="prev" onClick={() => prevSlide()}>
            <FiChevronLeft></FiChevronLeft>
          </button>
          <button className="next" onClick={() => nextSlide()}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
