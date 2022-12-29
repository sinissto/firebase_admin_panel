import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/*<Link to="/users/test" style={{ textDecoration: 'none' }}>*/}
            <Link
              to={`/users/:${params.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Add New User
        <Link to="/users/new/" className="link">
          Add
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        columns={userColumns.concat(actionColumn)}
        rows={userRows}
        checkboxSelection={true}
      />
    </div>
  );
};

export default DataTable;
