import React from 'react';
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

function HeaderNavbar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">React Hooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="State Hook" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/state-hook/hook-counter">Hook Counter</NavDropdown.Item>
                        <NavDropdown.Item href="/state-hook/form-on-change">Form on Change</NavDropdown.Item>
                        <NavDropdown.Item href="/state-hook/add-items">Add Items</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/*<Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>*/}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default HeaderNavbar;