import { Layout } from "../../components/Layout";
import { Cards } from "../../components/section-cards/Cards";
import styles from '../../styles/Social.module.css';

import Social from "../../components/assets/secciones/Socialmedia/icono1.png";
import Diseño from "../../components/assets/secciones/Socialmedia/icono2.png";
import Anuncios from "../../components/assets/secciones/Socialmedia/icono3.png";

const Creatividad = () => {
    const card1 = {
        page: "social",
        title: "Social Media",
        text: "Creamos y administramos los perfiles de las empresas en las redes sociales, a su vez, ayudamos a las empresas a formar una comunidad en base a la estrategia seleccionada para interactuar con su audiencia.",
    };

    const card2 = {
        page: "social",
        title: "Diseño Web",
        text: "Diseñamos tu página web soñada, pensada desde la experiencia del usuario para facilitar la navegabilidad y optimizar los resultados.",
    };
    const card3 = {
        page: "social",
        title: "Anuncios Online",
        text: "Lográ conectar tu marca con potenciales clientes. Trabajamos con plataformas y espacios publicitarios online.",
    };
    return (
        <Layout title="Social media">
            <section className={`section ${styles.bg__social}`}>
                <div className={`title__principal font__mont`}>
                    <h1>SOCIAL <br /> MEDIA</h1>
                </div>
            </section>
            <section className={`${styles.section__creatividad} section`}>
                <div className="cards__container">
                    <Cards data={card1}>{Social}</Cards>
                    <Cards data={card2}>{Diseño}</Cards>
                    <Cards data={card3}>{Anuncios}</Cards>
                </div>
                <div className={`buttons__container`}>
                    <div className={styles.btn__social}>
                        ESTRATEGIA DIGITAL
                    </div>
                    <div className={styles.btn__social}>
                        CONTENIDOS DIGITALES
                    </div>
                    <div className={styles.btn__social}>
                        CAMPAÑAS
                    </div>
                    <div className={styles.btn__social}>
                        MARKETING DE INFLUENCERS
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Creatividad;
