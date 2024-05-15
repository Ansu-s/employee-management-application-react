import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {APP_PROPS} from "../constants/ServerUrl";
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';

const UpdateEmpComponent = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState({
        name: '',
        age: '',
        salary: '',
        address: ''
    });

    useEffect(() => {

        axios.get(`${APP_PROPS.serverUrl}/employees/${id}`)
            .then(response => {
                setEmployee(response.data);
            })
            .catch(error => {
                console.error("Error Occured", error);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${APP_PROPS.serverUrl}/employees/${id}`, employee)
            .then(response => {
                console.log("Employee updated successfully!", response.data);
            })
            .catch(error => {
                console.error("Error occur during employee update", error);
            });
    };

    return (
        <Container>
            <h2>Update Employee</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                        type="number"
                        name="age"
                        id="age"
                        value={employee.age}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="salary">Salary</Label>
                    <Input
                        type="number"
                        name="salary"
                        id="salary"
                        value={employee.salary}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                        type="text"
                        name="address"
                        id="address"
                        value={employee.address}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <Button color="primary" type="submit">Update Employee</Button>
            </Form>
        </Container>
    );
};

export default UpdateEmpComponent;