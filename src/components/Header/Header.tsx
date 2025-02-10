import styles from "./Header.module.css";

interface HeaderProps {
  scrolled: boolean;
}

function Header({ scrolled }: HeaderProps) {
  return (
    <header className={styles.header + " " + (scrolled ? styles.scrolled : "")}>
      <h1>Mecanica Policar</h1>
      <nav>
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
