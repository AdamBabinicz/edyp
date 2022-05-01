import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Wrapper = () => {
  return (
    <>
      <section className="wrapper flexSB">
        <div className="container">
          <h3>Sztuka teatralna</h3>
          <BsFillPlayFill />
          <a
            href="//www.youtube.com/watch?v=KVOY6r8LpNw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="outline-btn">Posłuchaj</button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Wrapper;
