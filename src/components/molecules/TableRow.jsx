import React from 'react';
import Switch from '../atoms/Switch';
import Button from '../atoms/Button';
import ButtonTable from '../atoms/ButtonTable';

const TableRow = ({ user, onToggleStatus, onClick }) => {

  
   
return (
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
        
            <ButtonTable onClick={() => onClick(user)} type='submit'>
                Editar
            </ButtonTable>

              <Switch 
                isChecked={user.active} 
                onToggle={() => onToggleStatus(user.id, !user.active)} />

             
            </div>
            
        </td>
    </tr>
);
};

export default TableRow;
