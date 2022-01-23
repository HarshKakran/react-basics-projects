import React, { useState } from "react";
import data from "./data";
function App() {
  const [loremText, setLoremText] = useState([]);
  const [paras, setParas] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(paras);

    if (amount <= 0) {
      amount = 1;
    } else if (amount > 8) {
      amount = 8;
    }

    setLoremText(data.slice(0, amount));
  };

  return (
    <>
      <section className="section-center" onSubmit={handleSubmit}>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form action="" className="lorem-form">
          <label for="amount">paragraphs: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={paras}
            onChange={(e) => setParas(e.target.value)}
          />
          <button className="btn" type="submit">
            generate
          </button>
        </form>
        {/* <article className="lorem-text">{loremText.join("\n\n")}</article> */}
        <article className="lorem-text">
          {loremText.map((text, index) => {
            return <p key={index}>{text}</p>;
          })}
        </article>
      </section>
    </>
  );
}

export default App;
