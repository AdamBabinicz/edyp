import React, { useState } from "react";
import Modal from "../components/Portal/Modal";

const Work = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <section className="work" id="sofokles">
        <div className="container">
          <h3>Sofokles</h3>
          <button className="primary-btn" onClick={() => Toggle()}>
            Czytaj
          </button>
        </div>
        <Modal show={modal} close={Toggle} title="Pojęcia związane z tragedią">
          <p>
            Tragizm - cecha świata, w którym rozgrywa się tragedia. Według
            tragików i współczesnych filozofów tragedia dotyka człowieka w
            momencie narodzin - musi on podjąć los, który przypadł mu w udziale.
            Ma do dyspozycji tylko cząstkę czasu i cząstkę wiedzy - jest
            śmiertelny, jego działania są kalekie, niepełne, ciąży nad nim
            przypadek, przymus, konieczność. Naprawdę tragedia występuje tam,
            gdzie w sieć losu zostaje uwikłana jednostka wybitna, dumna,
            niepodległa, pragnąca rzucić wyzwanie przeznaczeniu (jest tak w
            wypadku Antygony, Kreona, Edypa).
          </p>
          <br />
          <p>
            <em>
              www.bryk.pl/lektury/sofokles/krol-edyp.narodziny-teatru-i-dramatu-greckiego
            </em>
          </p>
        </Modal>
      </section>
    </>
  );
};

export default Work;
