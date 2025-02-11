import styles from "./About.module.css";

interface AboutProps {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}

function About({ aboutRef }: AboutProps) {
  return (
    <section className={styles.about} ref={aboutRef}>
      <h2>SOBRE NÓS</h2>
      <div className={styles.content}>
        <img
          className={styles.image}
          src="./src/assets/policar.png"
          alt="Policar"
        />
        <p className={styles.text}>
          Desde 2002, a Policar oferece serviços automotivos com qualidade e
          honestidade. Com duas décadas de experiência, estamos comprometidos em
          garantir que seu veículo receba o melhor cuidado possível.
        </p>
      </div>
    </section>
  );
}

export default About;
