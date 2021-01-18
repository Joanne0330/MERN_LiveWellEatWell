import React from 'react';
import Navbar from 'react-bootstrap/Navbar';



export const Header = () => {
    return (
        <div >
            <Navbar bg="warning" expand="lg">
                <Navbar.Brand href="/">
                    <h1 style={{ position: 'center', color: '#008000', fontSize: '50px'}}>Live Well, Eat Well</h1>
                </Navbar.Brand>

            </Navbar>
      </div>
    )
}

export default Header;