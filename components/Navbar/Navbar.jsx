import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "/components/assets/Logos/AD-logo.png";
import styles from "./Navbar.module.css";
import Image from "next/image";
export const NavBar = () => {
  return (
    <>
      <Navbar className={styles.nav_bar} bg="light" expand="true">
        <Container fluid>
          <Navbar.Brand className={styles.nav_title} href="/">
            <Image
              src={Logo}
              width="65"
              height="45"
              className="d-inline-block align-top"
              alt="Autodatee logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle className={styles.nav_burger} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand`}
                className={styles.nav_link_text}
              >
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className={`${styles.nav_link_text}
                justify-content-end
                flex-grow-1
                pe-3
                `}
              >
                <Nav.Link href="#inicio">Home</Nav.Link>
                <Nav.Link href="#nosotros">Sobre nosotros</Nav.Link>
                <Nav.Link href="#servicios">Servicios</Nav.Link>
                <Nav.Link href="#contacto">Contactanos</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
