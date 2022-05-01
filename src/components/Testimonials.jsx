import React from "react";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      desc: "Król Edyp to tragedia, w której autor pokazuje jak nieskuteczna jest walka człowieka ze swoim losem. Im bardziej Edyp stara się uciec od swego przeznaczenia, tym szybciej przybliża się do spełnienia przepowiedni wyroczni. Człowiek jest więc igraszką w rękach losu i bogów, poeta pokazuje jak nieskuteczna jest jego walka z przeznaczeniem. Tragedia Sofoklesa uświadamia również jak wielka i nieomylna jest wiedza wyroczni w Delfach. Przecież zarówno Edyp jak i Lajos, robili wszystko, by uniknąć przeznaczenia, a jednak swoim postępowaniem, krok po kroku, zbliżali się do jego spełnienia. Edyp ściągnął na siebie gniew bogów przez sam fakt swojego urodzenia, bo wyrocznia zabroniła Lajosowi mieć potomstwo, obraził bogów również swoją pychą (hybris), rozbudzoną w czasie śledztwa.",
      cover: "./assets/32.jpg",
      name: "Król Edyp i Sfinks",
      category: "www.bryk.pl/lektury/sofokles",
    },
  ];

  return (
    <>
      <section className="testimonials" id="problematyka">
        <div className="container flexSB">
          <div className="left row">
            <span className="baget">
              Prototypem postaci Edypa mógł być Perykles
            </span>
            <h3 className="title">Problematyka</h3>
          </div>
          <div className="right row">
            {data.map((val) => {
              return (
                <div className="box">
                  <p>{val.desc}</p>
                  <div className="details flex">
                    <div className="img">
                      <img src={val.cover} alt="..." />
                    </div>
                    <div className="name">
                      <h3>{val.name}</h3>
                      <p>{val.category}</p>
                    </div>
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

export default Testimonials;
