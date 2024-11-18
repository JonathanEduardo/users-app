import React, { useEffect, useState } from 'react';
import UserTable from '../molecules/UserTable';
import { getUsers, toggleUserStatus } from '../../services/api';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [sortField, setSortField] = useState('name');

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
     

        
    };

    const handleSort = (field) => {
        setSortField(field);
        const sortedUsers = [...users].sort((a, b) => 
            a[field] > b[field] ? 1 : -1
        );
        setUsers(sortedUsers);
    };

    const handleToggleStatus = async (userId, status) => {
        await toggleUserStatus(userId, status);
        loadUsers();
    };

    return (
        <div>
            <UserTable 
                users={users} 
                onSort={handleSort} 
                onToggleStatus={handleToggleStatus} 
            />
        </div>
    );
};

export default UsersList;

