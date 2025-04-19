import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from '../../../utils/config';


const PAGE_SIZE = 1

export default function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [activePage, setActivePage] = useState(0)
    const [pageNumbers, setPageNumbers] = useState(0)
    const [filteredItems, setFilteredItems] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])



    useEffect(() => {
        Paginate()
    }, [users, activePage])


    const Paginate = () => {
        const activeItems = users.slice(activePage * PAGE_SIZE, (activePage + 1) * PAGE_SIZE);
        setFilteredItems(activeItems)
    }




    const getAllUsers = async () => {
        setIsLoading(true)
        const response = await axios.get(`${baseURL}/Account/GetUsers`)
        if (response.status == 200) {
            // todo list items
            setUsers(response.data)
            setIsLoading(false)
            setPageNumbers(Math.ceil(response.data.length / PAGE_SIZE))
        }
    }

    const renderPageNumbers = () => {
        let result = []
        for (let index = 0; index < pageNumbers; index++) {

            result.push(<li onClick={() => setActivePage(index)} class="page-item"><a class="page-link" href="#">{index + 1}</a></li>)
        }
        return result
    }

    console.log('Math.ceil(users.length / PAGE_SIZE)', Math.ceil(users.length / PAGE_SIZE));

    return (
        <div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">FullName</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <div className="card-title text-center border-bottom">
                        <h2 className="p-3">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div></h2>

                    </div> : filteredItems.map((item, index) => {
                        return (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.fullName}</td>
                            </tr>

                        )
                    })}

                </tbody>
            </table>
            <div style={{ display: "flex", justifyContent: 'center', paddingTop: 20 }}>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li hidden={activePage == 0} class="page-item"><a class="page-link" href="#" onClick={() => setActivePage(activePage - 1)}>Previous</a></li>
                        {renderPageNumbers()}
                        <li hidden={activePage + 1 >= Math.ceil(users.length / PAGE_SIZE)} class="page-item"><a class="page-link" href="#" onClick={() => setActivePage(activePage + 1)}> Next</a></li>
                    </ul>
                </nav>
            </div>
        </div >
    )
}
