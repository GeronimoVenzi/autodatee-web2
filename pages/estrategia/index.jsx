import { Layout } from "../../components/Layout";
import styles from "../../styles/Estrategia.module.css";

const Estrategia = () => {
  return (
    <Layout>
      <section className={`section ${styles.bg__estrategia}`}>
        <div className={`title__principal font__mont`}>
          <h1>ESTRATEGIA</h1>
          <p>Pienso, luego existo</p>
        </div>
      </section>
    </Layout>
  );
};

export default Estrategia;
