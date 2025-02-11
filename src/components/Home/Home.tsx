import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
interface HomeProps {
  homeRef: React.RefObject<HTMLDivElement | null>;
}

function Home({ homeRef }: HomeProps) {
  return (
    <section className={styles.home} ref={homeRef}>
      <h2>Precisa de ajuda com o seu veículo?</h2>
      <a>
        <FontAwesomeIcon icon={faWhatsapp} />
        FALE CONOSCO
      </a>
    </section>
  );
}

export default Home;
