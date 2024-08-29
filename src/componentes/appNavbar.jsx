import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AppNavbar() {
  return (
    <Navbar expand='lg' style={styles.navbar}>
      <Navbar.Brand href='pazzaglia-final/' style={styles.brand}>
        🛒
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/' style={styles.navLink}>
            Home
          </Nav.Link>
          <Nav.Link href='pazzaglia_final/login' style={styles.navLink}>
            Login
          </Nav.Link>
          <Nav.Link href='pazzaglia_final/registro' style={styles.navLink}>
            Registro
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#E0F7FA", // Celeste claro
    padding: "10px 20px",
  },
  brand: {
    display: "flex",
    alignItems: "center",
    color: "#00796B", // Verde oscuro para el texto
    fontWeight: "bold",
    fontSize: "18px",
  },
  logo: {
    marginRight: "10px",
    borderRadius: "50%", // Hacer el logo circular
  },
  navLink: {
    color: "#00796B", // Verde oscuro
    margin: "0 10px",
    fontSize: "16px",
    fontWeight: "500",
  },
};

export default AppNavbar;
