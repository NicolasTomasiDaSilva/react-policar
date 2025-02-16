import styles from "./Header.module.css";
import Hamburger from "hamburger-react";

import React, { useState, useEffect } from "react";

interface section {
  title: string;
  ref: React.RefObject<HTMLDivElement | null>;
}

type sections = {
  [key: string]: section;
};

interface HeaderProps {
  scrolled: boolean;

  sections: sections;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}

function Header({
  scrolled,

  scrollToSection,
  sections,
}: HeaderProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={styles.header + " " + (scrolled ? styles.scrolled : "")}>
      <img className={styles.logo} src="./src/assets/logo.png" alt="Policar" />
      <div className={styles.hamburger}>
        <Hamburger size={25} color="white" toggled={open} toggle={setOpen} />
        {
          <nav
            className={`${styles.navHamburger} ${open ? styles.active : ""}`}
          >
            <ul>
              {Object.entries(sections).map(([key, value]) => (
                <li>
                  <a
                    key={key}
                    onClick={() => {
                      setOpen(false);
                      scrollToSection(value.ref as any);
                    }}
                  >
                    {value.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        }
      </div>

      <nav className={styles.nav}>
        <ul>
          {Object.entries(sections).map(([key, value]) => (
            <li>
              <a key={key} onClick={() => scrollToSection(value.ref as any)}>
                {value.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
