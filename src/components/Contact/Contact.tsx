import styles from "./Contact.module.css";
import { faLocationDot, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

function Contact({ contactRef }: ContactProps) {
  return (
    <section className={styles.section} ref={contactRef}>
      <h2 className={styles.sectionTitle}>CONTATO </h2>
      <div className={styles.content}>
        <ul className={styles.cardsWrapper}>
          <li>
            <div className={styles.card}>
              <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>LOCALIZAÇÃO</h3>
                <address className={styles.address}>
                  R. Tamôio, 1442 - Niterói, Canoas - RS, 92120-001
                </address>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.card}>
              <FontAwesomeIcon className={styles.icon} icon={faMobile} />
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>TELEFONE</h3>
                <span>
                  <a className={styles.phone} href="tel:+5551980413910">
                    (51) 98041-3910
                  </a>

                  <a className={styles.phone} href="tel:+555134758870">
                    (51) 3475-8870
                  </a>
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.card}>
              <div className={styles.info}>
                <h3 className={styles.cardTitle}>HORÁRIO DE ATENDIMENTO</h3>
                <div>
                  <p className={styles.schedule}>
                    Seg a Sex das 8:00 ás 18:30.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className={styles.mapWrapper}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6914.182765182696!2d-51.169582!3d-29.94805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197085f1f9df5d%3A0x4582ab103745d745!2sMec%C3%A2nica%20Policar!5e0!3m2!1spt-BR!2sbr!4v1721018620578!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
