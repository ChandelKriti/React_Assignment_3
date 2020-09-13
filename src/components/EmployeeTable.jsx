import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { useEffect } from 'react';

const EmployeeTable = (props) => {

  const [data, setData] = useState(props.list);

  useEffect(() => {
    setData(props.list)
  }, [props.list]);

  const columns = [{
    title: 'Employee Name',
    field: 'name'
  },
  {
    title: 'Employee Job',
    field: 'job'
  }]

  const deleteRow = (rowData) => {
    props.delete(rowData)
  }
  return (
    <div>
      <MaterialTable title="Employee Record"

        data={data}
        columns={columns}
        options={{
          search: false,
          paging: false
        }}
        editable={{
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                deleteRow(index)

                resolve();
              }, 1000)
            })
        }}
      />
    </div>
  )
}

export default EmployeeTable;