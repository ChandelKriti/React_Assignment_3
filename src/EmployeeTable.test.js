import React from 'react';
import { render } from '@testing-library/react';
import EmployeeTable from './components/EmployeeTable';
import MaterialTable from './components/EmployeeTable';
import onRowDelete from './components/EmployeeTable';


test('Component is defined or not', () => {
    expect(<EmployeeTable />).toBeDefined();
});

test('Component is defined or not', () => {
    expect(<MaterialTable />).toBeDefined();
});

test('Heading present or not', () => {
    const { getByText } = render(<EmployeeTable />);
    const linkElement = getByText(/Employee Record/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('onRowDelete function is defined or not', () => {
    expect(onRowDelete).toBeDefined();
});

test('onRowDelete function should not be null', () => {
    expect(onRowDelete).not.toBeNull();
});