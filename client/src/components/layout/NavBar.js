import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/collection">Collection</Nav.Link>
                    <Nav.Link href="/diary">Diary</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar;