import React, { useState } from "react";
import data from "./data";

const Categories = ({ items }) => {
  console.log(items, typeof items);
  return (
    <>
      <div className="section-center">
        {items.map((item) => {
          const { id, title, category, price, img, desc } = item;
          return (
            <article className="menu-item" key={id}>
              <img src={img} alt={title} />
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
