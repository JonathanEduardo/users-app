import React from 'react';
import Switch from '../atoms/Switch';
import Button from '../atoms/Button';

const TableRow = ({ user, onToggleStatus }) => (
    <tr>
        <th>
        <div class="relative h-10  ">
            {user.name}
            </div>
            </th>
        <td>
              <div class="relative h-10  ">
              {user.email}
                </div>
        </td>
        <td>
              <div class="relative h-10  w-full px-10">
              {new Date(user.created_at).toLocaleDateString()}
                </div>
        </td>
        <td>
            <div class="relative h-10  px-10">
              <Switch 
                isChecked={user.active} 
                onToggle={() => onToggleStatus(user.id, !user.active)} />

             
            </div>
            
        </td>
    </tr>
);

export default TableRow;
