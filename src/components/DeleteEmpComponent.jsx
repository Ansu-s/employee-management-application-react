import React, { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button, Container } from 'reactstrap';
import {APP_PROPS} from "../constants/ServerUrl";

const DeleteEmpComponent = () => {
    const [employeeId, setEmployeeId] = useState('');

    const handleChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`${APP_PROPS.serverUrl}/employees/${employeeId}`)
            .then(response => {
                console.log("Employee deleted successfully!", response.data);

                setEmployeeId('');
            })
            .catch(error => {
                console.error("Error Occurred", error);
            });
    };

    return (
        <Container>
            <h2>Delete Employee</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="employeeId">Employee ID</Label>
                    <Input
                        type="text"
                        name="employeeId"
                        id="employeeId"
                        value={employeeId}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <Button color="danger" type="submit">Delete Employee</Button>
            </Form>
        </Container>
    );
};

export default DeleteEmpComponent;