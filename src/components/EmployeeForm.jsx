import React, { Component } from 'react'
import EmployeeTable from './EmployeeTable'

class EmployeeForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            name: '',
            job: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleJobChange = this.handleJobChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                    />
                    <label htmlFor="job">Job</label>
                    <input
                        name="job"
                        type="text"
                        placeholder="Enter the Job"
                        value={this.state.job}
                        onChange={this.handleJobChange}

                    />
                    <button type="submit">Submit</button>
                </form>
                <EmployeeTable list={this.state.list} delete={this.deleteRow} />
            </div>

        );
    }


    handleNameChange = event => {
        this.setState({

            name: event.target.value
        });
    };

    handleJobChange = event => {
        this.setState({
            job: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const newEmployee = { "name": this.state.name, "job": this.state.job };
        if (newEmployee.name !== "" && newEmployee.job !== "") {
            const newList = [...this.state.list, newEmployee];
            this.setState({
                list: newList,
                name: '',
                job: ''
            })
        }
    }
    deleteRow = index => {
        const del = this.state.list;
        del.splice(index, 1);
        this.setState({
            list: del
        }, console.log(this.state.list))
    }

}

export default EmployeeForm;

