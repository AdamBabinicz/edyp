import React, { useState } from "react";
import data from "./data";

const Portfolio = () => {
  const [item, setItem] = useState(data);

  const filterItem = (cateItem) => {
    const updatedItem = data.filter((curElem) => {
      return curElem.category === cateItem;
    });
    setItem(updatedItem);
  };

  return (
    <>
      <section className="portfolio mtop" id="dzieło">
        <div className="container">
          <div className="head flexSB">
            <div className="left">
              <span className="baget">
                ur. ok. 496 p.n.e. w Kolonos, zm. 406 p.n.e. w Atenach
              </span>
              <h2 className="title">Sofokles i jego utwór</h2>
            </div>
            <div className="links">
              <ul className="flexSB">
                <li className="active" onClick={() => setItem(data)}>
                  Razem
                </li>
                <li onClick={() => filterItem("Jokasta")}>Jokasta</li>
                <li onClick={() => filterItem("Edyp")}>Edyp</li>
                <li onClick={() => filterItem("Wyrocznia")}>Wyrocznia</li>
                <li onClick={() => filterItem("Autor")}>Sofokles</li>
              </ul>
            </div>
          </div>
          <div className="content grid mtop">
            {item.map((elem) => {
              const { cover, title, category } = elem;

              return (
                <div className="box">
                  <div className="img">
                    <img src={cover} alt="..." />
                  </div>
                  <div className="overlay">
                    <h3>{title}</h3>
                    <p>{category}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
