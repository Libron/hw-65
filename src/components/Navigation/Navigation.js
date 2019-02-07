import React from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Shop</NavbarBrand>
            <NavbarToggler />
            <Collapse isOpen navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/" exact>Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/add" >Add product</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Navigation;