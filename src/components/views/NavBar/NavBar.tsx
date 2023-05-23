import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="rounded my-4">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Blog.app
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/categories">
            Categories
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
