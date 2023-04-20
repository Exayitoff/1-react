import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import gerb from '../rasmlar/gerb.png'
import 'boxicons';
import { NavLink, Link } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Link to="/" className='text-light navbar-brand'><img src={gerb} width='60px' height='60px'/> 29-MAKTAB</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className='nav-link' to='maktabhaqida'>Maktab haqida</NavLink>
            <NavLink className='nav-link' to='oqituvchilar'>O'qituvchilar</NavLink>
            <NavDropdown title="Qo'shimcha" id="collasible-nav-dropdown">
              <Link to="yangiliklar" data-rr-ui-dropdown-item className="dropdown-item" >Yangiliklar</Link>
              <Link to="oquvchilar" data-rr-ui-dropdown-item className="dropdown-item" >O'quvchilar</Link>

              <Link to="maktabhayoti" data-rr-ui-dropdown-item className="dropdown-item" >Maktab hayoti</Link>

              <NavDropdown.Divider />
              <Link to="direktor" data-rr-ui-dropdown-item className="dropdown-item" >Maktab direktori</Link>

            </NavDropdown>
          </Nav>
          <Nav>
            {/* <NavLink href="#deets">More deets</NavLink> */}
            <NavLink eventKey={2} className='nav-link' to="anonim">
             Anonim murojaat
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;  