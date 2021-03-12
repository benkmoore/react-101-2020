import { useState, useEffect } from 'react';

const useContactsAPI = () => {
    const [isLoading, setLoadingState] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        setLoadingState(true)
        await fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => data.results.map(user => (
            {
                title: `${user.name.first} ${user.name.last}`,
                content: `${user.login.username}`
            }
        )))
        .then(users => { 
                setUsers(users);
                setLoadingState(false);
            })
        .catch(error => {
            console.log(error);
            setLoadingState(false);
        })
    }

    return [{users, isLoading}, fetchUsers]
}

export default useContactsAPI