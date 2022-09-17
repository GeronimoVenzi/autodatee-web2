import Image from "next/image";
import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ListGroup, NavDropdown } from "react-bootstrap";

import Logo from "/components/assets/Logos/AD-logo.png";
import styles from "./Navbar.module.css";
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
                <Link href="/#inicio">Home</Link>
                <Link href="/#nosotros">Sobre nosotros</Link>
                <NavDropdown
                  title="Servicios"
                  id={`offcanvasNavbarDropdown-expand`}
                >
                  <NavDropdown.ItemText>
                    <Link href={"/estrategia"}>Estrategia</Link>
                  </NavDropdown.ItemText>
                  <NavDropdown.ItemText>
                    <Link href={"/creatividad"}>Creatividad y Contenidos</Link>
                  </NavDropdown.ItemText>

                  <NavDropdown.ItemText>
                    <Link href={"/relaciones"}>Relaciones Públicas</Link>
                  </NavDropdown.ItemText>

                  <NavDropdown.ItemText>
                    <Link href={"/social"}>Social Media</Link>
                  </NavDropdown.ItemText>

                  <NavDropdown.ItemText>
                    <Link href={"/gestion"}>Gestión de Crisis</Link>
                  </NavDropdown.ItemText>

                  <NavDropdown.ItemText>
                    <Link href={"/leads"}>Generación de Leads</Link>
                  </NavDropdown.ItemText>
                </NavDropdown>
                <Link href="#contacto">Contactanos</Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
