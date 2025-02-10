import styles from "./Header.module.css";
import Hamburger from "hamburger-react";

import React, { useState, useEffect } from "react";

interface HeaderProps {
  scrolled: boolean;
}

function Header({ scrolled }: HeaderProps) {
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
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </nav>
        }
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
