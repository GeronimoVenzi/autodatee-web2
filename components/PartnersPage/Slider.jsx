import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Slider.module.css";

import Prana from "/components/assets/logos-clientes/prana.jpg";
import Autocity from "/components/assets/logos-clientes/Autocity-01.png";
import Autohaus from "/components/assets/logos-clientes/AUTOHAUS.jpg";
import Descarga from "/components/assets/logos-clientes/descarga.png";
import Giama from "/components/assets/logos-clientes/GIAMA.png";
import Goldstein from "/components/assets/logos-clientes/GOLDSTEIN.jpg";
import Antun from "/components/assets/logos-clientes/grupo-antun.jpg";
import Leparc from "/components/assets/logos-clientes/le-parc.png";
import Nation from "/components/assets/logos-clientes/nation-sa.png";
import Yacopini from "/components/assets/logos-clientes/yacopini.png";

export const Slider = () => {
  // const marcas = [
  //     {
  //         nombre: "Prana",
  //         url: "prana.jpg",
  //     },
  //     {
  //         nombre: "Ruta3",
  //         url: "descarga.png",
  //     },
  //     {
  //         nombre: "Nation",
  //         url: "nation-sa.png",
  //     },
  //     {
  //         nombre: "AutoHaus",
  //         url: "AUTOHAUS.jpg",
  //     },
  //     {
  //         nombre: "FordGoldstein",
  //         url: "GOLDSTEIN.jpg",
  //     },
  //     {
  //         nombre: "Yacopini",
  //         url: "yacopini.png",
  //     },
  //     {
  //         nombre: "Giama",
  //         url: "GIAMA.png",
  //     },
  //     {
  //         nombre: "LeParc",
  //         url: "le-parc.png",
  //     },
  //     {
  //         nombre: "GrupoAntun",
  //         url: "grupo-antun.jpg",
  //     },
  //     {
  //         nombre: "AutoCity",
  //         url: "Autocity-01.png",
  //     },
  // ];

  return (
    <div className="container">
      <div className={styles.swiperContainer}>
        <Swiper
          className="mt-5"
          modules={[Autoplay]}
          autoplay={{
            delay: 800,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Prana}
                alt="Prana"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Autocity}
                alt="Autocity"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Autohaus}
                alt="Autohaus"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Giama}
                alt="Giama"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Goldstein}
                alt="Goldstein"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Descarga}
                alt="Descarga"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Antun}
                alt="Antun"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Leparc}
                alt="LeParc"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Yacopini}
                alt="Yacopini"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className={styles.card__marca}>
              <Image
                className={styles.swiper__container__img}
                src={Nation}
                alt="Nation"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
