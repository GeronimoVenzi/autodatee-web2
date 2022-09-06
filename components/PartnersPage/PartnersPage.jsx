import { Container } from "react-bootstrap";
import styles from "./PartnersPage.module.css";
import { Slider } from "./Slider";

export const PartnersPage = () => {
    return (
        <section className={styles.bg__partners}>
            <div className={styles.title__container__text}>
                <h1>Casos de éxito</h1>
            </div>
            <Container>
                <Slider />
            </Container>

        </section>
    );
};
