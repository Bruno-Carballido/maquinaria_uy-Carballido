import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import foto from '../assets/logo_maquinaria.png';

const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={foto}
                        style={{ height: '3em' }}
                        className="d-inline-block align-top"
                        alt="Logo web"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#productos/maquinaria">Maquinaria</NavDropdown.Item>
                            <NavDropdown.Item href="#productos/implementos">Implementos</NavDropdown.Item>
                            <NavDropdown.Item href="#productos/tecnologia">Tecnología</NavDropdown.Item>
                            <NavDropdown.Item href="#productos/repuestos">Repuestos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#nosotros">Sobre nosotros</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartWidget cantItems={4} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;