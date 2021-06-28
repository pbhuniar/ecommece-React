
import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './Mynavbar.css'
import { Link } from 'react-router-dom'

const Mynavbar = () => {


  const state = useSelector(state => state.newCart)
  // console.log("log",state)
  var count = 0
  state.products.map((x)=>{
    count+=(x.quantity)
  })
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand><Link to='/'>ShoppyModel</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/product">Product</Link></Nav.Link>
            <Nav.Link><Link to="/blogs">Blog</Link></Nav.Link>
            <Nav.Link><Link to="/pages">Pages</Link></Nav.Link>

          </Nav>
          <Nav>

            <NavDropdown title="User" id="collasible-nav-dropdown">

              <NavDropdown.Item href="#action/3.1"><Link to="/login"><i class="fas fa-sign-in-alt"></i> Signin</Link></NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><Link to="/register"><i class="fas fa-user-plus"></i> Register</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to="/cart"><i class="fas fa-cart-plus"></i> Cart<span style={{color:"red",fontWeight:"bold"}}>[{count}]</span></Link></NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Mynavbar

