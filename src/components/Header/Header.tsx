import styles from "./Header.module.css";
import Hamburger from "hamburger-react";

import React, { useState, useEffect } from "react";

interface HeaderProps {
  scrolled: boolean;
  homeRef: React.RefObject<HTMLDivElement | null>;
  aboutRef: React.RefObject<HTMLDivElement | null>;
  servicesRef: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}

function Header({
  scrolled,
  homeRef,
  aboutRef,
  servicesRef,
  scrollToSection,
}: HeaderProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={styles.header + " " + (scrolled ? styles.scrolled : "")}>
      <h1>Policar</h1>
      <div className={styles.hamburger}>
        <Hamburger size={25} color="white" toggled={open} toggle={setOpen} />
        {
          <nav
            className={`${styles.navHamburger} ${open ? styles.active : ""}`}
          >
            <ul>
              <li>
                <a
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(homeRef as any);
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(aboutRef as any);
                  }}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setOpen(false);
                    scrollToSection(servicesRef as any);
                  }}
                >
                  Services
                </a>
              </li>
            </ul>
          </nav>
        }
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a onClick={() => scrollToSection(homeRef as any)}>Inicio</a>
          </li>
          <li>
            <a onClick={() => scrollToSection(aboutRef as any)}>Sobre</a>
          </li>
          <li>
            <a onClick={() => scrollToSection(servicesRef as any)}>Services</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
