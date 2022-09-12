import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "./ServicePage.module.css";

export const ServicePage = () => {
  return (
    <section id="servicios" className={`${styles.services} section`}>
      <div>
        <h1>Servicios</h1>
      </div>

      <Container>
        {/* <CardGroup className="gap-5"> */}
        <Row>
          <Col xs={6} md={4}>
            <Link href="/estrategia">
              <Card
                className={`${styles.card__services} ${styles.card__estrategia} mt-3`}
              >
                <Card.Body className={styles.service__card__body}>
                  <p>ESTRATEGIA</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={4}>
            <Link href="/creatividad">
              <Card
                className={`${styles.card__services} ${styles.card__creatividad} mt-3`}
              >
                <Card.Body className={styles.service__card__body}>
                  <p>CREATIVIDAD Y CONTENIDOS</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} md={4}>
            <Link href="/relaciones">
              <Card
                className={`${styles.card__services} ${styles.card__relaciones} mt-3`}
              >
                <Card.Body className={styles.service__card__body}>
                  <p>RELACIONES PÚBLICAS</p>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col xs={6} md={4}>
            <Card
              className={`${styles.card__services} ${styles.card__social} mt-3`}
            >
              <Card.Body className={styles.service__card__body}>
                <p>SOCIAL MEDIA</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card
              className={`${styles.card__services} ${styles.card__gestion} mt-3`}
            >
              <Card.Body className={styles.service__card__body}>
                <p>GESTIÓN DE CRISIS</p>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card
              className={`${styles.card__services} ${styles.card__generacion} mt-3`}
            >
              <Card.Body className={styles.service__card__body}>
                <p>GENERACIÓN DE LEADS</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* </CardGroup> */}
      </Container>
    </section>
  );
};
