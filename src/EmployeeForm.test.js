import React from 'react';
//import { render } from '@testing-library/react';
import EmployeeForm from './components/EmployeeForm';
import handleSubmit from './components/EmployeeForm';
import handleNameChange from './components/EmployeeForm';
import handleJobChange from './components/EmployeeForm';


test('Component is defined or not', () => {
    expect(<EmployeeForm />).toBeDefined();
});

test('handleSubmit Function is defined or not', () => {
    expect(handleSubmit).toBeDefined();
});

test('handleNameChange function is defined or not', () => {
    expect(handleNameChange).toBeDefined();
});

test('handleJobChange function is defined or not', () => {
    expect(handleJobChange).toBeDefined();
});

test('handleSubmit Function should not be null', () => {
    expect(handleSubmit).not.toBeNull();
});

test('handleNameChange Function should not be null', () => {
    expect(handleNameChange).not.toBeNull();
});

test('handleJobChange Function should not be null', () => {
    expect(handleJobChange).not.toBeNull();
});

