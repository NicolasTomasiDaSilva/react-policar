import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import ReviewCard from "./ReviewCard/ReviewCard.tsx";
import reviews from "./reviews.tsx";
// Importe os estilos do Swiper
import "swiper/swiper-bundle.css";

import "./swiper.css";

interface ServicesProps {
  servicesRef: React.RefObject<HTMLDivElement | null>;
}

function Services({ servicesRef }: ServicesProps) {
  return (
    <section className={styles.section} ref={servicesRef}>
      <h2 className={styles.sectionTitle}>NOSSOS SERVIÇOS</h2>
      <div className={styles.content}>
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
        <div className={styles.swiper}>
          {
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              loop={true}
              pagination={{
                clickable: true,
                type: "bullets",
                el: ".swiper-paginationn",
              }}
              style={{ width: "100%", height: "100%" }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {reviews.map((review) => {
                return (
                  <SwiperSlide>
                    <div className={styles.slide}>
                      <ReviewCard
                        key={review.name}
                        avatarUrl={review.avatarUrl}
                        name={review.name}
                        content={review.content}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          }
          <div
            className="swiper-paginationn"
            style={{ paddingTop: "0.5rem", textAlign: "center" }}
          ></div>
        </div>{" "}
      </div>
    </section>
  );
}

export default Services;
