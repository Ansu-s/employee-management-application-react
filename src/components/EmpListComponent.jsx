import React, {useState, useEffect} from 'react';
import {Table, Container, Alert} from 'reactstrap';
import axios from 'axios';
import {APP_PROPS} from "../constants/ServerUrl";

const EmpListComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        axios.get(`${APP_PROPS.serverUrl}/employees`)
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return (<Container>
            <h1 className="mt-5">Employee List</h1>
            {error && <Alert color="danger">Failed to fetch employees: {error.message}</Alert>}
            <Table striped>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {employees.map(employee => (<tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.age}</td>
                        <td>{employee.salary}</td>
                        <td>{employee.address}</td>
                    </tr>))}
                </tbody>
            </Table>
        </Container>);
};

export default EmpListComponent;
