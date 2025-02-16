import "./reset.css";
import "./index.css";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "./components/Header/Header.tsx";
import Home from "./components/Home/Home.tsx";
import About from "./components/About/About.tsx";
import Services from "./components/Services/Services.tsx";
import React, { useState, useRef } from "react";
import Contact from "./components/Contact/Contact.tsx";

function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const sections = {
    home: {
      title: "Início",
      ref: homeRef,
    },
    about: {
      title: "Sobre",
      ref: aboutRef,
    },
    services: {
      title: "Serviços",
      ref: servicesRef,
    },
    contact: {
      title: "Contato",
      ref: contactRef,
    },
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = (values: any) => {
    values.scrollTop > 50 ? setScrolled(true) : setScrolled(false);
  };

  return (
    <div>
      <Scrollbars
        style={{ height: "100vh" }} // Ajuste a altura conforme necessário
        autoHide // Isso faz com que a scrollbar suma automaticamente quando não estiver rolando
        autoHideTimeout={1000} // Tempo em milissegundos para a scrollbar desaparecer após parar de rolar
        autoHideDuration={200} // Tempo em milissegundos para a transição de desaparecimento
        onScrollFrame={handleScroll}
      >
        <Header
          scrolled={scrolled}
          scrollToSection={scrollToSection}
          sections={sections}
        />
        <Home homeRef={homeRef} />
        <About aboutRef={aboutRef} />
        <Services servicesRef={servicesRef} />
        <Contact contactRef={contactRef} />
      </Scrollbars>
    </div>
  );
}

export default App;
