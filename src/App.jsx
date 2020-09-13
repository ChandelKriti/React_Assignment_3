import React, { Component } from 'react'
import "./styles.css";
import EmployeeForm  from './components/EmployeeForm'


export class App extends Component {
  render() {
    return (
      <div>
        <h1>Employee Details</h1>
        
        <EmployeeForm />
        
  
      </div>
    )
  }
}

export default App
