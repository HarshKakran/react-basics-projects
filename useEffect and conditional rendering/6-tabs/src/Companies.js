import React from "react";

export default function Companies({ allCompanies, activeBtn, setActiveBtn }) {
  return (
    <div className="btn-container">
      {allCompanies.map((company, index) => {
        const x = activeBtn === company ? "active-btn" : "false";
        return (
          <button
            key={index}
            className={`job-btn ${x}`}
            onClick={() => setActiveBtn(company)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
}
