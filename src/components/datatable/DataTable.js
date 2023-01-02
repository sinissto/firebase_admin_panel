import './DataTable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns } from '../../datatablesource';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase';
import list from '../../pages/list/List';

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // try {
    //   let usersList = [];
    //   const fetchData = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'users'));
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       // console.log(doc.data());
    //       // console.log(doc.id, ' => ', doc.data());
    //       usersList.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(usersList);
    //   };
    //
    //   fetchData();
    // } catch (err) {
    //   console.log(err);
    // }

    //LISTEN
    try {
      const unsub = onSnapshot(collection(db, 'users'), (snapShoot) => {
        let list = [];
        snapShoot.docs.forEach((doc) =>
          list.push({ id: doc.id, ...doc.data() })
        );
        setData(list);
      });
      return () => {
        unsub();
      };
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log(data);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'users', id));
      setData(data.filter((item) => item.id !== id));
      console.log('korisnik obrisan');
    } catch (err) {
      console.log(err);
    }
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
        className="datagrid"
        columns={userColumns.concat(actionColumn)}
        rows={data}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection={true}
      />
    </div>
  );
};

export default DataTable;
