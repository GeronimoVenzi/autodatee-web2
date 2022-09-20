import { Layout } from "../../components/Layout";
import { Cards } from "../../components/section-cards/Cards";

import styles from "../../styles/Relaciones.module.css";

import Modelo from "../../components/assets/secciones/Relacionespublicas/icono1.png";

const Relaciones = () => {
  const card1 = {
    page: "relaciones",
    text: "Comunicación integral en los canales de la empresa enfocada en la estrategia empresarial para transmitir la imagen que la empresa busca.",
  };

  return (
    <Layout title="Relaciones públicas">
      <section className={`section ${styles.bg__relaciones}`}>
        <div className={`title__principal font__mont`}>
          <h1>
            RELACIONES <br /> PÚBLICAS
          </h1>
          <p>¡Destacate y generá confianza entre tus clientes!</p>
        </div>
      </section>
      <section className={`${styles.section__relaciones} section`}>
        <div className="cards__container">
          <Cards data={card1}>{Modelo}</Cards>
        </div>
        <div className={`buttons__container font__mont`}>
          <div className={styles.btn__relaciones}>PRENSA</div>
          <div className={styles.btn__relaciones}>RELACIONAMIENTO</div>
          <div className={styles.btn__relaciones}>MEDIA TRAINING</div>
        </div>
        <div className="text__cards">
          <p>
            <b>Transmitir un mensaje de manera acertiva</b> puede exigir un{" "}
            <b>entrenamiento</b>. <br />
            Nosotros nos ocupamos de preparar a los client es que precisen
            ejercitar <br />
            antes de comunicar lo que hacen.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Relaciones;
