import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

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

const Card = () => {
    return (
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Prana}
                    alt="Prana"
                />
            </div>
        </SwiperSlide>,

        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Autocity}
                    alt="Autocity"
                />
            </div>
        </SwiperSlide>,
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Autohaus}
                    alt="Autohaus"
                />
            </div>
        </SwiperSlide>,
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Giama}
                    alt="Giama"
                />
            </div>
        </SwiperSlide>,
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Goldstein}
                    alt="Goldstein"
                />
            </div>
        </SwiperSlide>,
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Descarga}
                    alt="Descarga"
                />
            </div>
        </SwiperSlide>,
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Antun}
                    alt="Antun"
                />
            </div>
        </SwiperSlide>,
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Leparc}
                    alt="LeParc"
                />
            </div>
        </SwiperSlide>,
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Yacopini}
                    alt="Yacopini"
                />
            </div>
        </SwiperSlide>,
        <SwiperSlide className={`${styles.swiper__container} mt-5`}>
            <div className="card__marca">
                <Image
                    src={Nation}
                    alt="Nation"
                />
            </div>
        </SwiperSlide>

    );
};

export default Card;
