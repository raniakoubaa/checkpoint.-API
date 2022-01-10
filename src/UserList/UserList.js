import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserItem from '../UserItem/UserItem';


const UserList = () => {
    const [listOfUSer, setListOfUSer] = useState([])
       useEffect(() => {
        function fetchData() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    setListOfUSer(response.data);
                    // console.log(response)
                })
                .catch(function (err) {
                    console.log('error: ' + err);
                                });
                }
                   fetchData();
        }, []);
    return (
        
        <div>
   
    {listOfUSer.map(item => ( <UserItem item={item} key={item.id}/> ))}

        </div>
        
    )
}

export default UserList
