import React, { Component } from 'react';
import './App.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            employees: [
                { name: "Dhana Sree", dept: "CSE", availability: "Available" },
                { name: "Ramesh", dept: "ECE", availability: "Available" },
                { name: "Priya", dept: "IT", availability: "Unavailable" }
            ],
            selected: 0 // index of selected employee
        };
    }

    handleSelect = (idx) => {
        this.setState({ selected: idx });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState(prevState => {
            const updated = prevState.employees.map((emp, idx) =>
                idx === prevState.selected ? { ...emp, [name]: value } : emp
            );
            return { employees: updated };
        });
    }

    render() {
        const { employees, selected } = this.state;
        return (
            <div className='app'>
                <h1>Employee Information Viewer</h1>
                <div className='profile' style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                    {employees.map((emp, idx) => (
                        <div
                            key={idx}
                            className={`info${selected === idx ? ' selected' : ''}`}
                            style={{ cursor: 'pointer', border: selected === idx ? '2px solid #007bff' : '1px solid #ccc' }}
                            onClick={() => this.handleSelect(idx)}
                        >
                            <h2>Employee Profile</h2>
                            <legend className='name'>Name: {emp.name}</legend>
                            <legend className='role'>Department: {emp.dept}</legend>
                            <legend className='role'>Availability: {emp.availability}</legend>
                        </div>
                    ))}
                </div>

                {/* Form to update info */}
                <div className="editor">
                    <h2>Update Information</h2>
                    <input
                        type="text"
                        name="name"
                        value={employees[selected].name}
                        onChange={this.handleChange}
                        placeholder="Update name"
                    />
                    <input
                        type="text"
                        name="dept"
                        value={employees[selected].dept}
                        onChange={this.handleChange}
                        placeholder="Update dept"
                    />
                    <input
                        type="text"
                        name="availability"
                        value={employees[selected].availability}
                        onChange={this.handleChange}
                        placeholder="Update availability"
                    />
                </div>
            </div>
        );
    }
}

export default App;
