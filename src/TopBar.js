import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import React from 'react';

export default function TopBar() {
    return (
        <div style={{ backgroundColor: "#f2f2f2", padding: "10px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 20px" }}>
                <div>
                    <Navbar.Brand href="#home">
                        <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt="Innstacart Logo" />
                    </Navbar.Brand>
                </div>
                <div style={{ textAlign: "right" }}>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" style={{ marginLeft: "10px" }}>Sign Up</Button>{' '}
                    </Nav>
                </div>
            </div>
        </div>
    );
}





