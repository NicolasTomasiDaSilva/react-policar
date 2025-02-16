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
      <a href="https://wa.me/5551980413910?text=Olá,%20preciso%20de%20ajuda%20com%20meu%20veículo.">
        <FontAwesomeIcon icon={faWhatsapp} />
        FALE CONOSCO
      </a>
    </section>
  );
}

export default Home;
