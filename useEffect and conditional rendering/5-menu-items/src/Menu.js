import React, { useState } from "react";
import Categories from "./Categories";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];
console.log(`allCategories: ${allCategories}`);
const Menu = () => {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
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
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className="filter-btn"
                onClick={() => filterItems(category)}
              >
                {category}
              </button>
            );
          })}
          {/* <button
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
          </button> */}
        </div>
        <Categories items={items}></Categories>
      </section>
    </>
  );
};

export default Menu;
