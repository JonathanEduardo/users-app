import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const UserTable = ({ onClick, deleteUser,  users, onSort, onToggleStatus }) => {
    const columns = [
        { key: 'name', label: 'Nombre' },
        { key: 'email', label: 'Correo Electrónico' },
        { key: 'created_at', label: 'Fecha de Creación' },
        { key: 'status', label: 'Estado' },
    ];

    return (
        <table className="user-table">
            <TableHeader columns={columns} onSort={onSort} />
            <tbody>
                {users.map((user) => (
                    <TableRow 
                        key={user.id} 
                        user={user} 
                        onToggleStatus={onToggleStatus} 
                        onClick={onClick}
                        deleteUser={deleteUser}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
