import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import foto from '../assets/logo_maquinaria.png';

const NavBar = () => {
    const links = {
        textDecoration: 'initial',
        color: 'initial'
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img
                            src={foto}
                            style={{ height: '3em' }}
                            className="d-inline-block align-top"
                            alt="Logo web" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link type='Button' className="btn btn-outline " style={links} to='/category/1'>Maquinaria</Link>
                        <Link type='Button' className="btn btn-outline " style={links} to='/category/2'>Implementos</Link>
                        <Link type='Button' className="btn btn-outline " style={links} to='/category/3'>Repuestos</Link>
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