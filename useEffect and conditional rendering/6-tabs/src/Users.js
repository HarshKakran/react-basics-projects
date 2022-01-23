import React, { useState } from "react";
import Companies from "./Companies";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function Users({ users }) {
  const allCompanies = [...new Set(users.map((user) => user.company))];
  console.log(allCompanies[0]);
  const [activeBtn, setActiveBtn] = useState(allCompanies[0]);
  return (
    <div className="jobs-center">
      <Companies
        allCompanies={allCompanies}
        activeBtn={activeBtn}
        setActiveBtn={setActiveBtn}
      ></Companies>
      {users.map((user) => {
        const { id, dates, duties, company, order, title } = user;
        if (company === activeBtn) {
          return (
            <article key={id} className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight></FaAngleDoubleRight>
                    {duty}
                  </div>
                );
              })}
            </article>
          );
        }
      })}
    </div>
  );
}
