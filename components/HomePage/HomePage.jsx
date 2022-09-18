import Image from "next/image";

import styles from "./HomePage.module.css";
import Imagen from "../assets/Logos/autodatee-color.png";
import Link from "next/link";

export const HomePage = () => {
  return (
    <section id="inicio" className={`${styles.bg} section mt-0.80`}>
      <div className={styles.home__container}>
        <main className={styles.image__container}>
          <Image width={800} height={600} src={Imagen} alt="fondo principal" />
        </main>
        <div>
          <div className={styles.title__container}>
            <p className={`${styles.title__home} text-light `}>
              Impulsamos <br /> tu negocio.
            </p>
            <Link href="#nosotros">
              <button className={`${styles.button__container__img}`}></button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
