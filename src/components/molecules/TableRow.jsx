import React from 'react';
import Switch from '../atoms/Switch';

const TableRow = ({ user, onToggleStatus }) => (
    <tr>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{new Date(user.created_at).toLocaleDateString()}</td>
        <td>
            <Switch 
                isChecked={user.active} 
                onToggle={() => onToggleStatus(user.id, !user.active)} 
            />
        </td>
    </tr>
);

export default TableRow;
