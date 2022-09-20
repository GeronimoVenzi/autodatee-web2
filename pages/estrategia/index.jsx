import { Layout } from "../../components/Layout";
import { Cards } from "../../components/section-cards/Cards";
import styles from "../../styles/Estrategia.module.css";

import Modelo from '../../components/assets/secciones/Estrategia/icono1.png';
import Consultoria from '../../components/assets/secciones/Estrategia/icono2.png';

const Estrategia = () => {
  const card1 = {
    page: "estrategia",
    title: 'Modelo de negocios',
    text: 'Atracción de clientes con contenido útil y relevante. Ayudamos a definir con claridad la oferta de la empresa al mercado. Qué, quiénes, cómo y de qué forma se va a posicionar. Estructuramos las partes que componen la emprea en torno a la propuesta de valor para diferenciarse de la competencia y fidelizar a los clientes.'
  }

  const card2 = {
    title: 'Consultoría',
    text: 'Auxiliamos a los clientes a identificar mercados clave, consumidores de interés y estrategias de marketing. Mantenemos una comunicación constante y reuniones estratégicas para analizar los resultados.'
  }
  return (
    <Layout title="Estrategia">
      <section className={`section ${styles.bg__estrategia}`}>
        <div className={`title__principal font__mont`}>
          <h1>ESTRATEGIA</h1>
          <p>Planifico, luego existo.</p>
        </div>
      </section>
      <section className={`${styles.section__estrategia} section`}>
        <div className={`cards__container `}>
          <Cards data={card1}>
            {Modelo}
          </Cards>
          <Cards data={card2}>
            {Consultoria}
          </Cards>
        </div>
        <div className={`buttons__container font__mont`}>
          <div className={styles.btn__estrategia}>DIAGNÓSTICO</div>
          <div className={styles.btn__estrategia}>SEGMENTACIÓN</div>
          <div className={styles.btn__estrategia}>TARGETIZACIÓN</div>
          <div className={styles.btn__estrategia}>POSICIONAMIENTO</div>
        </div>
        <div className="text__cards">
          <p>
            Trabajamos <b>en conjunto con nuestro cliente</b> para lograr la idea, los pasos
            y los  <br /> objetivos que cumpliremos con la implementación de esta objetiva y
            creativa idea.
          </p>
          <p>
            Aplicamos <b>matrices de marketing y metodologías</b> para lograr <br /> ideas innovadoras
            y diferenciandolas en el mercado.
          </p>
        </div>
      </section>
    </Layout >
  );
};

export default Estrategia;
