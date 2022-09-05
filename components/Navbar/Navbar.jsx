import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-bootstrap";

import styles from "./Navbar.module.css";
import Logo from "/components/assets/Logos/AD-logo.png";
import Image from "next/image";
export const NavBar = () => {
  return (
    <>
      <Navbar className={styles.nav_bar} bg="light" expand="true">
        <Container fluid>
          <Navbar.Brand className={styles.nav_title} href="/">
            <Image
              src="/components/assets/Logos/AD-logo.png"
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
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink href="#inicio">Home</NavLink>
                <NavLink href="#nosotros">Sobre nosotros</NavLink>
                <NavLink href="#servicios">Servicios</NavLink>
                <NavLink href="#action2">Contactanos</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
