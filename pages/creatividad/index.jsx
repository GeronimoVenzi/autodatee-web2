import { Layout } from "../../components/Layout";
import { Cards } from "../../components/section-cards/Cards";
import styles from "../../styles/Creatividad.module.css";

import Modelo from "../../components/assets/secciones/Creatividadycontenidos/icono1.png";
import Consultoria from "../../components/assets/secciones/Creatividadycontenidos/icono2.png";

const Creatividad = () => {
  const card1 = {
    page: "creatividad",
    title: "Identidad",
    text: "Creación de una estética profesional que habla de tu empresa. Diseño de lenguajes gráficos (logos, colores, tipografías) y herramientas necesarias para transmitir una personalidad que destaque en el mercado.",
  };

  const card2 = {
    page: "creatividad",
    title: "Visual",
    text: "Creación de conocimientos demandados por el buyer person para convertir a las empresas en referentes del mercado. Optimización del posicionamiento orgánico en motores de búsqueda para la generación de visitias a la web.",
  };
  return (
    <Layout title="Creatividad y Contenidos">
      <section className={`section ${styles.bg__creatividad}`}>
        <div className={`title__principal font__mont`}>
          <h1>CREATIVIDAD Y <br /> CONTENIDOS</h1>
          <p>Creamos contenidos para tu marca <br /> con resultados que enamoran</p>
        </div>
      </section>
      <section className={`${styles.section__creatividad} section`}>
        <div className="cards__container">
          <Cards data={card1}>{Modelo}</Cards>
          <Cards data={card2}>{Consultoria}</Cards>
        </div>
        <div className={`buttons__container`}>
          <div className={styles.btn__creatividad}>
            CONSTRUCCION DE NARRATIVA
          </div>
          <div className={styles.btn__creatividad}>
            LABORATORIO DE CONTENIDOS
          </div>
        </div>
        <div className="text__cards">
          <p>
            Elaboramos los <b>lineamientos de dicsurso</b> <br />
            que toda organización precisa para relatar lo que hace <br /> y cómo lo que hace impacta en la comunidad.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Creatividad;
