import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([])
       useEffect(() => {
        function fetchData() {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    return response.json();
                    //console.log(response)
                })
                .then(function (data) {
                    setListOfUSer(data);
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                                });
                }
                   fetchData();
        }, []);
    return (
        <div>
    <Table striped bordered hover width="50%">
  <thead>
    <tr>
    <th> Name</th>
    <th> User Name</th>
    <th> Email </th>
     <th> Phone Number </th>
     <th>website</th>
     <th> company</th>
    </tr>
  </thead>
  <tbody>   
    {listOfUSer.map(item => (
        <tr key={item.id}> 
                        <td>{item.name}</td>
                         <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.website}</td>
                        <td>{item.company.name}</td> 
                        
                        </tr>
                ))}
  </tbody>
</Table>
        </div>
    )
}

export default UserList
