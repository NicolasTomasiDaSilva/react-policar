import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import React from "react";

interface ServicesProps {
  servicesRef: React.RefObject<HTMLDivElement | null>;
}

function Services({ servicesRef }: ServicesProps) {
  return (
    <section className={styles.services} ref={servicesRef}>
      <h2>NOSSOS SERVIÇOS</h2>
      <ul className={styles.servicesList}>
        <li>
          <ServiceCard
            src="./src/assets/icone-motor.png"
            content="Motor"
          ></ServiceCard>
        </li>
        <li>
          <ServiceCard
            src="./src/assets/icone-injecao.png"
            content="Injeção"
          ></ServiceCard>
        </li>
        <li>
          <ServiceCard
            src="./src/assets/icone-troca-oleo.png"
            content="Troca de Óleo"
          ></ServiceCard>
        </li>
        <li>
          <ServiceCard
            src="./src/assets/icone-suspensao.png"
            content="Suspensão"
          ></ServiceCard>
        </li>
        <li>
          <ServiceCard
            src="./src/assets/icone-freio.png"
            content="Freios"
          ></ServiceCard>
        </li>
      </ul>
    </section>
  );
}

export default Services;
