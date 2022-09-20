import { Layout } from "../../components/Layout";
import { Cards } from "../../components/section-cards/Cards";
import styles from '../../styles/Gestion.module.css';

import Social from "../../components/assets/secciones/Gestiondecrisis/icono1.png";

const Creatividad = () => {
    const card1 = {
        page: "gestion",
        title: "Gestión de crisis",
        text: "En internet todo sucede rápidamente y cualquier noticia puede propagarse en cuestión de minutos. Es importante tomar consciencia de que cualquier acción puede escapar a nuestro control y que una crisis en Redes Sociales puede amenazar a tu empresa y su reputación en cualquier momento.",
    };
    return (
        <Layout title="Gestión de crisis">
            <section className={`section ${styles.bg__gestion}`}>
                <div className={`title__principal font__mont`}>
                    <h1>GESTIÓN DE <br /> CRISIS </h1>
                </div>
            </section>
            <section className={`${styles.section__gestion} section`}>
                <div className="cards__container">
                    <Cards data={card1}>{Social}</Cards>
                </div>
                <div className="text__cards">
                    <p>
                        Un <b>hecho imprevisto</b> puede emerger en cualquier momento <br /> y debemos estar preparados.
                    </p>
                    <p>
                        Entendemos que una <b>crisis</b> puede tener un <b>efecto negativo</b> <br /> en la reputación de nuestros clientes, <br /> y por eso los <b>preparamos para sortearlas.</b>
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default Creatividad;
