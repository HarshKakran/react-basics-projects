import React, { useState } from "react";
import Categories from "./Categories";
import data from "./data";

const Menu = () => {
  const [category, setCategory] = useState("all");
  const [items, setItems] = useState(data);
  //   const [isBreakfast, setIsBreakfast] = useState(false);
  //   const [isLunch, setIsLunch] = useState(false);
  //   const [isShakes, setIsShakes] = useState(false);
  const filterItems = (category) => {
    if (category === "all") {
      setItems(data);
    } else {
      const newData = data.filter((item) => item.category === category);
      setItems(newData);
    }
  };
  return (
    <>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn" onClick={() => filterItems("all")}>
            all
          </button>
          <button
            className="filter-btn"
            onClick={() => filterItems("breakfast")}
          >
            breakfast
          </button>
          <button className="filter-btn" onClick={() => filterItems("lunch")}>
            lunch
          </button>
          <button className="filter-btn" onClick={() => filterItems("shakes")}>
            shakes
          </button>
        </div>
        <Categories items={items}></Categories>
      </section>
    </>
  );
};

export default Menu;
