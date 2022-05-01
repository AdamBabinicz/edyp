import React from "react";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Wrapper from "./components/Wrapper";
import Branding from "./components/Branding";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Work from "./components/Work";
import Footer from "./components/Footer";
import CookieConsent from "react-cookie-consent";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Skill />
      <Wrapper />
      <Branding />
      <Testimonials />
      <Blog />
      <Work />
      <Footer />
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
};

export default App;
