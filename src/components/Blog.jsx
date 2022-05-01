import React from "react";

const Blog = () => {
  const data = [
    {
      id: 1,
      cover: "./assets/56.jpg",
      title:
        "Edyp, oślepiony, zwraca się do Kreona, by ten wygnał go z miasta.",
      date: "Chce, by jego dzieciom los zaoszczędził tak straszliwych cierpień, jakie stały się jego udziałem.",
      name: "Wzywa też Kreona, by ten zaopiekował się jego córkami, Antygoną i Ismeną.",
    },
    {
      id: 2,
      cover: "./assets/57.jpg",
      title: "A więc bacząc na ostatni bytu ludzi kres i dolę,",
      date: "Aż bez cierpień i bez klęski krańców życia nie przebieży.",
      name: "Śmiertelnika tu żadnego zwać szczęśliwym nie należy,",
    },
    {
      id: 3,
      cover: "./assets/59.jpg",
      title:
        "Biada, już jawnem to, czegom pożądał, o słońce, niechbym już cię nie oglądał!",
      date: "z kim nie przystało - a swoich zabiłem.",
      name: "Życie mam, skąd nie przystoi, i żyłem, ",
    },
  ];

  return (
    <>
      <section className="blog" id="exodos">
        <div className="container">
          <span className="baget">
            ... z ręki losu lepsze niż ojcu przypadło tu życie
          </span>
          <h3 className="title">Exodos</h3>
          <div className="content grid mtop">
            {data.map((val) => {
              return (
                <div className="box">
                  <div className="box">
                    <img src={val.cover} alt="..." />
                    <h4>{val.title}</h4>
                    <span>
                      {val.name} {val.date}
                    </span>
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

export default Blog;

// To cytat słoweńskiego wspinacza Nejca Zaplotnika: "Kto szuka celu, poczuje pustkę, gdy go osiągnie, kto znajdzie ścieżkę, cel będzie zawsze nosił w sobie".
