import React from "react";

const Branding = () => {
  const data = [
    {
      cover: "./assets/25.jpg",
    },
    {
      cover: "./assets/23.jpg",
    },
    {
      cover: "./assets/22.jpg",
    },
    {
      cover: "./assets/24.jpg",
    },
  ];

  return (
    <>
      <section className="branding">
        <div className="container grid2">
          {data.map((val) => {
            return (
              <div className="box">
                <img src={val.cover} alt="..." />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Branding;
