import { Layout } from "../../components/Layout";
import { Cards } from "../../components/section-cards/Cards";
import styles from "../../styles/Creatividad.module.css";

import Modelo from "../../components/assets/secciones/Creatividadycontenidos/icono1.png";
import Consultoria from "../../components/assets/secciones/Creatividadycontenidos/icono2.png";

const Creatividad = () => {
  const card1 = {
    title: "Identidad",
    text: "Atracción de clientes con contenido útil y relevante. Ayudamos a definir con claridad la oferta de la empresa al mercado. Qué, quiénes, cómo y de qué forma se va a posicionar. Estructuramos las partes que componen la emprea en torno a la propuesta de valor para diferenciarse de la competencia y fidelizar a los clientes.",
  };

  const card2 = {
    title: "Visual",
    text: "Auxiliamos a los clientes a identificar mercados clave, consumidores de interés y estrategias de marketing. Mantenemos una comunicación constante y reuniones estratégicas para analizar los resultados.",
  };
  return (
    <Layout title="Creatividad y Contenidos">
      <section className={`section ${styles.bg__creatividad}`}>
        <div className={`title__principal font__mont`}>
          <h1>CREATIVIDAD Y CONTENIDOS</h1>
          <p>Creamos contenidos para tu marca con resultados que enamoran</p>
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
            Trabajamos <b>en conjunto con nuestro cliente</b> para lograr la
            idea, los pasos y los <br /> objetivos que cumpliremos con la
            implementación de esta objetiva y creativa idea.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Creatividad;
