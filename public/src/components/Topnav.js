import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import gerb from '../rasmlar/gerb.png'
import 'boxicons';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="#home"><img src={gerb} width='60px' height='60px'/> 29-MAKTAB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Maktab haqida</Nav.Link>
            <Nav.Link href="#pricing">O'qituvchilar</Nav.Link>
            <NavDropdown title="Qo'shimcha" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#yangiliklar">Yangiliklar</NavDropdown.Item>
              <NavDropdown.Item href="#oquvchilar">
                O'quvchilar
              </NavDropdown.Item>
              <NavDropdown.Item href="#qoshimchadars">Qo'shimcha darslar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#direktor">
                Maktab direktori
              </NavDropdown.Item>
              <NavDropdown.Item href="#admin">
                Sayt admini
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Nav.Link eventKey={2} href="tel://">
             +998 91 997 02 84
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;  