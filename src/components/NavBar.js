import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { NavLink, Link } from 'react-router-dom';
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
                        <NavLink type='Button' className="btn btn-outline " style={links} to='/category/1'>Maquinaria</NavLink>
                        <NavLink type='Button' className="btn btn-outline " style={links} to='/category/2'>Implementos</NavLink>
                        <NavLink type='Button' className="btn btn-outline " style={links} to='/category/3'>Repuestos</NavLink>
                    </Nav>
                    <Nav>
                        <CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;