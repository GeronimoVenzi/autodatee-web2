import Image from 'next/image';

import styles from "./HomePage.module.css";
import Imagen from "../assets/Logos/autodatee-color.png";


export const HomePage = () => {
    return (
        <section id="inicio" className={`${styles.bg} section mt-0.80`}>
            <div className={styles.home__container}>
                <main className={styles.image__container}>
                    <Image className={styles.image__principal} src={Imagen} alt="fondo principal" />
                </main>
                <div className={styles.title__container}>
                    <p className={`${styles.title__home} text-light `}>
                        Impulsamos <br /> tu negocio.
                    </p>
                </div>
            </div>
        </section>
    );
};
