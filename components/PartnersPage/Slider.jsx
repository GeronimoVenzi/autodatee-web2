import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";
import styles from "./Slider.module.css";

export const Slider = () => {
    const marcas = [
        {
            nombre: "Prana",
            url: "prana.jpg",
        },
        {
            nombre: "Ruta3",
            url: "descarga.png",
        },
        {
            nombre: "Nation",
            url: "nation-sa.png",
        },
        {
            nombre: "AutoHaus",
            url: "AUTOHAUS.jpg",
        },
        {
            nombre: "FordGoldstein",
            url: "GOLDSTEIN.jpg",
        },
        {
            nombre: "Yacopini",
            url: "yacopini.png",
        },
        {
            nombre: "Giama",
            url: "GIAMA.png",
        },
        {
            nombre: "LeParc",
            url: "le-parc.png",
        },
        {
            nombre: "GrupoAntun",
            url: "grupo-antun.jpg",
        },
        {
            nombre: "AutoCity",
            url: "Autocity-01.png",
        },
    ];

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
                    {marcas?.map((marca) => (
                        <SwiperSlide key={marca.nombre} className={`${styles.swiper__container} mt-5`}>
                            <Card marca={marca} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
