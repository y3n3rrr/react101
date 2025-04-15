import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { appPagination } from '../../../utils/constants';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'First name', width: 130 },
    { field: 'surname', headerName: 'Last name', width: 130 },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 130,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.name || ''} ${row.surname || ''}`,
    },
];



export default function Users() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        getAllUsers()
    }, [])


    const getAllUsers = async () => {
        const response = await axios.get(`https://localhost:7284/Account/GetUsers`)
        if (response.status == 200) {
            // todo list items
            setUsers(response.data)
        }
    }
    return (
        <div>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    initialState={{ pagination: { paginationModel: appPagination } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </div>
    )
}
