import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className={styles.home}>
      <h2>Precisa de ajuda com o seu veículo?</h2>
      <a>
        <FontAwesomeIcon icon={faWhatsapp} />
        FALE CONOSCO
      </a>
    </div>
  );
}

export default Home;
