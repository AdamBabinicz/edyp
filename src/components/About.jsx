import React, { useState } from "react";
import Modal from "../components/Portal/Modal";

const About = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const data = [
    {
      id: 1,
      cover: "./assets/8.png",
      title: "Król Edyp (Oιδίπoυς τύραννoς)",
      category: "Tragedia",
      desc: "Tragedia grecka napisana ok. 427 p.n.e. przez Sofoklesa. Obok innych dwóch sztuk Sofoklesa – Edypa w Kolonie i Antygony należy do tak zwanego cyklu Tebańskiego. Tragedia przedstawia bezsilność wobec nieodgadnionych praw losu. Ukazuje historię Edypa, człowieka próbującego oszukać przeznaczenie, chcącego żyć spokojnie, w zgodzie ze światem. Nad Edypem ciąży klątwa, od której nie da się uwolnić. Kazirodztwo i ojcobójstwo są niewybaczalnymi przewinieniami. Piętno pozostaje także na dzieciach (rodzeństwie) Edypa. Sofoklesa do napisania sztuki zainspirowały ówczesne wydarzenia polityczne, a zwłaszcza straszliwa zaraza, jaka dotknęła Ateny na początku wojny peloponeskiej. Prototypem postaci Edypa mógł być Perykles, wielki przywódca Aten należący jednak do rodu Alkmeonidów, który był przeklęty za dopuszczenie się tzw. „Zmazy kylońskiej”.",
    },
  ];

  return (
    <>
      <section className="about" id="tragedia">
        <div className="container flex">
          {data.map((value) => {
            return (
              <>
                <div className="left row">
                  <img src={value.cover} alt="..." />
                </div>
                <div className="right row">
                  <span className="baget">{value.category}</span>
                  <h2>{value.title}</h2>
                  <p>{value.desc}</p>
                  <button className="primary-btn" onClick={() => Toggle()}>
                    Czytaj
                  </button>
                </div>
                <Modal show={modal} close={Toggle} title="Biografia">
                  <p>
                    Sofokles jest autorem ok. 123 sztuk, co najmniej 18 razy
                    zwyciężał w konkursach na najlepszą tragedię. Pierwsze
                    zwycięstwo odniósł w 468 r. p.n.e. rywalizując z
                    Ajschylosem. Do naszych czasów zachowało się zaledwie 7
                    tragedii: Ajas (prawdopodobnie najwcześniejsza), Antygona
                    (wyst. ok. 441 r. p.n.e.), Król Edyp, Trachinki (429 r.
                    p.n.e.), Elektra (powst. ok. 418-410 r. p.n.e.), Filoktet
                    (409 r. p.n.e.), Edyp w Kolonos (wyst. 401 r. p.n.e. - już
                    po śmierci autora).
                  </p>
                  <br />
                  <p>
                    <em>
                      www.bryk.pl/lektury/sofokles/krol-edyp.biografia-autora
                    </em>
                  </p>
                </Modal>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
