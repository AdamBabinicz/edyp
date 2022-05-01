import React from "react";
import {
  GiDualityMask,
  GiColumnVase,
  GiGreekTemple,
  GiIonicColumn,
  GiLyre,
} from "react-icons/gi";

const Skill = () => {
  const data = [
    {
      title: "Wymogi tragedii antycznej",
      desc: "Utwór został podzielony według tradycyjnego schematu: prologos (wprowadzenie w akcję), parodos (wejście chóru), epeisodiony (jednostka kompozycyjna tragedii – monolog albo dialog aktorów) i stasimony (pieśni chóru komentujące zdarzenia z wcześniejszej sceny), exodos (wyjście chóru).",
    },
  ];

  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div className="progress-done" style={{ opacity: 1, width: `${done}` }}>
          <h4>{title}</h4>
          <h4>{done}</h4>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="skill mtop">
        <div className="container flexSB">
          {data.map((value) => {
            return (
              <div className="left row">
                <h3 className="title">{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            );
          })}
          <div className="right row">
            <Progress done={<GiDualityMask />} title="Zasada trzech jedności" />
            <Progress done={<GiColumnVase />} title="Zasada decorum" />
            <Progress done={<GiLyre />} title="Wystąpienie chóru" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
