import React from 'react';
import { NavLink } from "react-router-dom";
import {Container, Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';

const OperationsComponent = () => {
    return (
        <>
            <Navbar color="dark" dark expand="md" style={{ height: '60px', marginBottom: '0' }}>
                <Container>
                    <NavbarBrand className="text-center w-100">
                        <h2 style={{ color: 'white', margin: '0' }}>Employee Management Application</h2>
                    </NavbarBrand>
                </Container>
            </Navbar>


            <Nav tabs style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <NavItem style={{ marginRight: '30px' }}>
                    <NavLink className="btn btn-primary mr-3" to="/employees" style={{ color: 'white', backgroundColor: '#007bff', border: 'none' }}>
                        All
                    </NavLink>
                </NavItem>
                <NavItem style={{ marginRight: '30px' }}>
                    <NavLink className="btn btn-success mr-3" to="/employees/add" style={{ color: 'white', backgroundColor: '#28a745', border: 'none' }}>
                        Add
                    </NavLink>
                </NavItem>
                <NavItem style={{ marginRight: '30px' }}>
                    <NavLink className="btn btn-warning mr-3" to="/employees/update" style={{ color: 'white', backgroundColor: '#ffc107', border: 'none' }}>
                        Update
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="btn btn-danger" to="/employees/delete" style={{ color: 'white', backgroundColor: '#dc3545', border: 'none' }}>
                        Delete
                    </NavLink>
                </NavItem>
            </Nav>


        </>
    );
};

export default OperationsComponent;