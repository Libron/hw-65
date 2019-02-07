import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";
import axios from '../../axios-instance';

import './Navigation.css';

class Navigation extends Component {
    state = {
        navTitles: null
    };

    componentDidMount() {
        axios.get('pages.json').then(response=>{
           const navTitles = Object.keys(response.data);
           this.setState({navTitles});
        });
    }

    render() {
        if (!this.state.navTitles) {
            return null;
        }
        return (
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">My Blog</NavbarBrand>
                <NavbarToggler />
                <Collapse isOpen navbar>
                    <Nav className="ml-auto" navbar>
                        {this.state.navTitles.map(title=>(
                            <NavItem key={title}>
                                <NavLink tag={RouterNavLink} to={`/pages/${title}`} exact>
                                    <span className="nav-title">{title}</span>
                                </NavLink>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Navigation;