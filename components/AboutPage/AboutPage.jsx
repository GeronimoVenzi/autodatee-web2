import { Card, Container } from "react-bootstrap";

import styles from "./AboutPage.module.css";

import Imagen from "../assets/iconos-valores/1.png";

export const AboutPage = () => {
    const valores = [
        { id: 5, nombre: "Confiabilidad" },
        { id: 4, nombre: "Transparencia" },
        { id: 3, nombre: "Respeto" },
        { id: 2, nombre: "Compromiso" },
        { id: 1, nombre: "Creatividad" },
    ];

    return (
        <section id="nosotros" className="section">
            <Container fluid>
                <div className={styles.title__about}>
                    <h1>Nosotros</h1>
                </div>
                <Container className={styles.about__container}>
                    <article>
                        <h2 className={`${styles.title__second} ${styles.title__nosotros}`}>
                            Con una mirada 360
                        </h2>
                        <div>
                            <p>
                                Somos una empresa de base tecnológica con un arraigo genético al
                                arte de la venta. Ofrecemos el conocimiento y las herramientas
                                por medio de un equipo profesional e interdisciplinario en una
                                busqueda permanente por la optimización de procesos. Una mirada
                                360 busca alinear incenvitos para asegurar la coherencia y
                                coordinación del mensaje comunicado por una marca. Pero ello no
                                basta; desde la perspectiva comunitaria, tambien debemos conocer
                                y aprender la opinión de quienes la rodean. Solo así será
                                posible influir en la construcción de esa opinion. Crecimos
                                trabajando en el ámbito corporativo, social, comunicacional y
                                tecnológico, poniendo nuestro conocimiento y experiencia al
                                servicio de quienes buscan promover con sus historias. Nos
                                encanta encontrar soluciones simples a desafíos complejos
                                poniendo un fuerte énfasis en cada detalle, desde el pensamiento
                                estratégico, pasando por el diseño, hasta la materialización del
                                proyecto.
                            </p>
                        </div>
                    </article>
                    <div className={styles.card__container}>
                        <Card className={styles.team__card}>
                            <Card.Img
                                className={styles.image__card}
                                rounded="true"
                                variant="top"
                                src={Imagen}
                            />
                            <Card.Body>
                                <h5 className={`${styles.cards__title} text-center`}>Jane Cooper</h5>
                                <p className={`${styles.card__pharagraph} text-center`}>
                                    CEO at Corporation.
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className={styles.team__card}>
                            <Card.Img
                                className={styles.image__card}
                                rounded="true"
                                variant="top"
                                src={Imagen}
                            />
                            <Card.Body>
                                <h5 className={`${styles.cards__title} text-center`}>Jane Cooper</h5>
                                <p className={`${styles.card__pharagraph} text-center`}>
                                    CEO at Corporation.
                                </p>
                            </Card.Body>
                        </Card>
                        <Card className={styles.team__card}>
                            <Card.Img
                                className={styles.image__card}
                                rounded="true"
                                variant="top"
                                src={Imagen}
                            />
                            <Card.Body>
                                <h5 className={`${styles.cards__title} text-center`}>Jane Cooper</h5>
                                <p className={`${styles.card__pharagraph} text-center`}>
                                    CEO at Corporation.
                                </p>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>

                <Container>
                    <h3 className={styles.title__second}>Valores</h3>
                    <div className={styles.card__container__valores}>
                        {valores.map((valor) => {
                            return (
                                <Card className={styles.valor__card}>
                                    <Card.Img
                                        className={styles.image__card}
                                        rounded="true"
                                        variant="top"
                                        src={`../assets/iconos-valores/${valor.id}.png`}
                                    />
                                    <Card.Body>
                                        <h5 className={`${styles.cards__title} text-center`}>{valor.nombre}</h5>
                                    </Card.Body>
                                </Card>
                            );
                        })}
                    </div>
                </Container>
            </Container>
        </section>
    );
};
