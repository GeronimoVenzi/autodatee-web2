import Image from "next/image";

import { Card, Container } from "react-bootstrap";

import styles from "./AboutPage.module.css";

import Confiabilidad from "../assets/iconos-valores/5.png";
import Transparencia from "../assets/iconos-valores/4.png";
import Respeto from "../assets/iconos-valores/3.png";
import Compromiso from "../assets/iconos-valores/1.png";
import Creatividad from "../assets/iconos-valores/2.png";

export const AboutPage = () => {
  return (
    <section id="nosotros" className="section">
      <Container fluid>
        <div className={styles.title__about}>
          <h1 className="font__mont">Nosotros</h1>
        </div>
        <Container className={styles.about__container}>
          <article>
            <h2 className={`${styles.title__second} ${styles.title__nosotros} font__mont__alt`}>
              Con una mirada 360
            </h2>
            <div>
              <p className={`${styles.font__mont__alt}`}>
                Somos AUTODATEE, una empresa de base tecnológica con un arraigo genético al
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
              <Image
                className={styles.image__card}
                rounded="true"
                variant="top"
                src={Confiabilidad}
                alt="logos"
              />
              <Card.Body>
                <h5 className={`${styles.cards__title} font__mont__alt text-center`}>
                  Jane Cooper
                </h5>
                <p className={`${styles.card__pharagraph}  ${styles.font__mont__alt} text-center`}>
                  CEO at Corporation.
                </p>
              </Card.Body>
            </Card>
            <Card className={styles.team__card}>
              <Image
                className={styles.image__card}
                rounded="true"
                variant="top"
                src={Confiabilidad}
                alt="logos"
              />
              <Card.Body>
                <h5 className={`${styles.cards__title} font__mont__alt text-center`}>
                  Jane Cooper
                </h5>
                <p className={`${styles.card__pharagraph}  ${styles.font__mont__alt} text-center`}>
                  CEO at Corporation.
                </p>
              </Card.Body>
            </Card>
            <Card className={styles.team__card}>
              <Image
                className={styles.image__card}
                rounded="true"
                variant="top"
                src={Confiabilidad}
                alt="logos"
              />
              <Card.Body>
                <h5 className={`${styles.cards__title} font__mont__alt text-center`}>
                  Jane Cooper
                </h5>
                <p className={`${styles.card__pharagraph}  ${styles.font__mont__alt} text-center`}>
                  CEO at Corporation.
                </p>
              </Card.Body>
            </Card>
          </div>
        </Container>

        <Container>
          <h3 className={styles.title__second}>Valores</h3>
          <div className={`${styles.card__container__valores}  ${styles.font__mont__alt}`}>
            <Card className={styles.valor__card}>
              <Image
                className={styles.image__card}
                rounded="true"
                variant="top"
                src={Confiabilidad}
                alt="valores"
              />
              <Card.Body>
                <h5 className={`${styles.cards__title} text-center`}>
                  Confiabilidad
                </h5>
              </Card.Body>
            </Card>
            <Card className={styles.valor__card}>
              <Image
                className={styles.image__card}
                rounded="true"
                variant="top"
                src={Transparencia}
                alt="valores"
              />
              <Card.Body>
                <h5 className={`${styles.cards__title} text-center`}>
                  Transparencia
                </h5>
              </Card.Body>
            </Card>
            <Card className={styles.valor__card}>
              <Image
                className={styles.image__card}
                rounded="true"
                variant="top"
                src={Respeto}
                alt="valores"
              />
              <Card.Body>
                <h5 className={`${styles.cards__title} text-center`}>
                  Respeto
                </h5>
              </Card.Body>
            </Card>
            <Card className={styles.valor__card}>
              <Image
                className={styles.image__card}
                rounded="true"
                variant="top"
                src={Compromiso}
                alt="valores"
              />
              <Card.Body>
                <h5 className={`${styles.cards__title} text-center`}>
                  Compromiso
                </h5>
              </Card.Body>
            </Card>
            <Card className={styles.valor__card}>
              <Image
                className={styles.image__card}
                rounded="true"
                variant="top"
                src={Creatividad}
                alt="valores"
              />
              <Card.Body>
                <h5 className={`${styles.cards__title} text-center`}>
                  Creatividad
                </h5>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </Container>
    </section>
  );
};
