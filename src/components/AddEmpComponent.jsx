import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Alert } from 'reactstrap';
import axios from 'axios';
import {APP_PROPS} from "../constants/ServerUrl";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        id: '',
        name: '',
        age: '',
        salary: '',
        address: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${APP_PROPS.serverUrl}/employees`, employee)
            .then(response => {
                setSuccess('Employee added successfully!');
                setError(null);
                setEmployee({
                    id: '',
                    name: '',
                    age: '',
                    salary: '',
                    address: '',
                });
            })
            .catch(error => {
                setError('Failed to add employee: ' + error.message);
                setSuccess(null);
            });
    };

    return (
        <Container>
            <h1 className="mt-5">Add New Employee</h1>
            {error && <Alert color="danger">{error}</Alert>}
            {success && <Alert color="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
            <FormGroup>
                    <Label for="id">Employee ID</Label>
                    <Input
                        type="number"
                        name="id"
                        id="id"
                        value={employee.id}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
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
                <Button type="submit" color="primary">Add Employee</Button>
            </Form>
        </Container>
    );
};

export default AddEmployee;